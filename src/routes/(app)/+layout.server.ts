import { error } from '@sveltejs/kit';
import { sanityClient } from '$lib/sanity/sanity-client';
import { siteQuery } from '$lib/sanity/query';
import type { SiteDataProps } from '../../types/site.types';
import groq from 'groq';
// import { asset } from '$lib/sanity/sanity-image';

const query = groq`
	*[_type == "industryUseCasePage" ][]{
    title,
    slug,
    
  }
`;

interface IndustriesProps {
	title: string;
	slug: {
		current: string;
		_type: string;
	};
}

export const load = async () => {
	const data: SiteDataProps = await sanityClient.fetch(siteQuery);

	// const industries: IndustriesProps[] = await sanityClient.fetch(query);

	if (!data) throw error(404, { message: 'Not found' });

	return { site: data };
	// return { site: data, industries };
};
