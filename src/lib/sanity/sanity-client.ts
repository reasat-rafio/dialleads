import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const sanityClient = createClient({
  projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2025-02-26',
  useCdn: process.env.NODE_ENV === 'production',
});

export const imgBuilder = imageUrlBuilder(sanityClient);

export const urlFor = (source: SanityImageSource) => {
  return imgBuilder.image(source);
};
