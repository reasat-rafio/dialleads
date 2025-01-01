import { SiHomeadvisor } from 'react-icons/si';
import { defineArrayMember, defineField, defineType } from 'sanity';
import { toPlainText } from '@portabletext/svelte';

const clients = defineType({
  title: 'Clients',
  name: 'landing.clients',
  type: 'object',
  icon: SiHomeadvisor,
  fields: [
    defineField({
      name: 'sectionName',
      type: 'string',
      title: 'Section Name',
      // validation: (Rule) => Rule.required(),
    }),

    // defineField({
    //   name: 'title',
    //   type: 'string',
    //   title: 'Title',
    //   // validation: (Rule) => Rule.required(),
    // }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
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
      name: 'clients',
      title: 'Clients',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'clientImage',
              type: 'image',
              title: 'Client Image',
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
              name: 'clientTitle',
              title: 'Client Title',
              type: 'string',
              // validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'clientTitle',
              // subtitle: 'link',
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'sectionName',
    },
  },
});

export default clients;
