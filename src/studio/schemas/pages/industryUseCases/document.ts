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
      validation: (Rule) => Rule.required().min(1),
      of: [
        { type: 'industryUseCase.details' },
        { type: 'industryUseCase.features' },
        { type: 'industryUseCase.stat' },
        { type: 'industryUseCase.offer' },
        { type: 'industryUseCase.customers' },
        { type: 'industryUseCase.featuresV2' },
        { type: 'industryUseCase.tryIt' },
        { type: 'industryUseCase.review' },
        { type: 'industryUseCase.integration' },
        { type: 'industryUseCase.sequrity' },
        { type: 'industryUseCase.aboutUs' },
        { type: 'industryUseCase.discussWithUs' },
        { type: 'industryUseCase.testimonials' },
        { type: 'industryUseCase.faq' },
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
