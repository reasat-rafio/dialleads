import type { PortableTextBlock } from "@portabletext/types";
import type { BannerProps, Link, SanityImageWithAlt, SeoProps, VideoProps } from "./common.types";

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
  | VideoProps
  | ComparisonProps
  | IndustriesProps
  | ClientProps
  | TestCallProps
  // | UseCaseProps
  | WhyDialleadsAIProps
  | HowtoGetStartedProps
  | IntegrationsProps
  | WhyChooseUsProps
  | DataDrivenProps
  | BannerProps;

export interface UseCaseProps {
  _type: "landing.useCase";
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mp3File: any;
}

export interface TestCallProps {
  _type: "landing.testCall";
  sectionIcon: SanityImageWithAlt;
  sectionTitle: string;
  supportingText: string;
  ctaBtnText: string;
  ctaBtnIcon: SanityImageWithAlt;
  backgroundImage: SanityImageWithAlt;
  title: PortableTextBlock[];
}

export interface Industries {
  _type: string;
  slug: object;
  _id: string;
  description: string;
  title: string;
}

export interface IndustriesProps {
  _type: "landing.industry";
  _id: string;
  slug: object;
  sectionTitle: string;
  sectionIcon: SanityImageWithAlt;
  title: string;
  useCaseIcon: SanityImageWithAlt;
  industries: {
    buttonIcon: SanityImageWithAlt;
    buttonIcon2: SanityImageWithAlt;
    title: string;
    description: string;
    useCaseImage: SanityImageWithAlt;
    useCases: IndustryUseCase[];
  }[];
}

export interface IndustryUseCase {
  title: string;
  description: string;
}

export interface ClientProps {
  _type: "landing.clients";
  title: PortableTextBlock[];
  clients: {
    clientImage: SanityImageWithAlt;
  }[];
}
export interface HeroProps {
  _type: "landing.hero";
  hero: Hero;
}
export interface Hero {
  sectionIcon: SanityImageWithAlt;
  sectionName: string;
  heroTitle: PortableTextBlock[];
  subtitle: string;
  video: HeroVideo;
  link: Link;
  useCases: UseCases[];
}
export interface HeroVideo {
  mov: string;
  webm: string;
}

export interface FaqProps {
  _type: "landing.faq";
  _key: string;
  sectionTitle: string;
  sectionIcon: SanityImageWithAlt;
  title: string;
  description: string;
  faq: Faq[];
}

export interface FaqProps {
  _type: "landing.faq";
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
  _type: "landing.testimonials";
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
}

export interface PricingProps {
  _key: string;
  _type: "landing.pricing";
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
  planName: Name;
  price: number;
  features: Feature[];
  cta: CTA;
}

export interface Name {
  name: string;
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
  type: "internal" | "external";
  internalLink?: string;
  externalLink?: string;
}

export interface ComparisonProps {
  _key: string;
  _type: "landing.comparison";
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
  _type: "comparisonCard";
  cardType: "AI Phone Agent" | "Human Phone Agent";
  cardTitle: string;
  icon: SanityImageWithAlt;
  features: Feature[];
}

export interface Feature {
  featureName: string;
  featureIcon: SanityImageWithAlt;
}

export interface WhyDialleadsAIProps {
  _key: string;
  _type: "landing.whyDialleadsAI";
  whyDialleadsAI: WhyDialleadsAI;
}
export interface WhyDialleadsAI {
  sectionName: string;
  sectionIcon: SanityImageWithAlt;
  sectionTitle: string;
  cards: Card[];
}
export interface Card {
  cardTitle: string;
  cardIcon: SanityImageWithAlt;
  cardDescription: string;
}

export interface HowtoGetStartedProps {
  _key: string;
  _type: "landing.getStarted";
  getStarted: GetStarted;
}

export interface GetStarted {
  sectionName: string;
  sectionIcon: SanityImageWithAlt;
  sectionTitle: string;
  cards: GetStartedCard[];
}

export interface GetStartedCard {
  stepText: string;
  cardTitle: string;
  cardDescription: string;
  ctaBtnText: string;
  ctaBtnIcon: SanityImageWithAlt;
  ctaBtnURL: string;
}

export interface IntegrationsProps {
  _key: string;
  _type: "landing.integrations";
  integrations: Integrations;
}

export interface Integrations {
  sectionName: string;
  sectionIcon: SanityImageWithAlt;
  sectionTitle: string;
  description: string;
  ctaBtnText: string;
  ctaBtnIcon: SanityImageWithAlt;
  brands: IntegrationBrand[];
}

export interface IntegrationBrand {
  brandImage: SanityImageWithAlt;
}

export interface WhyChooseUsProps {
  _key: string;
  _type: "landing.whyChooseUs";
  whyChooseUs: WhyChooseUs;
}
export interface WhyChooseUs {
  sectionName: string;
  sectionIcon: SanityImageWithAlt;
  sectionTitle: string;
  cards: WhyChooseUsCard[];
}
export interface WhyChooseUsCard {
  cardIcon: SanityImageWithAlt;
  cardDescription: string;
  cardDescriptionFor: string;
}

export interface DataDrivenProps {
  _key: string;
  _type: "landing.dataDriven";
  dataDriven: DataDriven;
}
export interface DataDriven {
  title: string;
  description: string;
  cta: CTA;
  text: string;
  sectionDetails: SectionDetails;
}

export interface SectionDetails {
  sectionName: string;
  sectionIcon: SanityImageWithAlt;
}
