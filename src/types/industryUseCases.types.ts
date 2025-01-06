import type {
  SanityAssetDocument,
  SanityImageAssetDocument,
} from '@sanity/client';
import type { Link, SanityImageWithAlt, SeoProps } from './common.types';
import type { PortableTextBlock } from '@portabletext/types';
import type { SanityAsset } from '@sanity/image-url/lib/types/types';

export interface IndustryUseCasesProps {
  seo?: SeoProps;
  sections: Section[];
}

type Section = DetailsProps | FeaturesProps | StatProps;
// | OfferProps
// | CustomersProps
// | TryItProps
// | FeaturesV2Props
// | ReviewProps

export interface DetailsProps {
  sectionName: string;
  title: string;
  description: string;
  subDetails: {
    title: string;
    description: string;
    detailsImage: SanityImageWithAlt;
  }[];
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
