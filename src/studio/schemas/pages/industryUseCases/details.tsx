import { SiHomeadvisor } from 'react-icons/si';
import { defineArrayMember, defineField, defineType } from 'sanity';
import { toPlainText } from '@portabletext/svelte';

const details = defineType({
	title: 'details',
	name: 'industryUseCase.details',
	type: 'object',
	icon: SiHomeadvisor,
	fields: [
		defineField({
			name: 'sectionName',
			type: 'string'
			// validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'title',
			type: 'string'
			// validation: (Rule) => Rule.required(),
		}),

		defineField({
			name: 'description',
			type: 'string'
			// validation: (Rule) => Rule.required(),
		}),

		defineField({
			name: 'subDetails',
			title: 'Sub Details',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'object',
					fields: [
						defineField({
							name: 'title',
							title: 'Title',
							type: 'string'
							// validation: (Rule) => Rule.required(),
						}),
						defineField({
							name: 'description',
							title: 'Description',
							type: 'string'
							// validation: (Rule) => Rule.required(),
						}),

						defineField({
							name: 'detailsImage',
							type: 'image',
							title: 'Details Image',
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
							// subtitle: 'link',
						}
					}
				})
			]
		}),
		// defineField({
		//   name: 'btnText',
		//   type: 'string',
		//   // validation: (Rule) => Rule.required(),
		// }),

		defineField({
			name: 'link',
			type: 'link'
		})
	],
	preview: {
		select: {
			title: 'sectionName'
		}
	}
});

export default details;
