import { MdOutlinePriceCheck } from 'react-icons/md';
import { defineField, defineType } from 'sanity';

const pricing = defineType({
  title: 'Pricing',
  name: 'landing.pricing',
  type: 'object',
  icon: MdOutlinePriceCheck,
  fields: [
    {
      name: 'pricing',
      title: 'Pricing',
      type: 'object',
      fields: [
        defineField({
          name: 'sectionName',
          title: 'Section Name',
          type: 'string',
        }),

        defineField({
          name: 'sectionIcon',
          title: 'Section Icon',
          type: 'image',
          options: {
            hotspot: true,
          },
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
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
        }),
      ],
    },
  ],
  preview: {
    select: {
      title: 'pricing.sectionName', 
      subtitle: 'pricing.sectionTitle', 
      media: 'pricing.sectionIcon', 
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'No Section Name',
        subtitle: subtitle || 'No Section Title',
        media,
      };
    },
  },
});

export default pricing;
