import type { Link, SanityImageWithAlt, SeoProps } from './common.types';
import type { PortableTextBlock } from '@portabletext/types';

export interface LandingPageProps {
  seo: SeoProps;
  sections: Section[];
}

type Section = HeroProps | FaqProps | TestimonialsProps;

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
