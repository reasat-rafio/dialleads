import { orderRankField } from '@sanity/orderable-document-list';
import { FcNews } from 'react-icons/fc';
import {
  defineArrayMember,
  defineField,
  type Rule,
  type SlugSourceContext,
} from 'sanity';

const industryUseCases = {
  name: 'industryUseCases',
  type: 'document',
  icon: FcNews,
  fields: [
    orderRankField({ type: 'industryUseCases' }),
    {
      name: 'seo',
      type: 'seo',
      // validation: (Rule: Rule) => Rule.required(),
    },
    defineField({
      name: 'industryName',
      title: 'Industry Name',
      type: 'string',
      // validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'useCaseImage',
      type: 'image',
      title: 'Use Case Image',
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
      name: 'useCaseTitle',
      title: 'Use Case Title',
      type: 'string',
      // validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'useCaseSubTitle',
      title: 'Use Case Sub Title',
      type: 'string',
      // validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'mp3File',
      title: 'MP3 File',
      type: 'file',
      description: 'Upload an MP3 file',
      options: {
        accept: 'audio/mpeg',
      },
      // validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'industryName',
        maxLength: 96, // Optional: Restrict the length of the slug
      },
    }),
  ],
  preview: {
    select: {
      title: 'industryName',
    },
  },
};

export default industryUseCases;
