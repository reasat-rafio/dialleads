import { SiHomeadvisor } from 'react-icons/si';
import { defineArrayMember, defineField, defineType } from 'sanity';
import { toPlainText } from '@portabletext/svelte';

const tryIt = defineType({
  title: 'tryIt',
  name: 'industryUseCase.tryIt',
  type: 'object',
  icon: SiHomeadvisor,
  fields: [
    defineField({
      name: 'badgeText',
      type: 'string',
      // validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      // validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      // validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'btnText',
      type: 'text',
      title: 'BtnText',
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
    defineField({
      name: 'personTitle',
      type: 'text',
      title: 'Person Title',
      // validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'supportTypes',
      title: 'Support Types',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              type: 'image',
              title: 'Icon',
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
          ],
          preview: {
            select: {
              title: 'title',
              // subtitle: 'link',
            },
          },
        }),
      ],
    }),

    defineField({
      name: 'supportTypesDetails',
      title: 'Support Types Details',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              type: 'image',
              title: 'Icon',
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
          ],
          preview: {
            select: {
              title: 'title',
              // subtitle: 'link',
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
  },
});

export default tryIt;
