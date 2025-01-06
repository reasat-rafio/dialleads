import { SiHomeadvisor } from 'react-icons/si';
import { defineArrayMember, defineField, defineType } from 'sanity';
import { toPlainText } from '@portabletext/svelte';

const features = defineType({
  title: 'features',
  name: 'industryUseCase.features',
  type: 'object',
  icon: SiHomeadvisor,
  fields: [
    defineField({
      name: 'sectionName',
      type: 'string',
      // validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [defineArrayMember({ type: 'block' })],
    }),

    defineField({
      name: 'description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'subDetails',
      title: 'Sub Details',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'featureImage',
              type: 'image',
              title: 'Feature Image',
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
          ],
          preview: {
            select: {
              title: 'title',
              // subtitle: 'link',
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'sectionName',
      // subtitle: 'subtitle',
    },
  },
});

export default features;
