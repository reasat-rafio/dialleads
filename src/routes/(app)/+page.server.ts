import { sanityClient } from '$lib/sanity/sanity-client';
import { asset } from '$lib/sanity/sanity-image';

import { error } from '@sveltejs/kit';
import groq from 'groq';
import type { PageServerLoad } from './$types';
import type { LandingPageProps } from '../../types/landing.types';

const query = groq`
	*[_type == "landingPage"][0]{
    
    sections[]{
      ...,
      testimonials[]-> {
        ...,
        ${asset('companyLogo')},
        ${asset('reviewerImage')},
        
      }
    }
    }
`;

export const load: PageServerLoad = async () => {
  const data: LandingPageProps = await sanityClient.fetch(query);

  // if (!data) throw error(404, { message: 'Not found' });

  return {
    page: data,
  };
};
