import type { PortableTextBlock } from 'sanity';
import type { SanityImageWithAlt, SeoProps } from './common.types';
import type { Plan } from './landing.types';

export interface PricingPageProps {
  seo: SeoProps;
  plans: Plan[];
  saveUpTo: number;
  sections: Section[];
}

export type Section = HeroProps;

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
