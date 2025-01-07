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
  industryUseCases: IndustryUseCaseProps;
}

type Section = HeroProps | DetailsProps | FeaturesProps | StatProps;

export interface IndustryUseCaseProps {
  useCaseTitle: string;
  useCaseImage: SanityImageWithAlt;
  slug: string;
  mp3File: any;
  useCaseSubTitle: string;
  industryName: string;
}
export interface HeroProps {
  sectionName: string;
  title: PortableTextBlock[];
  description: string;
  link: Link;
}

export interface DetailsProps {
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
  sectionName: string;
  title: PortableTextBlock[];
  description: string;
  subDetails: {
    featureImage: SanityImageWithAlt;
    title: string;
  }[];
}
export interface StatProps {
  tagline: string;
  title: PortableTextBlock[];
  description: string;
  stats: {
    value: string;
    title: string;
  }[];
}
// export interface OfferProps {}
// export interface CustomersProps {}
// export interface TryItProps {}
// export interface FeaturesV2Props {}
// export interface ReviewProps {}
