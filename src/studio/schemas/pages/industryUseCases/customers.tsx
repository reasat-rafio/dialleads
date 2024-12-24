import { SiHomeadvisor } from 'react-icons/si';
import { defineArrayMember, defineField, defineType } from 'sanity';
import { toPlainText } from '@portabletext/svelte';

const customers = defineType({
  title: 'customers',
  name: 'industryUseCase.customers',
  type: 'object',
  icon: SiHomeadvisor,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      // validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'brands',
      title: 'Brands',
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

export default customers;
