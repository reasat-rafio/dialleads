import type { SanityImageObject } from '@sanity/image-url/lib/types/types';
import type { Link, SeoProps } from './common.types';
import type { PortableTextBlock } from '@portabletext/types';

export interface LandingPageProps {
  seo: SeoProps;
  sections: Section[];
  pricing: Pricing;
}

type Section = HeroProps | PricingPageProps;

export interface HeroProps {
  _type: 'landing.hero';
  title: PortableTextBlock[];
  subtitle: string;
  link: Link;
}

export interface PricingPageProps{
  _key: string;
  _type: "landing.pricing";
  sectionName: string;
  sectionTitle: string;
  sectionIcon: SanityImageObject;
}

export interface Pricing {
  saveUpTo: number;
  plans: Plan[];
  enterprisePlan: EnterprisePlan;
}

export interface Plan {
  icon: {
    icon: SanityImageObject
    alt: string;
  };
  planName: string;
  price: number;
  features: Feature[];
}

export interface Feature {
  featureName: string;
}

export interface EnterprisePlan {
  description: string;
  banner: {
    banner: SanityImageObject;
    alt: string;
  };
}
