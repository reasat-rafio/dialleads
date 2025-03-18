import { SiHomeadvisor } from 'react-icons/si';
import { defineArrayMember, defineField, defineType } from 'sanity';
import { FaPenFancy } from 'react-icons/fa';
import React from 'react';

const clients = defineType({
	title: 'Clients',
	name: 'landing.clients',
	type: 'object',
	icon: SiHomeadvisor,
	fields: [
		defineField({
			name: 'sectionName',
			type: 'string',
			title: 'Section Name'
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
								title: 'Violate Gradient',
								value: 'violateGradient',
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
			name: 'clients',
			title: 'Clients',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'object',
					fields: [
						defineField({
							name: 'clientImage',
							type: 'image',
							title: 'Client Image',
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
							name: 'clientTitle',
							title: 'Client Title',
							type: 'string'
						})
					],
					preview: {
						select: {
							title: 'clientTitle'
						}
					}
				})
			]
		})
	],
	preview: {
		select: {
			title: 'sectionName',
			subtitle: 'title.0.title', // The first title in the array
			media: 'clients.0.clientImage' // The first client image
		},
		prepare({ title, subtitle, media }) {
			return {
				title: title || 'Clients Section',
				subtitle: subtitle || 'No title provided',
				media: media || SiHomeadvisor // Fallback to the icon if no image
			};
		}
	}
});

export default clients;
