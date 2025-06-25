import { formSchema } from '$lib/formValidation';
import { sanityClient } from '$lib/sanity/sanity-client';
import { asset } from '$lib/sanity/sanity-image';
import { error } from '@sveltejs/kit';
import groq from 'groq';
import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { LandingPageProps } from '../../types/landing.types';
import type { PageServerLoad } from './$types';

const query = groq`
    *[_id == "landingPage"][0]{
        ...,
        sections[]{
          ...,
          ${asset('thumbnail')},
          "webm": video_webm.asset->url,
          "mov": video_hevc.asset->url,
          hero{
            ...,
            useCases[]{
              ...,
              ${asset('useCaseImage')},
            },
            ${asset('sectionIcon')},
            ${asset('thumbnailForMobile')},
            ${asset('thumbnailForDesktop')},
            ${asset('videoPlayBtnIcon')}
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
          integrations{
            ...,
            brands[]{
              ...,
              ${asset('brandImage')},
            },
          },
          testimonials[]-> {
            ...,
            ${asset('reviewerImage')},
          },
          industries[]-> {
            ...,
            ${asset('buttonIcon')},
            ${asset('buttonIcon2')},
            ${asset('useCaseImage')},
          },
        },
        "bookCallButton": *[_type == "bookCallButton"][0] {
          label,
          url,
          openInNewTab
        },
      }
`;

export const load: PageServerLoad = async ({ setHeaders }) => {
	const data: LandingPageProps = await sanityClient.fetch(query);

	setHeaders({ 'cache-control': 'public, max-age=120' });

	if (!data) error(404, { message: 'Not found' });

	return { page: data, testCallForm: await superValidate(zod(formSchema)) };
};

export const actions = {
	create: async ({ request }) => {
		const form = await superValidate(request, zod(formSchema));

		if (!form.valid) {
			return message(form, 'something went wrong +page.server.ts', {
				status: 400
			});
		}

		return message(form, 'validation passed successfully .. form submitted .. 🟢 +page.server.ts');
	}
};
