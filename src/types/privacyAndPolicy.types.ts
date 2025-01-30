import type { PortableTextBlock } from 'sanity';
import type { SeoProps } from './common.types';

export interface PrivacyAndPolicyPageProps {
  seo?: SeoProps;
  privacyPolicy: PrivacyAndPolicyProps;
}

export interface PrivacyAndPolicyProps {
  _type: 'privacyAndPolicyPage.privacyAndPolicy';
  title: string;
  lastUpdated: string;
  sections: Section[];
}

export interface Section {
  sectionTitle: string;
  content: PortableTextBlock[];
}
