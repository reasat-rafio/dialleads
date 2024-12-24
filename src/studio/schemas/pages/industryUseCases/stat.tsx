import { SiHomeadvisor } from 'react-icons/si';
import { defineArrayMember, defineField, defineType } from 'sanity';
import { toPlainText } from '@portabletext/svelte';

const stat = defineType({
  title: 'stat',
  name: 'industryUseCase.stat',
  type: 'object',
  icon: SiHomeadvisor,
  fields: [
    defineField({
      name: 'tagline',
      type: 'string',
      // validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'title',
      type: 'string',
      // validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'value',
              title: 'Value',
              type: 'string',
              // validation: (Rule) => Rule.required(),
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
      title: 'title',
    },
  },
});

export default stat;
