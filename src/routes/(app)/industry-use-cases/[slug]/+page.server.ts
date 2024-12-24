// +page.server.ts
import { sanityClient } from '$lib/sanity/sanity-client';
import groq from 'groq';
import type { PageServerLoad } from './$types';

import { error } from '@sveltejs/kit';
import { asset } from '$lib/sanity/sanity-image';

const query = groq`
	*[_type == "industryUseCasePage" &&  slug.current == $slug][0]{
    
    sections[]{
      ...,
      
    }
    }
`;

export const load: PageServerLoad = async ({ params }) => {
  const { slug } = params;

  const data: any = await sanityClient.fetch(query, { slug });
  //data: WorkDetailsProps

  // if (!data) throw error(404, { message: 'Page not found' });

  console.log('data :::::::::::', data, slug);

  return {
    page: data,
  };
};
