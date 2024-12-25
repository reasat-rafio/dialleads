// +page.server.ts
import { sanityClient } from '$lib/sanity/sanity-client';
import groq from 'groq';
import type { PageServerLoad } from './$types';

import { error } from '@sveltejs/kit';
import { asset } from '$lib/sanity/sanity-image';
import type { IndustryUseCasesProps } from '../../../../types/industryUseCases.types';

const query = groq`
	*[_type == "industryUseCasePage" &&  slug.current == $slug][0]{
    
    sections[]{
      ...,
      
    }
    }
`;

export const load: PageServerLoad = async ({ params }) => {
  const { slug } = params;

  const data: IndustryUseCasesProps = await sanityClient.fetch(query, { slug });

  // if (!data) throw error(404, { message: 'Page not found' });

  return {
    page: data,
  };
};
