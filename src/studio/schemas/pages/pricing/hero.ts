import { defineType } from 'sanity';

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
          type: 'string',
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
      return {
        title: sectionName || 'Unnamed Section',
        subtitle: sectionTitle || 'No Title',
        media: sectionIcon,
      };
    },
  },
});

export default hero;
