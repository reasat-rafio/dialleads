import groq from 'groq';
import { asset } from '$lib/sanity/sanity-image';
import type { PageServerLoad } from '../$types';
import { sanityClient } from '$lib/sanity/sanity-client';
import type { IndustriesPageProps } from '../../../../types/industries.types';
import { error } from '@sveltejs/kit';

const query = groq`
    *[_id == "industriesPage"][0]{
        ...,
        sections[]{
          ...,
          hero{
            ...,
            agentCard{
              ...,
              ${asset('cardImage')},
            },
          },
        },
      }
`;

export const load: PageServerLoad = async ({ setHeaders }) => {
    const data: IndustriesPageProps = await sanityClient.fetch(query);
    setHeaders({ 'cache-control': 'public, max-age=120' });

    if (!data) error(404, { message: 'Not found' });

    return { page: data };
};
