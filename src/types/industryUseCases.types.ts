import type {
  SanityAssetDocument,
  SanityImageAssetDocument,
} from '@sanity/client';
import type { Link, SanityImageWithAlt, SeoProps } from './common.types';
import type { PortableTextBlock } from '@portabletext/types';
import type { SanityAsset } from '@sanity/image-url/lib/types/types';
import type { string } from 'zod';

export interface IndustryUseCasesProps {
  seo?: SeoProps;
  sections: Section[];

  title: string;
  description: string;
  useCaseImageForAI: SanityImageWithAlt;
  useCaseImage: SanityImageWithAlt;

  slug: any;

  useCaseTitleForAI: string;
  useCaseSubTitleForAI: string;
  mp3File: any;
}

type Section = HeroProps | DetailsProps | FeaturesProps | StatProps;

export interface IndustryUseCaseProps {
  useCaseTitleForAI: string;
  useCaseImageForAI: SanityImageWithAlt;
  slug: string;

  useCaseSubTitleForAI: string;
  mp3File: any;
}
export interface HeroProps {
  _type: 'industryUseCase.hero';
  sectionName: string;
  title: PortableTextBlock[];
  description: string;
  link: Link;

  slug: string;
}

export interface DetailsProps {
  _type: 'industryUseCase.details';
  sectionName: string;
  title: string;
  description: string;
  subDetails: {
    title: string;
    description: string;
    detailsImage: SanityImageWithAlt;
  }[];
  link: Link;
}
export interface FeaturesProps {
  _type: 'industryUseCase.features';
  sectionName: string;
  title: PortableTextBlock[];
  description: string;
  subDetails: {
    featureImage: SanityImageWithAlt;
    title: string;
  }[];
}
export interface StatProps {
  _type: 'industryUseCase.stat';
  tagline: string;
  title: PortableTextBlock[];
  description: string;
  stats: {
    value: string;
    title: string;
  }[];
}
