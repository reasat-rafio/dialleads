import { SiHomeadvisor } from "react-icons/si";
import { defineArrayMember, defineField, defineType } from "sanity";

const faq = defineType({
  title: "Faq",
  name: "landing.faq",
  type: "object",
  icon: SiHomeadvisor,
  fields: [
    defineField({
      name: "sectionTitle",
      type: "string",
      title: "Section Title",
    }),
    defineField({
      name: "sectionIcon",
      type: "image",
      title: "Section Icon",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alternative Text",
          description: "Important for SEO and accessibility",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "faq",
      title: "FAQ",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "question",
              title: "Question",
              type: "string",
            }),
            defineField({
              name: "answer",
              title: "Answer",
              type: "string",
            }),
          ],
          preview: {
            select: {
              title: "question",
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "sectionTitle", // Main section title
      subtitle: "title", // Additional title for context
      media: "sectionIcon", // Section icon as preview image
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "FAQ Section", // Fallback if sectionTitle is not provided
        subtitle: subtitle || "No title provided", // Fallback if title is not provided
        media: media || SiHomeadvisor, // Fallback to the default icon
      };
    },
  },
});

export default faq;
