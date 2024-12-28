import { SiHomeadvisor } from 'react-icons/si';
import { defineArrayMember, defineField, defineType } from 'sanity';
import { toPlainText } from '@portabletext/svelte';

const testCall = defineType({
  title: 'TestCall',
  name: 'landing.testCall',
  type: 'object',
  icon: SiHomeadvisor,
  fields: [
    defineField({
      name: 'sectionTitle',
      type: 'string',
      title: 'Section Title',
      // validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sectionIcon',
      type: 'image',
      title: 'Section Icon',
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
      name: 'title',
      title: 'Title',
      type: 'string',
      // validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'personImage',
      type: 'image',
      title: 'Person Image',
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
      name: 'personName',
      title: 'Person Name',
      type: 'string',
      // validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      // validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'forms',
      title: 'Forms',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              type: 'string',
            }),
            defineField({
              name: 'email',
              type: 'string',
            }),
            defineField({
              name: 'phoneNumber',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              title: 'email',
            },
          },
        }),
      ],
    }),

    defineField({
      name: 'ctaBtnText',
      title: 'CTA Button Text',
      type: 'string',
      // validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'sectionTitle',
    },
  },
});

export default testCall;
