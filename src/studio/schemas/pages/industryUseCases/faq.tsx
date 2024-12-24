import { SiHomeadvisor } from 'react-icons/si';
import { defineArrayMember, defineField, defineType } from 'sanity';
import { toPlainText } from '@portabletext/svelte';

const faq = defineType({
  title: 'faq',
  name: 'industryUseCase.faq',
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
      title: 'Title',
      type: 'string',
      // validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'faq',
      title: 'FAQ',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
              // validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'string',
              // validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'question',
              // subtitle: 'link',
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'badgeText',
    },
  },
});

export default faq;
