import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const sanityClient = createClient({
  projectId: 'zhic6sia',
  dataset: 'production',
  apiVersion: '2025-02-26',
  useCdn: process.env.NODE_ENV === 'production',
});

export const imgBuilder = imageUrlBuilder(sanityClient);

export const urlFor = (source: SanityImageSource) => {
  return imgBuilder.image(source);
};
