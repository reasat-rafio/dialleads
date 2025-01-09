import type { StringRule } from 'sanity';
import type { Link, SanityImageWithAlt, SeoProps } from './common.types';
import type { PortableTextBlock } from '@portabletext/types';

export interface ContactPageProps {
  seo: SeoProps;
  sections: Section[];
}

type Section = HeroProps | ContactFormProps;

export interface HeroProps {
  _type: 'contact.hero';
  sectionTitle: string;
  sectionIcon: SanityImageWithAlt;
  title: PortableTextBlock[];
  description: string;
  contactPageImage: SanityImageWithAlt;
}

export interface ContactFormProps {
  _key: string;
  _type: 'contact.contactForm';
  sectionTitle: string;
  contactPageImage: SanityImageWithAlt;
}
