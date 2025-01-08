import { asset } from '$lib/sanity/sanity-image';
import groq from 'groq';
import type { PageServerLoad } from './$types';
import { sanityClient } from '$lib/sanity/sanity-client';
import type { LandingPageProps } from '../../types/landing.types';
import { error } from '@sveltejs/kit';
import { formSchema } from '$lib/formValidation';
import { zod } from 'sveltekit-superforms/adapters';
import { message, superValidate } from 'sveltekit-superforms';

const query = groq`
    *[_id == "landingPage"][0]{
        ...,
        sections[]{

            ...,
            ${asset('sectionImage')},
            ${asset('useCaseSectionImage')},

              testimonials[]-> {
        ...,
        ${asset('companyLogo')},
        ${asset('reviewerImage')},

      },


        ...,
        hero{
        ...,
        ${asset('sectionIcon')},
        ${asset('thumbnailForMobile')},
        ${asset('thumbnailForDesktop')},
        ${asset('videoPlayBtnIcon')},
         video{
         "webm": video_webm.asset->url,
         "mov": video_hevc.asset->url,
         }
        },
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
        dataDriven{
        ...,
        sectionDetails{
        ...,
        ${asset('sectionIcon')},
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
        whyChooseUs{
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

        "industries": *[_type == "industryUseCasePage"]{


          ...,
          _type,

          ${asset('useCaseImage')},
          ${asset('useCaseImageForAI')},
        },
        "pricing": *[_type == "pricing"][0]{
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

export const load: PageServerLoad = async ({ setHeaders }) => {
  const data: LandingPageProps = await sanityClient.fetch(query);
  setHeaders({ 'cache-control': 'public, max-age=3600' });

  if (!data) throw error(404, { message: 'Not found' });

  return { page: data, testCallForm: await superValidate(zod(formSchema)) };
};

export const actions = {
  create: async ({ request }) => {
    // const formData = await request.formData();

    const form = await superValidate(request, zod(formSchema));

    if (!form.valid) {
      return message(form, 'something went wrong +page.server.ts', {
        status: 400,
      });
    }

    console.log('form : ⚡  +page.server.ts : ', form.data);
    return message(
      form,
      'validation passed successfully .. form submitted .. 🟢 +page.server.ts',
    );
  },
};
