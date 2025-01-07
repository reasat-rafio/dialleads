import type { PortableTextBlock } from 'sanity';
import type { SanityImageWithAlt, SeoProps } from './common.types';
import type { Plan } from './landing.types';

export interface PricingPageProps {
  seo: SeoProps;
  plans: Plan[];
  saveUpTo: number;
  sections: Section[];
}

export type Section = HeroProps | SubscriptionDetailsProps;

export interface HeroProps {
  _type: 'pricing.hero';
  hero: Hero;
}

export interface Hero {
  sectionName: string;
  sectionTitle: PortableTextBlock[];
  sectionDescription: string;
  sectionIcon: SanityImageWithAlt;
}

export interface SubscriptionDetailsProps {
  _type: 'pricing.subscriptionDetails';
  subscriptionDetails: SubscriptionDetails;
}

export interface SubscriptionDetails {
  features: Feature[];
}

export interface Feature {
  featureHeading: string;
  featureIcon: SanityImageWithAlt;
  featureLists: FeatureList[];
  instructions?: Instruction[];
}

export interface FeatureList {
  featureName: string;
  values: Value[];
}

export interface Value {
  type: 'text' | 'status';
  text?: string; 
  isAvailable?: boolean;
  relatedPlan?: PlanReference;
}

export interface PlanReference {
  _ref: string;
  _type: 'reference';
  name: string;
}

export interface Instruction {
  instruction?: PortableTextBlock[];
}
