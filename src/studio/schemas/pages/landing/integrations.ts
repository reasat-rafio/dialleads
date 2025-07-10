import { MdOutlineUsb } from "react-icons/md";
import { defineField, defineType } from "sanity";

const integrations = defineType({
  title: "Integrations",
  name: "landing.integrations",
  type: "object",
  icon: MdOutlineUsb,
  fields: [
    {
      name: "integrations",
      title: "Integrations",
      type: "object",
      fields: [
        {
          name: "sectionName",
          title: "Section Name",
          type: "string",
          description: "The name of the section",
        },
        {
          name: "sectionIcon",
          title: "Section Icon",
          type: "image",
          description: "The icon for the section",
        },
        {
          name: "sectionTitle",
          title: "Section Title",
          type: "string",
          description: "The title for the section",
        },
        {
          name: "description",
          title: "Section Description",
          type: "string",
          description: "The description for the section",
        },
        {
          name: "brands",
          title: "Brands",
          type: "array",
          of: [
            {
              name: "brand",
              title: "Brand",
              type: "object",
              fields: [
                {
                  name: "brandImage",
                  title: "Brand Image",
                  type: "image",
                  description: "The image of the brand or software",
                  options: { hotspot: true },
                  fields: [
                    {
                      name: "alt",
                      title: "Alt Text",
                      type: "string",
                      description: "Alternative text for the image",
                    },
                  ],
                },
              ],
              preview: {
                select: {
                  media: "brandImage",
                },
                prepare({ media }) {
                  return {
                    media: media,
                  };
                },
              },
            },
          ],
          description: "The brands or softwares for integration",
        },
        defineField({
          name: "ctaBtnText",
          title: "CTA Button Text",
          type: "string",
        }),
        defineField({
          name: "ctaBtnIcon",
          type: "image",
          title: "CTA Button Icon",
          options: { hotspot: true },
        }),
      ],
    },
  ],
  preview: {
    select: {
      title: "integrations.sectionName",
      subtitle: "integrations.sectionTitle",
      media: "integrations.sectionIcon",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "No section name provided",
        subtitle: subtitle || "No section title provided",
        media: media,
      };
    },
  },
});

export default integrations;
