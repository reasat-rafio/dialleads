import { SiHomeadvisor } from 'react-icons/si';
import { defineArrayMember, defineField, defineType } from 'sanity';
import { toPlainText } from '@portabletext/svelte';

const hero = defineType({
  title: 'hero',
  name: 'industryUseCase.hero',
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
      type: 'string',
      // validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'link',
      type: 'link',
    }),
  ],
  preview: {
    select: {
      title: 'sectionName',
    },
  },
});

export default hero;
