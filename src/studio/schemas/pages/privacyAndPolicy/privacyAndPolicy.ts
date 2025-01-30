import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'privacyAndPolicyPage.privacyAndPolicy',
  title: 'Privacy Policy',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the Privacy Policy document',
    //   validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lastUpdated',
      title: 'Last Updated',
      type: 'string',
      description: 'Date when the privacy policy was last updated',
    //   validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'sectionTitle',
              title: 'Section Title',
              type: 'string',
            //   validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [{ type: 'block' }], // Rich text support
            //   validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { title: 'sectionTitle' },
          },
        },
      ],
    }),
  ],
});
