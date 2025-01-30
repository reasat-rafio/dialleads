import type { PortableTextBlock } from 'sanity';
import type { SeoProps } from './common.types';

export interface TermsAndConditionPageProps {
  seo?: SeoProps;
  title: PortableTextBlock[];
  description: PortableTextBlock[];
  sections: Section[];
  _updatedAt: string;
}

export interface Section {
  sectionTitle: string;
  content: PortableTextBlock[];
}
