import { SiHomeadvisor } from 'react-icons/si';
import { defineArrayMember, defineField, defineType } from 'sanity';

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
    }),

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
            }),
          ],
          preview: {
            select: {
              title: 'title',
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
              name: 'clientTitle',
              title: 'Client Title',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              title: 'clientTitle',
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'sectionName',
      subtitle: 'title.0.title', // The first title in the array
      media: 'clients.0.clientImage', // The first client image
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Clients Section',
        subtitle: subtitle || 'No title provided',
        media: media || SiHomeadvisor, // Fallback to the icon if no image
      };
    },
  },
});

export default clients;
