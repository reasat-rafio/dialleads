import { MdOutlineQuestionMark } from 'react-icons/md';
import { defineType } from 'sanity';

const whyChooseUs = defineType({
  title: 'Why Choose Us ?',
  name: 'landing.whyChooseUs',
  type: 'object',
  icon: MdOutlineQuestionMark,
  fields: [
    {
      name: 'whyChooseUs',
      title: 'Why Choose Us ?',
      type: 'object',
      fields: [
        {
          name: 'sectionName',
          title: 'Section Name',
          type: 'string',
          description: 'The name of the section',
        },
        {
          name: 'sectionIcon',
          title: 'Section Icon',
          type: 'image',
          description: 'The icon for the section',
        },
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          description: 'The title for the section',
        },
        {
          name: 'cards',
          title: 'Cards',
          type: 'array',
          of: [
            {
              name: 'card',
              title: 'Card',
              type: 'object',
              fields: [
                {
                  name: 'cardIcon',
                  title: 'Card Icon',
                  type: 'image',
                  description: 'The icon for the card',
                  options: { hotspot: true },
                  fields: [
                    {
                      name: 'alt',
                      title: 'Alt Text',
                      type: 'string',
                      description: 'Alternative text for the icon',
                    },
                  ],
                },
                {
                  name: 'cardDescription',
                  title: 'Card Description',
                  type: 'string',
                  description: 'The description for the card',
                },
                {
                  name: 'cardDescriptionFor',
                  title: 'Card Description For',
                  type: 'string',
                  description: 'For what the card description need. Like: real estate agencies. etc',
                },
              ],
            },
          ],
          description: 'The cards for the section',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'whyChooseUs.sectionName',
      subtitle: 'whyChooseUs.sectionTitle',
      media: 'whyChooseUs.sectionIcon',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'No section name provided',
        subtitle: subtitle || 'No section title provided',
        media: media,
      };
    },
  },
});

export default whyChooseUs;