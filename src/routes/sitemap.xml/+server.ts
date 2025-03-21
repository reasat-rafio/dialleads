import { sanityClient } from '$lib/sanity/sanity-client.js';
import groq from 'groq';

interface Document {
	name: string;
	slug: string;
	_updatedAt: string;
}
type SiteMap = {
	industryPages: Document[];
	pages: { name: string; priority: number }[];
};
type DocumentData = {
	doc_name: string;
	customQuery?: string;
};

const site = 'https://www.dialleads.vercel.app';

const query = groq`*[_type == $doc_name][]{
  title,
  "slug": slug.current,
  _updatedAt
}`;

const getData = async ({ doc_name, customQuery }: DocumentData): Promise<Document[]> => {
	const data = await sanityClient.fetch(customQuery || query, { doc_name });
	return data;
};

const dynamicPagesArrayToXml = (pages: Document[], parentUrl: string) =>
	pages.map(
		(item) => `
  <url>
    <loc>${site}/${parentUrl}/${item.slug}</loc>
    <changefreq>weekly</changefreq>
    <lastmod>${item._updatedAt}</lastmod>
    <priority>0.3</priority>
  </url>
  `
	);

const sitemap = ({ pages, industryPages }: SiteMap) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  <url>
    <loc>${site}</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  ${pages
		.map(
			(page) => `
  <url>
    <loc>${site}/${page.name}</loc>
    <changefreq>daily</changefreq>
    <priority>${page.priority}</priority>
  </url>
  `
		)
		.join('')}
    ${dynamicPagesArrayToXml(industryPages, 'industries').join('')}
</urlset>`;

export async function GET({ setHeaders }) {
	setHeaders({ 'cache-control': 'public, max-age=3600' });

	const industries = await getData({ doc_name: 'industries' });

	const body = sitemap({
		industryPages: industries,
		pages: [
			{ name: 'privacy-policy', priority: 0.1 },
			{ name: 'terms-conditions', priority: 0.1 }
		]
	});
	const response = new Response(body);

	response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
	response.headers.set('Content-Type', 'application/xml');
	return response;
}
