import groq from 'groq';
import { asset } from '$lib/sanity/sanity-image';
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
          useCases[]{
            ...,
            ${asset('useCaseImage')},
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
        },
      }
`;

export const load: PageServerLoad = async ({ setHeaders }) => {
	const data: LandingPageProps = await sanityClient.fetch(query);
	setHeaders({ 'cache-control': 'public, max-age=120' });

	if (!data) throw error(404, { message: 'Not found' });

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
