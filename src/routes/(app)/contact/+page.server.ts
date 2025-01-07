import { asset } from '$lib/sanity/sanity-image';

import groq from 'groq';
import type { PageServerLoad } from './$types';
import { sanityClient } from '$lib/sanity/sanity-client';

import { error } from '@sveltejs/kit';
import { formSchema } from '$lib/formValidation';
import { zod } from 'sveltekit-superforms/adapters';
import { message, superValidate } from 'sveltekit-superforms';
import type { ContactPageProps } from '../../../types/contact.types';
const query = groq`
    *[_id == "contactPage"][0]{
        ...,
        sections[]{
            ...,
              hero{
              ...,
              ${asset('sectionIcon')},
              },
              contactForm{
                ...,
                ${asset('contactPageImage')},
              },
        },
    }
`;

// contactForm {
//   ...,
//   ${asset('contactPageImage')},
// }

export const load: PageServerLoad = async () => {
  const data: ContactPageProps = await sanityClient.fetch(query);

  console.log('data 😭😭', data);

  if (!data) throw error(404, { message: 'Not found' });

  return { page: data };
};
