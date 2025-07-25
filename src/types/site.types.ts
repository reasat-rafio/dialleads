import type { SanityDocument } from "@sanity/client";
import type { Link, SanityImageWithAlt } from "./common.types";
// import type { PortableTextBlock } from 'sanity';

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
  companyName: string;
  menuIcon: SanityImageWithAlt;
  menu: LinkMenu[];
  cta: LinkItem;
  _updatedAt: Date;
  _createdAt: Date;
}
export interface LinkMenu {
  _type: "link";
  link: LinkItem;
}
export interface LinkItem {
  _type: "link";
  title: string;
  type: "internal" | "external";
  internalLink?: string;
  externalLink?: string;
}
export interface MoreLink {
  _type: "link";
  title: string;
  type: "internal" | "external";
  internalLink?: string;
  externalLink?: string;
}

export interface Footer {
  companyLogo: SanityImageWithAlt;
  companyName: string;
  supportingText: string;
  browse: Link[];
  subItems: Link[];
  copyRightText: string;
  socials: Link[];
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
