import type { PortableTextBlock } from "sanity";
import type { Banner, SeoProps } from "./common.types";

export interface PrivacyPolicy {
  seo: SeoProps;
  title: PortableTextBlock[];
  body: PortableTextBlock[];
  banner: {
    _type: "common.banner";
    banner: Banner;
  };
}
