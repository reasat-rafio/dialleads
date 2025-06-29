import type { PortableTextBlock } from '@portabletext/types';
import type { BannerProps, Link, SanityImageWithAlt, SeoProps } from './common.types';

export interface IndustriesPageProps {
	seo: SeoProps;
	sections: Section[];
}

type Section =
	| HeroProps
	| WhyUsProps
	| WhyDialleadsAIProps
	| SecuredAndEfficientProps
	| BannerProps;

export interface HeroProps {
	_type: 'industries.hero';
	hero: Hero;
}

export interface Hero {
	heroTitle: PortableTextBlock[];
	subtitle: string;
	link: Link;
	agentCard: HeroAgentCard;
}

export interface HeroAgentCard {
	cardImage: SanityImageWithAlt;
	cardTitle: string;
	cardSubTitle: string;
	mp3File: Mp3File;
}

export interface Mp3File {
	_type: string;
	asset: Asset;
}

export interface Asset {
	sha1hash: string;
	url: string;
	assetId: string;
	_updatedAt: Date;
	extension: string;
	_type: string;
	path: string;
	size: number;
	_createdAt: Date;
	_id: string;
	originalFilename: string;
	uploadId: string;
	_rev: string;
	mimeType: string;
}

export interface SecuredAndEfficientProps {
	_type: 'industries.securedAndEfficient';
	securedAndEfficient: SecuredAndEfficient;
}

export interface SecuredAndEfficient {
	sectionName: string;
	sectionIcon: SanityImageWithAlt;
	sectionTitle: PortableTextBlock[];
	description: string;
	stats: Stats[];
}

export interface Stats {
	value: string;
	description: string;
}

export interface WhyDialleadsAIProps {
	_key: string;
	_type: 'industries.whyDialleadsAI';
	whyDialleadsAI: WhyDialleadsAI;
}

export interface WhyDialleadsAI {
	sectionName: string;
	sectionIcon: SanityImageWithAlt;
	sectionTitle: string;
	cards: WhyDialleadsCard[];
}

export interface WhyDialleadsCard {
	cardTitle: string;
	cardIcon: SanityImageWithAlt;
	cardDescription: string;
}

export interface WhyUsProps {
	_key: string;
	_type: 'industries.whyUs';
	whyUs: WhyUs;
}

export interface WhyUs {
	sectionName: string;
	sectionIcon: SanityImageWithAlt;
	sectionTitle: PortableTextBlock[];
	description: string;
	cta: Link;
	cards: WhyUsCard[];
}

export interface WhyUsCard {
	cardImage: SanityImageWithAlt;
	cardTitle: string;
	cardDescription: string;
}
