import { SiHomeadvisor } from 'react-icons/si';
import { defineArrayMember, defineField, defineType } from 'sanity';
import { toPlainText } from '@portabletext/svelte';

const discussWithUs = defineType({
  title: 'discussWithUs',
  name: 'industryUseCase.discussWithUs',
  type: 'object',
  icon: SiHomeadvisor,
  fields: [
    defineField({
      name: 'title',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [defineArrayMember({ type: 'block' })],
    }),

    defineField({
      name: 'subtitle',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'link',
      type: 'link',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
  },
});

export default discussWithUs;
