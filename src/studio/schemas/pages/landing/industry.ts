import { SiHomeadvisor } from 'react-icons/si';
import { defineField, defineType } from 'sanity';

const industry = defineType({
	title: 'Industry',
	name: 'landing.industry',
	type: 'object',
	icon: SiHomeadvisor,
	fields: [
		defineField({
			name: 'sectionTitle',
			type: 'string',
			title: 'Section Title'
		}),
		defineField({
			name: 'sectionIcon',
			type: 'image',
			title: 'Section Icon',
			options: { hotspot: true },
			fields: [
				{
					name: 'alt',
					title: 'Alternative Text',
					description: 'Important for SEO and accessibility',
					type: 'string'
				}
			]
		}),
		defineField({
			name: 'title',
			type: 'string',
			title: 'Title'
		}),

		defineField({
			name: 'useCaseIcon',
			type: 'image',
			title: 'Use Case Icon',
			validation: (Rule) => Rule.required(),
			options: { hotspot: true },
		}),

		defineField({
			name: 'industries',
			title: 'Industries',
			type: 'array',
			of: [{ type: 'reference', to: [{ type: 'industries' }] }],
		})
	],
	preview: {
		select: {
			title: 'sectionTitle', // Main section title
			subtitle: 'title', // Additional title for context
			media: 'sectionIcon', // Main media from section icon
		},
		prepare({ title, subtitle, media }) {
			return {
				title: title || 'Industry Section', // Fallback if no section title
				subtitle: subtitle || 'No title provided', // Fallback if no subtitle
				media: media || SiHomeadvisor // Section icon or fallback to section image
			};
		}
	}
});

export default industry;
