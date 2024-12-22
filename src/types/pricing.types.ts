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
    subheading: string;
    columns: ComparePlansColumn[];
  }
  
  export interface ComparePlansColumn {
    title: string;
    subtitle: string;
    buttonText: string;
    rows: ComparePlansRow[];
  }
  
  export interface ComparePlansRow {
    icon: SanityImageObject;
    title: string;
    points: ComparePlansPoint[];
  }
  
  export interface ComparePlansPoint {
    text: string;
    icon?: SanityImageObject;
  }
  