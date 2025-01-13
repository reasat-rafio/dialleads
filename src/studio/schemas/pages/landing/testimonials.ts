import { SiHomeadvisor } from 'react-icons/si';
import { defineField, defineType } from 'sanity';

const testimonials = defineType({
  title: 'Testimonials',
  name: 'landing.testimonials',
  type: 'object',
  icon: SiHomeadvisor,
  fields: [
    defineField({
      name: 'sectionTitle',
      type: 'string',
      title: 'Section Title',
    }),
    defineField({
      name: 'sectionIcon',
      type: 'image',
      title: 'Section Icon',
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
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'testimonials' }] }],
    }),
  ],
  preview: {
    select: {
      title: 'sectionTitle', // Main section title
      subtitle: 'title', // Additional title for context
      media: 'sectionIcon', // Section icon as preview image
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Testimonials Section', // Fallback if sectionTitle is not provided
        subtitle: subtitle || 'No title provided', // Fallback if title is not provided
        media: media || SiHomeadvisor, // Fallback to the default icon
      };
    },
  },
});

export default testimonials;
