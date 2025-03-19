import { defineArrayMember, defineField, defineType } from 'sanity';
import { BsImage } from 'react-icons/bs';
import { FaPenFancy } from 'react-icons/fa';
import React from 'react';

const banner = defineType({
	title: 'Banner',
	name: 'common.banner',
	type: 'object',
	icon: BsImage,
	fields: [
		{
			title: 'Banner',
			name: 'banner',
			type: 'object',
			fields: [
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
					name: 'cta',
					title: 'Call to Action Button',
					type: 'link',
					description: 'Add a call to action for the banner.'
				})
			]
		}
	],
	preview: {
		select: {
			title: 'banner.cta.title'
		},
		prepare({ title }) {
			return {
				title: title || 'Untitled Banner',
				subtitle: 'Banner'
			};
		}
	}
});

export default banner;
