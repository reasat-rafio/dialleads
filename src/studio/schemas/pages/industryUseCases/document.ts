import { orderRankField } from '@sanity/orderable-document-list';
import { defineField, defineType } from 'sanity';

const industryUseCasePage = defineType({
  name: 'industryUseCasePage',
  title: 'Industry Use Case Page',
  type: 'document',
  fields: [
    orderRankField({ type: 'industryUseCasePage' }),

    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: (Rule) => Rule.required(),
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
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
      },
    }),
    // TItle rakhte hobe .. slug generate korte hobe ..

    defineField({
      name: 'seo',
      type: 'seo',
    }),
    defineField({
      name: 'sections',
      type: 'array',
      validation: (Rule) => Rule.required().min(0),
      of: [
        { type: 'industryUseCase.details' },
        { type: 'industryUseCase.features' },
        { type: 'industryUseCase.stat' },
        { type: 'industryUseCase.hero' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'seo.description',
    },
  },
});

export default industryUseCasePage;
