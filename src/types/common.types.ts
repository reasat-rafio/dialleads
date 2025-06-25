import type { SanityAsset, SanityImageObject } from '@sanity/image-url/lib/types/types';
import type { PortableTextBlock } from 'sanity';
import type { CTA } from './landing.types';

export interface SeoProps {
	_type: 'seo';
	title: string;
	description: string;
	keywords: string[]; //new added
	ogImage: SanityAsset;
}

export interface Link {
	_type: 'link';
	icon: SanityImageWithAlt;
	title: string;
	type: 'internal' | 'external';
	internalLink?: string;
	externalLink?: string;
}

export type SanityImageWithAlt = SanityImageObject & {
	alt: string;
};

export interface Video {
	mov: string;
	webm: string;
}

export interface Banner {
	title: PortableTextBlock[];
	cta: CTA;
}

export interface BannerProps {
	_key?: string;
	_type: 'common.banner';
	banner: Banner;
}

export interface VideoProps {
	_key?: string;
	_type: 'common.video';
	thumbnail: SanityImageWithAlt;
	mov: string;
	webm: string;
}


export interface BookCallButton {
	label: string;
	url: string;
	openInNewTab: boolean;
  }
  