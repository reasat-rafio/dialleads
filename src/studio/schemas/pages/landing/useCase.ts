import { SiHomeadvisor } from 'react-icons/si';
import { defineArrayMember, defineField, defineType } from 'sanity';

const useCase = defineType({
  title: 'UseCase',
  name: 'landing.useCase',
  type: 'object',
  icon: SiHomeadvisor,
  fields: [
    defineField({
      name: 'sectionTitle',
      type: 'string',
      title: 'Section Title',
    }),
    defineField({
      name: 'sectionIcon',
      type: 'image',
      title: 'Section Icon',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'useCaseSectionImage',
      type: 'image',
      title: 'Use Case Section Image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'clickToPlayImage',
      type: 'image',
      title: 'Click To Play Image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility',
          type: 'string',
        },
      ],
    }),

    defineField({
      name: 'useCases',
      title: 'UseCases',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
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
                  validation: (Rule) => Rule.required(),
                },
              ],
            }),

            defineField({
              name: 'useCaseTitle',
              title: 'Use Case Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'useCaseSubTitle',
              title: 'Use Case Sub Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'mp3File',
              title: 'MP3 File',
              type: 'file',
              description: 'Upload an MP3 file',
              options: {
                accept: 'audio/mpeg',
              },
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'useCaseTitle',
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'sectionTitle', // Main section title
      subtitle: 'title', // Additional title for context
      media: 'sectionIcon', // Main media from section icon
      fallbackMedia: 'useCaseSectionImage', // Fallback media if section icon is unavailable
    },
    prepare({ title, subtitle, media, fallbackMedia }) {
      return {
        title: title || 'Use Case Section', // Fallback for title
        subtitle: subtitle || 'No title provided', // Fallback for subtitle
        media: media || fallbackMedia || SiHomeadvisor, // Section icon or fallback to use case image
      };
    },
  },
});

export default useCase;
