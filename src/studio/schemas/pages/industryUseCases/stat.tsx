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
      name: 'sectionName',
      type: 'string',
      // validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'tagline',
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
      title: 'sectionName',
    },
  },
});

export default stat;
