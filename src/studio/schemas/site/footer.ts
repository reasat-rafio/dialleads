import { FcBusinessContact } from 'react-icons/fc';
import { defineArrayMember, defineField, defineType } from 'sanity';
import { MdOutlineCallToAction } from 'react-icons/md';

const footer = defineType({
  title: 'Footer',
  name: 'site.footer',
  type: 'document',
  icon: MdOutlineCallToAction,
  fields: [
   

    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'joinMoreTitle',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [defineArrayMember({ type: 'block' })],
    }),
    defineField({
      name: 'joinMoreBanner',
      type: 'image',
      description: 'Image for Join More Than',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility',
          type: 'string',
          // validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: 'getStartedbtnText',
      title: 'Get Started Button Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'getStartedbtnLink',
      title: 'Get Started Button Link',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'sideText',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
          type: 'string',
          // validation: (Rule) => Rule.required(),
        },
      ],
    }),

    defineField({
      name: 'companyName',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'newsLetterText',
      type: 'string',
      title: 'News Letter Text',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'newsLetter2ndText',
      type: 'string',
      title: 'News Letter 2nd Text',
      validation: (Rule) => Rule.required(),
    }),

    {
      name: 'browse',
      title: 'Browse',
      type: 'array',
      of: [{ type: 'link' }],
    },

    {
      name: 'about',
      title: 'About',
      type: 'array',
      of: [{ type: 'link' }],
    },

    {
      name: 'legal',
      title: 'Legal',
      type: 'array',
      of: [{ type: 'link' }],
    },

    {
      name: 'subItems',
      title: 'Sub Items',
      type: 'array',
      of: [{ type: 'link' }],
    },

    defineField({
      name: 'copyRightText',
      type: 'string',
      title: 'Copy Right Text',
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
    prepare: (props) => ({
      ...props,
      icon: FcBusinessContact,
    }),
  },
});

export default footer;
