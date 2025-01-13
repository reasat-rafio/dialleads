import { SiHomeadvisor } from 'react-icons/si';
import { defineArrayMember, defineField, defineType } from 'sanity';

const testCall = defineType({
  title: 'TestCall',
  name: 'landing.testCall',
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
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'backgroundImage',
      type: 'image',
      title: 'Background Image',
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
      name: 'personImage',
      type: 'image',
      title: 'Person Image',
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
      name: 'personName',
      title: 'Person Name',
      type: 'string',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
    }),
    defineField({
      name: 'forms',
      title: 'Forms',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              type: 'string',
            }),
            defineField({
              name: 'email',
              type: 'string',
            }),
            defineField({
              name: 'phoneNumber',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              title: 'email',
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'ctaBtnText',
      title: 'CTA Button Text',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'sectionTitle', 
      subtitle: 'title',
      media: 'sectionIcon', 
      fallbackMedia: 'backgroundImage', 
    },
    prepare({ title, subtitle, media, fallbackMedia }) {
      return {
        title: title || 'Test Call Section',
        subtitle: subtitle || 'No title provided', 
        media: media || fallbackMedia || SiHomeadvisor, 
      };
    },
  },
});

export default testCall;
