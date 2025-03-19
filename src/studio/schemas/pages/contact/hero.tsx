import { SiHomeadvisor } from 'react-icons/si';
import { defineArrayMember, defineField, defineType } from 'sanity';
import { FaPenFancy } from 'react-icons/fa';
import React from 'react';
import { alt } from '$studio/lib/alt';

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
			fields: [alt()]
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
										<span className="bg-[linear-gradient(75deg,_#731AFF_31%,_#FCCEEE_170%)] bg-clip-text font-semibold text-white/15">
											{children}
										</span>
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
			type: 'text'
		})
	],
	preview: {
		select: {
			title: 'sectionTitle',
			subtitle: 'title.0.children.0.text',
			media: 'sectionIcon',
			fallbackMedia: 'contactPageImage'
		},
		prepare({ title, subtitle, media, fallbackMedia }) {
			return {
				title: title || 'Hero Section',
				subtitle: subtitle || 'No title provided',
				media: media || fallbackMedia || SiHomeadvisor
			};
		}
	}
});

export default hero;
