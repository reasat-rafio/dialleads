import { SiHomeadvisor } from 'react-icons/si';
import { defineArrayMember, defineField, defineType } from 'sanity';
import { toPlainText } from '@portabletext/svelte';

const aboutUs = defineType({
  title: 'aboutUs',
  name: 'industryUseCase.aboutUs',
  type: 'object',
  icon: SiHomeadvisor,
  fields: [
    defineField({
      name: 'badgeText',
      type: 'text',
      title: 'Badge Text',
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
      name: 'stats',
      title: 'Stats',
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
              name: 'value',
              title: 'Value',
              type: 'string',
              // validation: (Rule) => Rule.required(),
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
      name: 'groupOneText',
      type: 'string',
      title: 'First Group Text',
      // validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'groupOneImages',
      title: 'Group One Images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
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
              title: 'image.alt',
              // subtitle: 'link',
            },
          },
        }),
      ],
    }),

    defineField({
      name: 'groupTwoText',
      type: 'string',
      title: 'Second Group Text',
      // validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'groupTwoImages',
      title: 'Group Two Images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
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
              title: 'image.alt',
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
    },
  },
});

export default aboutUs;
