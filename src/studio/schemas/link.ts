import { BsLink45Deg } from "react-icons/bs";
import { defineField, defineType } from "sanity";

const link = defineType({
  name: "link",
  title: "Link",
  type: "object",
  icon: BsLink45Deg,
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "icon",
      type: "image",
      description: "Icon to be displayed with the title in Button",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "type",
      type: "string",
      initialValue: "internal",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: "Internal", value: "internal" },
          { title: "External", value: "external" },
        ],
      },
    }),
    defineField({
      name: "internalLink",
      type: "string",
      hidden: ({ parent }) => parent?.type !== "internal",

      validation: (Rule) =>
        Rule.custom((internalLink, context) =>
          (context?.parent as { type: string })?.type === "internal" && !internalLink
            ? "Internal link is required"
            : true,
        ),
    }),

    // options: {
    //   list: [...pages],
    // },

    defineField({
      name: "externalLink",
      type: "url",
      hidden: ({ parent }) => parent?.type !== "external",
      validation: (Rule) =>
        Rule.custom((externalLink, context) =>
          (context?.parent as { type: string })?.type === "external" && !externalLink
            ? "External link is required"
            : true,
        ),
    }),
  ],
});

export default link;
