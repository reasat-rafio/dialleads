import type { Link, SanityImageWithAlt, SeoProps } from './common.types';
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

export interface PricingPageProps {
  _key: string;
  _type: 'landing.pricing';
  sectionName: string;
  sectionTitle: string;
  sectionIcon: SanityImageWithAlt;
}

export interface Pricing {
  saveUpTo: number;
  plans: Plan[];
  enterprisePlan: EnterprisePlan;
}
export interface Plan {
  icon: SanityImageWithAlt;
  planName: string;
  price: number;
  features: Feature[];
  cta: CTA;
}

export interface Feature {
  featureName: string;
}

export interface EnterprisePlan {
  sectionOptionIcon: SanityImageWithAlt;
  sectionOption: string;
  title: string;
  description: string;
  cta: CTA;
  banner: SanityImageWithAlt;
}

export interface CTA {
  title: string;
  icon: SanityImageWithAlt;
  type: 'internal' | 'external';
  internalLink?: string;
  externalLink?: string;
}
