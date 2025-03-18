import { sanityClient } from '$lib/sanity/sanity-client';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import groq from 'groq';

const query = groq`
    *[_id == "landingPage"][0]
`;

export const load: PageServerLoad = async ({ setHeaders }) => {
	const data = await sanityClient.fetch(query);
	setHeaders({ 'cache-control': 'public, max-age=360' });

	if (!data) error(404, { message: 'Not found' });

	return { page: data };
};
