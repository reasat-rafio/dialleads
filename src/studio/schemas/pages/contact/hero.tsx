import { SiHomeadvisor } from 'react-icons/si';
import { defineArrayMember, defineField, defineType } from 'sanity';
import { FaPenFancy } from 'react-icons/fa';
import React from 'react';

const hero = defineType({
	title: 'Hero',
	name: 'contact.hero',
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
			title: 'Title',
			type: 'array',
			validation: (Rule) => Rule.required(),
			of: [
				defineArrayMember({
					type: 'block',
					styles: [],
					lists: [],
					marks: {
						decorators: [
							{
								title: 'Violet Gradient',
								value: 'violetGradientV2',
								// @ts-expect-error i don't know how to fix this
								blockEditor: {
									icon: () => <FaPenFancy />,
									render: ({ children }: { children: React.ReactNode }) => (
										<span className="violet-gradient">{children}</span>
									)
								}
							}
						]
					}
				})
			]
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'string'
		}),
		defineField({
			name: 'contactPageImage',
			type: 'image',
			title: 'Contact Page Image',
			options: { hotspot: true },
			fields: [
				{
					name: 'alt',
					title: 'Alternative Text',
					description: 'Important for SEO and accessibility',
					type: 'string'
				}
			]
		})
	],
	preview: {
		select: {
			title: 'sectionTitle', // Main section title
			subtitle: 'title.0.children.0.text', // First block text from the title
			media: 'sectionIcon', // Section icon as preview image
			fallbackMedia: 'contactPageImage' // Fallback media if sectionIcon is unavailable
		},
		prepare({ title, subtitle, media, fallbackMedia }) {
			return {
				title: title || 'Hero Section', // Fallback if sectionTitle is not provided
				subtitle: subtitle || 'No title provided', // Fallback for subtitle if no text is found in title
				media: media || fallbackMedia || SiHomeadvisor // Section icon or fallback to contact page image
			};
		}
	}
});

export default hero;
