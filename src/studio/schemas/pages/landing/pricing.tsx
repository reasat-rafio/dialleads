import { MdOutlinePriceCheck } from 'react-icons/md';
import { defineField, defineType } from 'sanity';

const pricing = defineType({
  title: 'Pricing',
  name: 'landing.pricing',
  type: 'object',
  icon: MdOutlinePriceCheck,
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
    }),

    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'sectionName',
      subtitle: 'sectionTitle',
      media: 'sectionIcon',
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
