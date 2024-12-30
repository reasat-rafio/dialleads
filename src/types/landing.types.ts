import type { Link, SanityImageWithAlt, SeoProps } from './common.types';
import type { PortableTextBlock } from '@portabletext/types';

export interface LandingPageProps {
  seo: SeoProps;
  sections: Section[];
  pricing: Pricing;
  industries: Industries[];
}

type Section =
  | HeroProps
  | FaqProps
  | TestimonialsProps
  | PricingProps
  | ComparisonProps
  | IndustriesProps
  | ClientProps
  | TestCallProps
  | UseCaseProps;

export interface UseCaseProps {
  _type: 'landing.useCase';
  useCaseSectionImage: SanityImageWithAlt;
  sectionIcon: SanityImageWithAlt;
  sectionTitle: string;
  title: string;
  description: string;
  useCases: UseCases[];
}

export interface UseCases {
  useCaseImage: SanityImageWithAlt;
  useCaseTitle: string;
  useCaseSubTitle: string;
}

export interface TestCallProps {
  _type: 'landing.testCall';
  sectionIcon: SanityImageWithAlt;
  sectionTitle: string;
  backgroundImage: SanityImageWithAlt;
  title: string;
  personImage: SanityImageWithAlt;
  personName: string;
  status: string;
}
export interface Industries {
  _type: string;
  slug: object;
  _id: string;
  description: string;
  title: string;
}

export interface IndustriesProps {
  _type: 'landing.industry';
  _id: string;
  description: string;
  title: string;
}
export interface ClientProps {
  _type: 'landing.clients';
}
export interface HeroProps {
  _type: 'landing.hero';
  title: PortableTextBlock[];
  subtitle: string;
  link: Link;
}

export interface FaqProps {
  _type: 'landing.faq';
  _key: string;
  sectionTitle: string;
  sectionIcon: SanityImageWithAlt;
  title: string;
  description: string;
  faq: Faq[];
}

export interface Faq {
  _key: string;
  question: string;
  answer: string;
}

export interface TestimonialsProps {
  _type: 'landing.testimonials';
  sectionTitle: string;
  sectionIcon: SanityImageWithAlt;
  title: string;
  testimonials: Testimonial[];
}

export interface Testimonial {
  review: string;
  reviewerImage: SanityImageWithAlt;
  name: string;
  position: string;
  companyName: string;
  companyLogo: string;
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
