import { FcBusinessContact } from 'react-icons/fc';
import { defineField, defineType } from 'sanity';
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
      name: 'btnText',
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

    // defineField({
    //   name: 'contacts',
    //   type: 'array',
    //   validation: (Rule) => Rule.required().min(1),
    //   of: [
    //     {
    //       name: 'option',
    //       type: 'object',
    //       icon: FcBusinessContact,
    //       fields: [
    //         {
    //           name: 'name',
    //           type: 'string',
    //           validation: (Rule) => Rule.required(),
    //         },
    //         {
    //           name: 'value',
    //           type: 'text',
    //           rows: 2,
    //           validation: (Rule) => Rule.required(),
    //         },
    //         {
    //           name: 'url',
    //           type: 'string',
    //         },
    //       ],
    //       preview: {
    //         select: {
    //           title: 'name',
    //           subtitle: 'value',
    //         },
    //       },
    //     },
    //   ],
    // }),

    // defineField({
    //   name: 'social',
    //   type: 'object',
    //   fields: [
    //     defineField({
    //       name: 'title',
    //       type: 'string',
    //       validation: (Rule) => Rule.required(),
    //     }),
    //     defineField({
    //       name: 'socials',
    //       type: 'array',
    //       validation: (Rule) => Rule.required().min(1),
    //       of: [{ type: 'social' }],
    //     }),
    //   ],
    // }),
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
