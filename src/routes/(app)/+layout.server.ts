import { error } from '@sveltejs/kit';
import { sanityClient } from '$lib/sanity/sanity-client';
import { siteQuery } from '$lib/sanity/query';
import type { SiteDataProps } from '../../types/site.types';
// import type { SiteDataProps } from '$lib/types/site.types.ts';

export const load = async () => {
  const data: SiteDataProps = await sanityClient.fetch(siteQuery);

  if (!data) throw error(404, { message: 'Not found' });

  return { site: data };
};
