import { IoNavigate } from 'react-icons/io5';
import { type Rule } from 'sanity';

const siteNavigation = {
	name: 'site.nav',
	title: 'Navigation',
	type: 'document',
	icon: IoNavigate,
	fields: [
		{
			name: 'companyName',
			type: 'string',
			validation: (Rule: Rule) => Rule.required()
		},
		{
			name: 'menuIcon',
			type: 'image',
			title: 'Menu Icon for Mobile',
			validation: (Rule: Rule) => Rule.required(),
			options: { hotspot: true },
			fields: [
				{
					name: 'alt',
					title: 'Alternative Text',
					description: 'Important for SEO and accessibility',
					type: 'string'
					// validation: (Rule) => Rule.required(),
				}
			]
		},
		{
			name: 'menu',
			title: 'Menu',
			type: 'array',
			of: [
				{
					type: 'object',
					name: 'menuItem',
					title: 'Menu Item',
					fields: [
						{
							name: 'link',
							title: 'Link',
							type: 'link'
						},
					]
				}
			],
		},
		{
			name: 'cta',
			title: 'CTA Button',
			type: 'link',
		},
	],
	preview: {
		select: {
			title: 'menu'
		},
		prepare({ title }: { title: { link?: { title?: string } }[] }) {
			if (!title || title.length === 0) {
				return {
					title: 'No Menu Items',
					subtitle: 'Navigation'
				};
			}

			const titles = title.map((item) => item?.link?.title || 'Untitled Link').join(', ');

			return {
				title: `Menu: ${titles}`,
				subtitle: 'Navigation'
			};
		}
	}
};

export default siteNavigation;
