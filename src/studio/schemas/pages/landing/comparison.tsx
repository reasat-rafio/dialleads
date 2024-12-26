import { MdOutlineCompareArrows } from 'react-icons/md';
import { defineArrayMember, defineField, defineType } from 'sanity';

const comparison = defineType({
  title: 'Comparison',
  name: 'landing.comparison',
  type: 'array',
  icon: MdOutlineCompareArrows,
  of: [
    defineArrayMember({
      title: 'Comparison',
      name: 'comparison',
      type: 'object',
      fields: [
        defineField({
          name: 'sectionName',
          type: 'string',
          title: 'Section Name',
          description: 'The name of the section',
        //   validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'sectionNameIcon',
          type: 'image',
          title: 'Section Name Icon',
          options: { hotspot: true },
          description: 'Icon to be displayed with the section name',
          fields: [
            {
              name: 'alt',
              title: 'Alternative Text',
              description: 'Important for SEO and accessibility',
              type: 'string',
            },
          ]
        }),
        defineField({
          name: 'sectionTitle',
          type: 'string',
          title: 'Section Title',
          description: 'Title for the section',
        //   validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'comparisonCards',
          type: 'array',
          title: 'Comparison Cards',
          of: [
            defineArrayMember({
              title: 'Comparison Card',
              name: 'comparisonCard',
              type: 'object',
              fields: [
                defineField({
                  name: 'comparisonCardIcon',
                  type: 'image',
                  title: 'Comparison Card Icon',
                  options: { hotspot: true },
                  description: 'Icon to be displayed at the top of the comparison card',
                  
                }),
                defineField({
                  name: 'comparisonCardTitle',
                  type: 'string',
                  title: 'Comparison Card Title',
                  description: 'Title for the comparison card',
                //   validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'comparisonCardItems',
                  type: 'array',
                  title: 'Comparison Card Items',
                  of: [
                    defineArrayMember({
                      type: 'string',
                      title: 'Item',
                    }),
                  ],
                }),
              ],
              preview: {
                select: {
                  title: 'comparisonCardTitle',
                  media: 'comparisonCardIcon',
                },
                prepare({ title, media }) {
                  return {
                    title: title || 'Untitled Card',
                    media,
                  };
                },
              },
            }),
          ],
        }),
      ],
      preview: {
        select: {
          title: 'sectionName',
          subtitle: 'sectionTitle',
          media: 'sectionNameIcon',
        },
        prepare({ title, subtitle, media }) {
          return {
            title: title || 'Untitled Section',
            subtitle: subtitle,
            media,
          };
        },
      },
    }),
  ],
});

export default comparison;
