import { defineField, defineType } from 'sanity';

const privacyAndPolicyPage = defineType({
  name: 'privacyAndPolicyPage',
  title: 'Privacy And Policy Page ',
  type: 'document',
  fields: [
    defineField({
      name: 'seo',
      type: 'seo',
    }),
    defineField({
      name: 'sections',
      type: 'array',
      validation: (Rule) => Rule.required().min(1),
      of: [{ type: 'privacyAndPolicyPage.privacyAndPolicy' }],
    }),
  ],
  preview: {
    select: {
      title: 'seo.title',
      subtitle: 'seo.description',
    },
  },
});

export default privacyAndPolicyPage;
