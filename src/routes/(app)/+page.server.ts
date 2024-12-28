import { asset } from '$lib/sanity/sanity-image';

import groq from 'groq';
import type { PageServerLoad } from './$types';
import { sanityClient } from '$lib/sanity/sanity-client';
import type { LandingPageProps } from '../../types/landing.types';
import { error } from '@sveltejs/kit';

const query = groq`
    *[_id == "landingPage"][0]{
        ...,
        sections[]{
        ...,
        pricing{
                sectionName,
                ${asset('sectionIcon')},
                sectionTitle,
            },
            features[]{
            ...,
            ${asset('sectionIcon')},
            features[] {
            ...,
            ${asset('featureIcon')}
            }
        },
        testimonials[]-> {
        ...,
        ${asset('companyLogo')},
        ${asset('reviewerImage')},

      },
      comparison{
            ...,
            ${asset('sectionIcon')},
            comparisonCards[]{
              ...,
              ${asset('icon')},
              features[]{
              ...,
              ${asset('featureIcon')},
              },
            }
        },
        whyDialleadsAI{
        ...,
        ${asset('sectionIcon')},
        cards[]{
        ...,
        card{
        ...,
        ${asset('cardIcon')},
        },
        },
        },
        },
        "pricing": *[_type == "pricing"][0]{
            saveUpTo,
            plans[]{
                ${asset('icon')},
                planName,
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
            enterprisePlan{
                ${asset('sectionOptionIcon')},
                sectionOption,
                title,
                description,
                cta{
                    title,
                    ${asset('icon')},
                    type,
                    internalLink,
                    externalLink
                },
                ${asset('banner')},
            }
        }

    }
`;

export const load: PageServerLoad = async () => {
  const data: LandingPageProps = await sanityClient.fetch(query);

  if (!data) throw error(404, { message: 'Not found' });

  return { page: data };
};
