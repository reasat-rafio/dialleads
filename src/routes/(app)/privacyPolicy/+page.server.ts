import groq from 'groq';
import type { PageServerLoad } from '../$types';
import type { PrivacyAndPolicyPageProps } from '../../../types/privacyAndPolicy.types';
import { sanityClient } from '$lib/sanity/sanity-client';
import { error } from '@sveltejs/kit';

const query = groq`
  *[_type == "privacyAndPolicyPage"][0]{
  ...,
    privacyPolicy{
    ...,
      title,
      lastUpdated,
      sections[]{
        sectionTitle,
        content
      }
    }
  }
`;

export const load: PageServerLoad = async ({ setHeaders }) => {
  const data: PrivacyAndPolicyPageProps = await sanityClient.fetch(query);
  setHeaders({ 'cache-control': 'public, max-age=120' });

  if (!data) throw error(404, { message: 'Not found' });
  console.log(data);

  return { page: data };
};
