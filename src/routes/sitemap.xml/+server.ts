import { sanityClient } from '$lib/sanity/sanity-client';
import groq from 'groq';

interface UseCase {
  name: string;
  slug: string;
  _updatedAt: string;
}

const site = 'https://dialleads.vercel.app';
const pages = [
  'pricing',
  'contact',
  'industry-use-cases'
  
];

const query = groq`*[_type == "useCase"][]{
    name,
   "slug": slug.current,
   _updatedAt
}`;
const getUseCases = async () => {
  const useCases = await sanityClient.fetch(query);
  return useCases as UseCase[];
};

const sitemap = (
  useCases: UseCase[],
  pages: string[],
) => `<?xml version="1.0" encoding="UTF-8" ?>
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
    <priority>0.7</priority>
  </url>
  ${pages
    .map(
      (page) => `
  <url>
    <loc>${site}/${page}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  `,
    )
    .join('')}
  ${useCases
    .map(
      (useCase) =>
        `
  <url>
    <loc>${site}/blogs/${useCase.slug}</loc>
    <changefreq>weekly</changefreq>
    <lastmod>${useCase._updatedAt}</lastmod>
    <priority>0.3</priority>
  </url>
  `,
    )
    .join('')}
</urlset>`;

export async function GET({ setHeaders }) {
  const useCases = await getUseCases();

  setHeaders({
    'cache-control': 'max-age=120',
  });

  const body = sitemap(useCases, pages);
  const response = new Response(body);

  response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
  response.headers.set('Content-Type', 'application/xml');
  return response;
}
