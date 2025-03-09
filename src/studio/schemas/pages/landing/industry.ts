import { SiHomeadvisor } from 'react-icons/si';
import { defineArrayMember, defineField, defineType } from 'sanity';

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
			name: 'sectionImage',
			type: 'image',
			title: 'Section Image',
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
			name: 'industries',
			title: 'Industries',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'object',
					fields: [
						defineField({
							name: 'title',
							type: 'string',
							title: 'Title',
							validation: (Rule) => Rule.required()
						}),
						defineField({
							name: 'description',
							type: 'string',
							title: 'Description',
							validation: (Rule) => Rule.required()
						}),

						defineField({
							name: 'useCaseImage',
							type: 'image',
							title: 'Use Case Image',
							// validation: (Rule) => Rule.required(),
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
						})
					],
					preview: {
						select: {
							title: 'title'
						}
					}
				})
			]
		})
	],
	preview: {
		select: {
			title: 'sectionTitle', // Main section title
			subtitle: 'title', // Additional title for context
			media: 'sectionIcon', // Main media from section icon
			fallbackMedia: 'sectionImage' // Fallback media if section icon is unavailable
		},
		prepare({ title, subtitle, media, fallbackMedia }) {
			return {
				title: title || 'Industry Section', // Fallback if no section title
				subtitle: subtitle || 'No title provided', // Fallback if no subtitle
				media: media || fallbackMedia || SiHomeadvisor // Section icon or fallback to section image
			};
		}
	}
});

export default industry;
