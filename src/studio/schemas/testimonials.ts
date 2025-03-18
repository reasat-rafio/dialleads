import { orderRankField } from '@sanity/orderable-document-list';
import { FcNews } from 'react-icons/fc';
import { defineArrayMember, defineField, type Rule, type SlugSourceContext } from 'sanity';

const testimonials = {
	name: 'testimonials',
	type: 'document',
	icon: FcNews,
	fields: [
		orderRankField({ type: 'testimonials' }),
		{
			name: 'seo',
			type: 'seo'
			// validation: (Rule: Rule) => Rule.required(),
		},
		defineField({
			name: 'review',
			title: 'Review',
			type: 'text'
			// validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'reviewerImage',
			type: 'image',
			title: 'Reviewer Image',
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
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string'
			// validation: (Rule) => Rule.required(),
		}),

		defineField({
			name: 'position',
			title: 'Position',
			type: 'string'
			// validation: (Rule) => Rule.required(),
		}),

		defineField({
			name: 'companyName',
			title: 'Company Name',
			type: 'string'
			// validation: (Rule) => Rule.required(),
		}),

		defineField({
			name: 'companyLogo',
			type: 'image',
			title: 'Company Logo',
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

		defineField({
			name: 'slug',
			type: 'slug',
			title: 'Slug',
			options: {
				source: 'name',
				maxLength: 96 // Optional: Restrict the length of the slug
			}
		})
	],
	preview: {
		select: {
			title: 'name'
		}
		// prepare({ title, subtitle }) {
		//   return { title: toPlainText(title), subtitle };
		// },
	}
};

export default testimonials;
