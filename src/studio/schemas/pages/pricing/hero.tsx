import { FaPenFancy } from 'react-icons/fa';
import { defineArrayMember, defineType } from 'sanity';
import React from 'react';
const hero = defineType({
  title: 'Hero',
  name: 'pricing.hero',
  type: 'object',
  fields: [
    {
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        {
          name: 'sectionIcon',
          title: 'Section Icon',
          type: 'image',
          description: 'The icon for the section',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Important for SEO and accessibility',
            },
          ],
        },
        {
          name: 'sectionName',
          title: 'Section Name',
          type: 'string',
          description: 'The name of the section',
        },
        {
          name: 'sectionTitle',
          title: 'Section Title',
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
          description: 'The title for the section',
        },
        {
          name: 'sectionDescription',
          title: 'Section Description',
          type: 'text',
          description: 'The description for the section',
        },
      ],
    },
  ],
  preview: {
    select: {
      sectionName: 'hero.sectionName',
      sectionTitle: 'hero.sectionTitle',
      sectionIcon: 'hero.sectionIcon',
    },
    prepare(selection) {
      const { sectionName, sectionTitle, sectionIcon } = selection;
    interface Child {
      text: string;
    }

    interface SectionTitle {
      children: Child[];
    }

    const titleText: string = sectionTitle
      ? (sectionTitle[0] as SectionTitle)?.children?.map((child: Child) => child.text).join(' ') ||
        'No Title'
      : 'No Title';
      return {
        title: sectionName || 'Unnamed Section',
        subtitle: titleText,
        media: sectionIcon,
      };
    },
  },
});

export default hero;
