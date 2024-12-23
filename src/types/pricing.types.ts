import type { SanityImageObject } from '@sanity/image-url/lib/types/types';
import type { SeoProps } from './common.types';

export interface PricingPageProps {
  seo: SeoProps;
  sections: Section[];
}

export type Section = ComparePlansProps;

export interface ComparePlansProps {
  _key: string;
  _type: 'pricingPage.comparePlans';
  plans: Plans;
  plansDetails: PlansDetails[];
  subscriptionTypes: SubscriptionType[];
}

export interface Plans {
  heading: string;
  subHeading: SubHeading;
}

export interface SubHeading {
  text: string;
  icon: SanityImageObject;
}

export interface PlansDetails {
  features: Feature[];
}

export interface Feature {
  icon: SanityImageObject;
  featureHeading: string;
  featureLists: FeatureList[];
}

export interface FeatureList {
  featureName: string;
  values: Value[];
}

export interface Value {
  type: 'text' | 'status';
  text?: string;
  isAvailable?: boolean;
  relatedSubscriptionType?: SubscriptionType;
}

export interface SubscriptionType {
  _id: string;
  title: string;
}

export interface SubscriptionType {
  _id: string;
  title: string;
  subtitle: string;
  price: Price[];
  buttonText: string[];
}
export interface Price {
  type: 'monthly' | 'yearly';
  value: string;
}
