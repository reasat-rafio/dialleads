import { FaPenFancy } from 'react-icons/fa';
import { MdOutlinePrivacyTip } from 'react-icons/md';
import { defineArrayMember, defineField, defineType } from 'sanity';
import React from 'react';

const termsAndCondition = defineType({
  name: 'termsAndCondition',
  type: 'document',
  title: 'Terms And Condition',
  icon: MdOutlinePrivacyTip,
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
      options: { collapsible: true },
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        defineArrayMember({
          type: 'block',
          styles: [],
          lists: [],
          marks: {
            decorators: [
              {
                title: 'Violet Gradient',
                value: 'violetGradient',
                // @ts-expect-error i don't know how to fix this
                blockEditor: {
                  icon: () => <FaPenFancy />,
                  render: ({ children }: { children: React.ReactNode }) => (
                    <span className="violet-gradient">{children}</span>
                  ),
                },
              },
            ],
          },
        }),
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        defineField({
          name: 'sections',
          type: 'object',
          fields: [
            defineField({
              name: 'sectionTitle',
              title: 'Section Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [{ type: 'block' }], // Rich text support
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { title: 'sectionTitle' },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'lastUpdated',
    },
  },
});

export default termsAndCondition;
