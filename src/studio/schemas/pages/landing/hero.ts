import { SiHomeadvisor } from 'react-icons/si';
import { defineField, defineType } from 'sanity';

const hero = defineType({
  title: 'Hero',
  name: 'landing.hero',
  type: 'object',
  icon: SiHomeadvisor,
  fields: [
    {
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          description: 'The title of the hero section',
        }),
        defineField({
          name: 'subtitle',
          type: 'string',
          description: 'The subtitle of the hero section',
        }),
        defineField({
          name: 'video_webm',
          type: 'file',
          title: 'WebM',
          options: {
            accept: 'video/webm,video/x-matroska',
          },
        }),
        defineField({
          name: 'video_hevc',
          type: 'file',
          title: 'MOV - HEVC',
          options: {
            accept: 'video/quicktime,video/mp4',
          },
        }),
        defineField({
          name: 'thumbnail',
          type: 'image',
          title: 'Video Thumbnail',
          description: 'Image to be displayed as the video thumbnail',
          options: {
            hotspot: true,
          },
          validation: (Rule) =>
            Rule.required().error('A thumbnail image is required.'),
        }),
        defineField({
          name: 'link',
          type: 'link',
        }),
      ],
    },
  ],
  preview: {
    select: {
      title: 'hero.title',
      subtitle: 'hero.subtitle',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || '',
        subtitle: subtitle || '',
        media: SiHomeadvisor,
      };
    },
  },
});

export default hero;
