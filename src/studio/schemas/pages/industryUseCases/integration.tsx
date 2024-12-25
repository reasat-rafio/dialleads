import { SiHomeadvisor } from 'react-icons/si';
import { defineArrayMember, defineField, defineType } from 'sanity';
import { toPlainText } from '@portabletext/svelte';

const integration = defineType({
  title: 'integration',
  name: 'industryUseCase.integration',
  type: 'object',
  icon: SiHomeadvisor,
  fields: [
    defineField({
      name: 'badgeText',
      type: 'string',
      title: 'Badge Text',
      // validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      // validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      // validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'btnText',
      type: 'string',
      title: 'Button Text',
      // validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'integrationImages',
      title: 'Integration Images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'brandImage',
              type: 'image',
              title: 'Brand Image',
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
          ],
          preview: {
            select: {
              title: 'brandImage.alt',
              // subtitle: 'link',
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});

export default integration;
