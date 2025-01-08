import { asset } from '$lib/sanity/sanity-image';
import groq from 'groq';
import { sanityClient } from '$lib/sanity/sanity-client';
import { error } from '@sveltejs/kit';
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

export const load = async ({ setHeaders }) => {
  const data: ContactPageProps = await sanityClient.fetch(query);
  setHeaders({ 'cache-control': 'public, max-age=3600' });

  console.log('data 😭😭', data);

  if (!data) throw error(404, { message: 'Not found' });

  return { page: data };
};
