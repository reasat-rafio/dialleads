import groq from 'groq';
import type { PageServerLoad } from '../$types';
import { sanityClient } from '$lib/sanity/sanity-client';
import { error } from '@sveltejs/kit';
import type { TermsAndConditionPageProps } from '../../../types/termsAndCondition.types';

const query = groq`
  *[_type == "termsAndCondition"][0]{
  ...,
    seo,
    title,
    description,
    sections[]{
      sectionTitle,
      content
    }
  }
`;

export const load: PageServerLoad = async ({ setHeaders }) => {
  const data: TermsAndConditionPageProps = await sanityClient.fetch(query);
  setHeaders({ 'cache-control': 'public, max-age=120' });

  if (!data) throw error(404, { message: 'Not found' });
  console.log(data);

  return { page: data };
};
