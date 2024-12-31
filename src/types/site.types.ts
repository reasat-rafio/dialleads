import type { SanityDocument } from '@sanity/client';
import type { Link, SanityImageWithAlt } from './common.types';

export interface SiteDataProps {
  logos: {
    favicon: SanityImageWithAlt;
    ogImage: SanityImageWithAlt;
    logo: SanityImageWithAlt;
  };
  nav: Nav;
  footer: Footer;
  greetings: Greetings;
}

export type Greetings = SanityDocument & { greetings: string[] };

export interface Nav {
  _rev: string;
  _type: string;
  _id: string;
  menu: LinkMenu[];
  _updatedAt: Date;
  _createdAt: Date;
}
export interface LinkMenu {
  _type: 'link';
  link: LinkItem;
  moreLinks: MoreLink[];
}
export interface LinkItem{
  _type: 'link',
  title: string;
  type: 'internal' | 'external';
  internalLink?: string;
  externalLink?: string;
}
export interface MoreLink{
  _type: 'link',
  title: string;
  type: 'internal' | 'external';
  internalLink?: string;
  externalLink?: string;
}

export interface Footer {
  backgroundOne: SanityImageWithAlt;
  backgroundTwo: SanityImageWithAlt;
  title: string;
  getStartedbtnText: string;
  getStartedbtnLink: string;
  sideText: string;
  companyLogo: SanityImageWithAlt;
  companyName: string;
  newsLetterText: string;
  newsLetter2ndText: string;
  browse: Link[];
  about: Link[];
  legal: Link[];
  subItems: Link[];
  copyRightText: string;
}

export interface SocialProps {
  title: string;
  socials: Social[];
}

export interface Contact {
  _type: string;
  _key: string;
  name: string;
  value: string;
  url?: string;
}

export interface Social {
  _type: string;
  _key: string;
  name: string;
  url: string;
}
