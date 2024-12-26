import type { Link, SanityImageWithAlt, SeoProps } from './common.types';
import type { PortableTextBlock } from '@portabletext/types';

export interface LandingPageProps {
  seo: SeoProps;
  sections: Section[];
  pricing: Pricing;
}

type Section = HeroProps | PricingProps | ComparisonProps;

export interface HeroProps {
  _type: 'landing.hero';
  title: PortableTextBlock[];
  subtitle: string;
  link: Link;
}

export interface PricingProps {
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

export interface ComparisonProps {
  _key: string;
  _type: 'landing.comparison';
  pricing: Pricing;
  comparison: Comparison;
}

export interface Comparison {
  sectionName: string;
  sectionIcon: SanityImageWithAlt;
  sectionTitle: string;
  comparisonCards: ComparisonCard[];
}

export interface ComparisonCard {
  _key: string;
  _type: 'comparisonCard';
  cardType: 'AI Phone Agent' | 'Human Phone Agent';
  cardTitle: string;
  icon: SanityImageWithAlt;
  features: Feature[];
}

export interface Feature {
  featureName: string;
  featureIcon: SanityImageWithAlt;
}