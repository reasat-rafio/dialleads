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
		// defineField({
		//   name: 'title',
		//   type: 'string',
		//   validation: (Rule) => Rule.required(),
		// }),

		// defineField({
		//   name: 'joinMoreTitle',
		//   title: 'Join More Title',
		//   type: 'array',
		//   validation: (Rule) => Rule.required(),
		//   of: [
		//     defineArrayMember({
		//       type: 'block',
		//       styles: [],
		//       lists: [],
		//       marks: {
		//         decorators: [
		//           {
		//             title: 'Violet Gradient',
		//             value: 'violetGradient',
		//             // @ts-expect-error i don't know how to fix this
		//             blockEditor: {
		//               icon: () => <FaPenFancy />,
		//               render: ({ children }: { children: React.ReactNode }) => (
		//                 <span className="violet-gradient">{children}</span>
		//               ),
		//             },
		//           },
		//         ],
		//       },
		//     }),
		//   ],
		// }),

		// defineField({
		//   name: 'joinMoreBanner',
		//   type: 'image',
		//   description: 'Image for Join More Than',
		//   options: {
		//     hotspot: true,
		//   },
		//   fields: [
		//     {
		//       name: 'alt',
		//       title: 'Alternative Text',
		//       description: 'Important for SEO and accessibility',
		//       type: 'string',
		//       // validation: (Rule) => Rule.required(),
		//     },
		//   ],
		// }),
		// defineField({
		//   name: 'getStartedbtnText',
		//   title: 'Get Started Button Text',
		//   type: 'string',
		//   validation: (Rule) => Rule.required(),
		// }),

		// defineField({
		//   name: 'getStartedbtnLink',
		//   title: 'Get Started Button Link',
		//   type: 'string',
		//   validation: (Rule) => Rule.required(),
		// }),

		// defineField({
		//   name: 'sideText',
		//   type: 'string',
		//   validation: (Rule) => Rule.required(),
		// }),

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
