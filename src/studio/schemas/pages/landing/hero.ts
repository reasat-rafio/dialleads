import { SiHomeadvisor } from 'react-icons/si';
import { defineArrayMember, defineField, defineType } from 'sanity';

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
          type: 'array',
          validation: (Rule) => Rule.required(),
          of: [defineArrayMember({ type: 'block' })],
        }),
        defineField({
          name: 'subtitle',
          type: 'string',
          description: 'The subtitle of the hero section',
        }),
        defineField({
          name: 'video',
          type: 'object',
          fields: [
            {
              name: 'video_webm',
              type: 'file',
              title: 'WebM',
              options: {
                accept: 'video/webm,video/x-matroska',
              },
            },
            {
              name: 'video_hevc',
              type: 'file',
              title: 'MOV - HEVC',
              options: {
                accept: 'video/quicktime,video/mp4',
              },
            },
          ],
          validation: (Rule) =>
            Rule.custom((video) => {
              if (!video?.video_webm && !video?.video_hevc) {
                return 'Both WebM and MOV - HEVC videos are required';
              }
              return true;
            }),
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
          name: 'videoPlayBtnIcon',
          type: 'image',
          title: 'Video Play Button Icon',
          description: 'Play Button Icon',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alternative Text',
              type: 'string',
            },
          ],
          validation: (Rule) =>
            Rule.required().error('A Video Play Icon is required.'),
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
      subtitle: 'hero.subtitle',
    },
    prepare({ subtitle }) {
      return {
        title: "Hero",
        subtitle: subtitle || '',
        media: SiHomeadvisor,
      };
    },
  },
});

export default hero;
