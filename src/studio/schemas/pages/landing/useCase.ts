import { SiHomeadvisor } from 'react-icons/si';
import { defineArrayMember, defineField, defineType } from 'sanity';
import { toPlainText } from '@portabletext/svelte';

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
      // validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sectionIcon',
      type: 'image',
      title: 'Section Icon',
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
      name: 'useCaseSectionImage',
      type: 'image',
      title: 'Use Case Section Image',
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
      name: 'title',
      title: 'Title',
      type: 'string',
      // validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      // validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'clickToPlayImage',
      type: 'image',
      title: 'Click To Play Image',
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

    // defineField({
    //   name: 'useCases',
    //   title: 'Use Cases',
    //   type: 'array',
    //   of: [
    //     defineArrayMember({
    //       type: 'object',
    //       fields: [
    //         defineField({
    //           name: 'useCaseImage',
    //           type: 'image',
    //           title: 'Use Case Image',
    //           // validation: (Rule) => Rule.required(),
    //           options: { hotspot: true },
    //           fields: [
    //             {
    //               name: 'alt',
    //               title: 'Alternative Text',
    //               description: 'Important for SEO and accessibility',
    //               type: 'string',
    //               // validation: (Rule) => Rule.required(),
    //             },
    //           ],
    //         }),
    //         defineField({
    //           name: 'useCaseTitle',
    //           title: 'Use Case Title',
    //           type: 'string',
    //           // validation: (Rule) => Rule.required(),
    //         }),

    //         defineField({
    //           name: 'useCaseSubTitle',
    //           title: 'Use Case Sub Title',
    //           type: 'string',
    //           // validation: (Rule) => Rule.required(),
    //         }),

    //         defineField({
    //           name: 'mp3File',
    //           title: 'MP3 File',
    //           type: 'file',
    //           description: 'Upload an MP3 file',
    //           options: {
    //             accept: 'audio/mpeg',
    //           },
    //           // validation: (Rule) => Rule.required(),
    //         }),
    //       ],
    //       preview: {
    //         select: {
    //           title: 'useCaseTitle',
    //           // subtitle: 'link',
    //         },
    //       },
    //     }),
    //   ],
    // }),
  ],
  preview: {
    select: {
      title: 'sectionTitle',
    },
  },
});

export default useCase;
