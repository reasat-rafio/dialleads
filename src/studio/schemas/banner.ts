import { defineField, defineType } from 'sanity';
import { BsImage } from 'react-icons/bs';

const banner = defineType({
  name: 'banner',
  title: 'Banner',
  type: 'object',
  icon: BsImage,
  fields: [
    defineField({
      name: 'sectionOption',
      title: 'Section Option',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'cta',
      title: 'Call to Action',
      type: 'link',
      description: 'Add a call to action for the banner.',
    }),
    defineField({
      name: 'banner',
      title: 'Banner Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          description: 'Important for SEO and accessibility.',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'sectionOption',
      media: 'banner',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Untitled Banner',
        subtitle: subtitle || 'No Section Option',
        media,
      };
    },
  },
});

export default banner;
