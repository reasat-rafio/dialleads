import groq from 'groq';
import type { PageServerLoad } from '../$types';
import { sanityClient } from '$lib/sanity/sanity-client';
import { error } from '@sveltejs/kit';
import type { PrivacyPolicyPageProps } from '../../../types/privacyAndPolicy.types';

const query = groq`
  *[_type == "privacyPolicy"][0]{
  ...,
    seo,
    title,
    sections[]{
      sectionTitle,
      content
    }
  }
`;

export const load: PageServerLoad = async ({ setHeaders }) => {
  const data: PrivacyPolicyPageProps = await sanityClient.fetch(query);
  setHeaders({ 'cache-control': 'public, max-age=120' });

  if (!data) throw error(404, { message: 'Not found' });
  console.log(data);

  return { page: data };
};
