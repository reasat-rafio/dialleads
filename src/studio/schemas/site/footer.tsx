import { FcBusinessContact } from 'react-icons/fc';
import {
	// defineArrayMember,
	defineField,
	defineType
} from 'sanity';
import { MdOutlineCallToAction } from 'react-icons/md';
// import { FaPenFancy } from 'react-icons/fa';
// import React from 'react';

const footer = defineType({
	title: 'Footer',
	name: 'site.footer',
	type: 'document',
	icon: MdOutlineCallToAction,
	fields: [

		defineField({
			name: 'companyLogo',
			type: 'image',
			title: 'Company Logo',
			validation: (Rule) => Rule.required(),
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
			name: 'companyName',
			type: 'string',
			validation: (Rule) => Rule.required()
		}),

		defineField({
			name: 'supportingText',
			type: 'string',
			title: 'Supporting Text',
			validation: (Rule) => Rule.required()
		}),

		{
			name: 'browse',
			title: 'Browse',
			type: 'array',
			of: [{ type: 'link' }]
		},

		{
			name: 'subItems',
			title: 'Sub Items',
			type: 'array',
			of: [{ type: 'link' }]
		},

		defineField({
			name: 'copyRightText',
			type: 'string',
			title: 'Copy Right Text',
			validation: (Rule) => Rule.required()
		}),

		{
			name: 'socials',
			title: 'Socials',
			type: 'array',
			of: [{ type: 'link' }]
		}
	],

	preview: {
		select: {
			title: 'title'
		},
		prepare: (props) => ({
			...props,
			icon: FcBusinessContact
		})
	}
});

export default footer;
