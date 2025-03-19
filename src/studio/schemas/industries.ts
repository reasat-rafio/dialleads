import { orderRankField } from '@sanity/orderable-document-list';
import { FcNews } from 'react-icons/fc';
import { defineField } from 'sanity';

const industries = {
	name: 'industries',
	type: 'document',
	icon: FcNews,
	fields: [
		orderRankField({ type: 'industries' }),
		{
			name: 'seo',
			type: 'seo'
			// validation: (Rule: Rule) => Rule.required(),
		},
		defineField({
			name: 'buttonIcon',
			type: 'image',
			title: 'Button Icon',
			description: 'This will be shown when this case is not selected',
			// validation: (Rule) => Rule.required(),
			options: { hotspot: true },
		}),
		defineField({
			name: 'buttonIcon2',
			type: 'image',
			title: 'Button Icon 2',
			// validation: (Rule) => Rule.required(),
			description: 'This will be shown when this case is selected',
			options: { hotspot: true },
		}),
		defineField({
			name: 'title',
			type: 'string',
			title: 'Title',
			validation: (Rule) => Rule.required(),
			description: 'This will be used as the text for the button'
		}),
		defineField({
			name: 'description',
			type: 'string',
			title: 'Description',
			validation: (Rule) => Rule.required()
		}),

		defineField({
			name: 'slug',
			type: 'slug',
			title: 'Slug',
			options: {
				source: 'title',
			}
		}),

		defineField({
			name: 'useCases',
			title: 'Use Cases',
			type: 'array',
			validation: (Rule) => Rule.required(),
			of: [
				{
					name: 'useCase',
					title: 'Use Case',
					type: 'object',
					fields: [
						{
							name: 'title',
							title: 'Title',
							type: 'string',
						},
						{
							name: 'description',
							title: 'Description',
							type: 'text',
						},
					],
					preview: {
						select: {
							title: 'title'
						}
					}
				}
			]
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
		}),
	],
	preview: {
		select: {
			title: 'title'
		}
		// prepare({ title, subtitle }) {
		//   return { title: toPlainText(title), subtitle };
		// },
	}
};

export default industries;
