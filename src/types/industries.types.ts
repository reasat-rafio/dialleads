import type { BannerProps, Link, SanityImageWithAlt, SeoProps } from './common.types';
import type { PortableTextBlock } from '@portabletext/types';

export interface IndustriesPageProps {
	seo: SeoProps;
	sections: Section[];
}

type Section =
	| HeroProps
	| IndustriesProps
	| WhyDialleadsAIProps
	| SecuredAndEfficientProps
	| BannerProps;


export interface IndustriesProps {
	_type: 'industries.industry';
	_id: string;
	slug: object;
	sectionTitle: string;
	sectionIcon: SanityImageWithAlt;
	title: string;
	useCaseIcon: SanityImageWithAlt;
	industries: {
		buttonIcon: SanityImageWithAlt;
		buttonIcon2: SanityImageWithAlt;
		title: string;
		description: string;
		useCaseImage: SanityImageWithAlt;
		useCases: IndustryUseCase[];
		stats: Stats[];
	}[];
}

export interface IndustryUseCase {
	title: string;
	description: string;
}


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
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	mp3File: any;
}

export interface CTA {
	title: string;
	icon: SanityImageWithAlt;
	type: 'internal' | 'external';
	internalLink?: string;
	externalLink?: string;
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
