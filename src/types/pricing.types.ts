import type { SanityImageObject } from "@sanity/image-url/lib/types/types";

export interface PricingPageProps {
    sections: PricingSection[];
}

export type PricingSection = ComparePlansProps;

export interface ComparePlansProps {
    _type: 'pricingPage.comparePlans';
    comparePlans: ComparePlans;
}

export interface ComparePlans {
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
