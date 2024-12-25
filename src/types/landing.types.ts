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
  sectionTitle: string;
  sectionIcon: SanityImageWithAlt;
  title: Link;
  description: string;
  faq: Faq[];
}

export interface Faq {
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
