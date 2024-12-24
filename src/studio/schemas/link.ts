import { BsLink45Deg } from 'react-icons/bs';
import { defineArrayMember, defineField, defineType, type Rule } from 'sanity';
import { pages } from '$lib/constant';

const link = defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  // icon: BsLink45Deg,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'href',
      title: 'URL',
      type: 'string',
    }),
    /////////////////

    defineField({
      name: 'moreLinks',
      title: 'More Links',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'href',
              title: 'URL',
              type: 'string',
              validation: (Rule) => Rule.required(),
              // .uri()
            }),
          ],
          preview: {
            select: {
              title: 'title',
              // subtitle: 'link',
            },
          },
        }),
      ],
    }),
  ],
});

export default link;
