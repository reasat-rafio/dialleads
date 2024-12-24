import { SiHomeadvisor } from 'react-icons/si';
import { defineArrayMember, defineField, defineType } from 'sanity';
import { toPlainText } from '@portabletext/svelte';

const review = defineType({
  title: 'review',
  name: 'industryUseCase.review',
  type: 'object',
  icon: SiHomeadvisor,
  fields: [
    defineField({
      name: 'reviewerImage',
      type: 'image',
      title: 'Reviewer Image',
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
      name: 'review',
      type: 'text',
      title: 'Review',
      // validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'reviewerName',
      title: 'Reviewer Name',
      type: 'string',
      // validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      // validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'position',
      title: 'Position Name',
      type: 'string',
      // validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'reviewerName',
    },
  },
});

export default review;
