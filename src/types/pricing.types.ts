import type { SanityImageObject } from "@sanity/image-url/lib/types/types";
import type { SeoProps } from "./common.types";

export interface PricingPageProps {
  seo: SeoProps;
  sections: Section[];
}

export type Section = ComparePlansSection | SubscriptionTypeSection | FeaturesSection;

export interface ComparePlansSection {
  _key: string;
  _type: 'pricingPage.comparePlans';
  plans: Plans;
}

export interface SubscriptionTypeSection {
  _key: string;
  _type: 'pricingPage.subscriptionTypes';
  subscriptionTypes: SubscriptionType[];
}

export interface FeaturesSection {
  _key: string;
  _type: 'pricingPage.features';
  features: ComparePlansFeature[];
}

export interface Plans {
  heading: string;
  subHeading: SubHeading;
  subscriptionTypes: SubscriptionType[];
  features: ComparePlansFeature[];
}

export interface SubHeading {
  text: string;
  icon: SanityImageObject;
}

export interface SubscriptionType {
  _id: string;
  title: string;
  subtitle: string;
  price: Price[];
  buttonText: string[];
}

export interface Price {
  type: 'monthly' | 'annually';
  value: number;
}

export interface ComparePlansFeature {
  _id: string;
  icon: SanityImageObject;
  featureHeading: string;
  featureLists: FeatureList[];
}

export interface FeatureList {
  featureName: string;
  values: FeatureValue[];
}

export interface FeatureValue {
  type: 'text' | 'status';
  text?: string;
  isAvailable?: boolean;
  relatedSubscriptionType?: SubscriptionTypeReference;
}

export interface SubscriptionTypeReference {
  _id: string;
  title: string;
}
