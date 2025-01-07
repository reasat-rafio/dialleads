import groq from 'groq';
import type { PageServerLoad } from '../$types';
import { sanityClient } from '$lib/sanity/sanity-client';
import { error } from '@sveltejs/kit';
import type { PricingPageProps } from '../../../types/pricing.types';
import { asset } from '$lib/sanity/sanity-image';

const query = groq`
    *[_id == "pricing"][0]{
    ...,
    saveUpTo,
    plans[]{
                    ${asset('icon')},
                    planName->{
                    name
                    },
                    price,
                    features[]{
                        featureName
                    },
                    cta{
                        title,
                        ${asset('icon')},
                        type,
                        internalLink,
                        externalLink
                    }
    },
    sections[]{
        ...,
        subscriptionDetails{
        ...,
        features[]{
        ...,
        ${asset('featureIcon')},
        featureLists[]{
        ...,
        values[]{
        ...,
        relatedPlan->{
                            name
                        },
        }
        }
        }
        }
    },
    }
`;

export const load: PageServerLoad = async () => {
  const data: PricingPageProps = await sanityClient.fetch(query);
  if (!data) throw error(404, { message: 'Not found' });

  return { page: data };
};
