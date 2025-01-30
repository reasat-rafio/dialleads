import type { PortableTextBlock } from 'sanity';
import type { SeoProps } from './common.types';

export interface PrivacyPolicyPageProps {
  seo?: SeoProps;
  title: string;
  sections: Section[];
  _updatedAt: string;
}

export interface Section {
  sectionTitle: string;
  content: PortableTextBlock[];
}
