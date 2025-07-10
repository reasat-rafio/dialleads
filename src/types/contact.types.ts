import type { PortableTextBlock } from "sanity";
import type { BannerProps, SanityImageWithAlt, SeoProps } from "./common.types";

type Section = HeroProps | ContactFormProps | BannerProps;

export interface ContactPage {
  seo: SeoProps;
  sections: Section[];
}

export interface HeroProps {
  _type: "contact.hero";
  sectionTitle: string;
  sectionIcon: SanityImageWithAlt;
  title: PortableTextBlock[];
  description: string;
}

export interface ContactFormProps {
  _type: "contact.contactForm";
  title: string;
  description: string;
  contactPageImage: SanityImageWithAlt;
}
