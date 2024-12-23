import { sanityClient } from '$lib/sanity/sanity-client';
import { asset } from '$lib/sanity/sanity-image';
import { error } from '@sveltejs/kit';
import groq from 'groq';
import type { PageServerLoad } from './$types';
import type { PricingPageProps } from '../../../types/pricing.types';

const query = groq`
  *[_id == 'pricingPage'][0]{
    seo,
    sections[]{
      ...,
      plans {
        heading,
        subHeading {
          text,
          ${asset('icon')}
        },
        subscriptionTypes[]-> {
          _id,
          title,
          subtitle,
          price[] {
            type,
            value
          },
          buttonText
        },
        features[] {
          
            ${asset('icon')},
          featureHeading,
          featureLists[] {
            featureName,
            values[] {
              type,
              text,
              isAvailable,
              relatedSubscriptionType-> {
                _id,
                title
              }
            }
          }
        }
      }
    }
  }
`;

export const load: PageServerLoad = async () => {
  try {
    // Fetch data from Sanity
    const data: PricingPageProps = await sanityClient.fetch(query);

    if (!data) {
      throw error(404, { message: 'Page not found' });
    }

    return {
      page: data,
    };
  } catch (err) {
    console.error('Failed to fetch data:', err);
    throw error(500, { message: 'Failed to fetch data' });
  }
};
