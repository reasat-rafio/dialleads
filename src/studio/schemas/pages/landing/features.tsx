import { SiHomeadvisor } from 'react-icons/si';
import { defineArrayMember, defineField, defineType } from 'sanity';
import { toPlainText } from '@portabletext/svelte';

const features = defineType({
  title: 'Features',
  name: 'landing.features',
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
      name: 'title',
      type: 'string',
      title: 'Title',
      // validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'featureGroupName',
              title: 'Feature Group Name',
              type: 'string',
              // validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'features',
              title: 'Features',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'featureIcon',
                      type: 'image',
                      title: 'Feature Icon',
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
                      name: 'featureTitle',
                      title: 'Feature Title',
                      type: 'string',
                      // validation: (Rule) => Rule.required(),
                    }),

                    defineField({
                      name: 'featureDescription',
                      title: 'Feature Description',
                      type: 'string',
                      // validation: (Rule) => Rule.required(),
                    }),
                  ],
                  preview: {
                    select: {
                      title: 'featureTitle',
                      // subtitle: 'link',
                    },
                  },
                }),
              ],
            }),
          ],
          preview: {
            select: {
              title: 'featureGroupName',
              // subtitle: 'link',
            },
          },
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'sectionTitle',
    },
  },
});

export default features;
