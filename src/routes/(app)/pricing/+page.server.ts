import { sanityClient } from '$lib/sanity/sanity-client';
import { asset } from '$lib/sanity/sanity-image';
import { error } from '@sveltejs/kit';
import groq from 'groq';
import type { PageServerLoad } from './$types';
import type { PricingPageProps } from '../../../types/pricing.types';

const query = groq`
  *[_id == "pricingPage"][0]{
    ...,
    sections[] {
      ...,
      comparePlans {
        ...,
        heading,
        subheading,
        columns[] {
          ...,
          title,
          subtitle,
          buttonText,
          rows[] {
            ...,
            ${asset('icon')},
            title,
            points[] {
              ...,
              text,
              ${asset('icon')}
            }
          }
        }
      }
    }
  }
`;

export const load: PageServerLoad = async () => {
  const data: PricingPageProps = await sanityClient.fetch(query);
  if (!data) throw error(404, { message: 'Not found' });

  return { page: data };
};
