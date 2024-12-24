import { SiHomeadvisor } from 'react-icons/si';
import { defineArrayMember, defineField, defineType } from 'sanity';
import { toPlainText } from '@portabletext/svelte';

const offer = defineType({
  title: 'offer',
  name: 'industryUseCase.offer',
  type: 'object',
  icon: SiHomeadvisor,
  fields: [
    defineField({
      name: 'badgeText',
      title: 'Badge Text',
      type: 'string',
      // validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      // validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string',
      // validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'buttonText',
      type: 'string',
      title: 'Button Text',
      // validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
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
      title: 'title',
    },
  },
});

export default offer;
