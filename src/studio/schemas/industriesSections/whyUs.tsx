import { MdOutlineQuestionMark } from "react-icons/md";
import { defineType } from "sanity";
import { FaPenFancy } from "react-icons/fa";
import React from "react";

const whyUs = defineType({
  name: "industries.whyUs",
  title: "Why Us ?",
  type: "object",
  icon: MdOutlineQuestionMark,
  fields: [
    {
      name: "whyUs",
      title: "Why Us",
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
          type: "array",
          validation: (Rule) => Rule.required(),
          of: [
            {
              type: "block",
              styles: [],
              lists: [],
              marks: {
                decorators: [
                  {
                    title: "Violate Gradient",
                    value: "violateGradient",
                    // @ts-expect-error i don't know how to fix this
                    blockEditor: {
                      icon: () => <FaPenFancy />,
                      render: ({ children }: { children: React.ReactNode }) => (
                        <span className="bg-[linear-gradient(75deg,_#731AFF_31%,_#FCCEEE_170%)] bg-clip-text font-semibold text-white/15">
                          {children}
                        </span>
                      ),
                    },
                  },
                ],
              },
            },
          ],
        },
        {
          name: "description",
          title: "Description",
          type: "string",
        },
        {
          name: "cta",
          title: "CTA Button",
          type: "link",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "cards",
          title: "Cards",
          type: "array",
          of: [
            {
              name: "card",
              title: "Card",
              type: "object",
              fields: [
                {
                  name: "cardImage",
                  title: "Card Image",
                  type: "image",
                  description: "The image for the card",
                  options: { hotspot: true },
                  fields: [
                    {
                      name: "alt",
                      title: "Alt Text",
                      type: "string",
                      description: "Alternative text for the SEO and accessibility",
                    },
                  ],
                },
                {
                  name: "cardTitle",
                  title: "Card Title",
                  type: "string",
                  description: "The title for the card",
                },
                {
                  name: "cardDescription",
                  title: "Card Description",
                  type: "text",
                  description: "The description for the card",
                },
              ],
            },
          ],
          description: "The cards for the section",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "whyUs.sectionName",
      media: "whyUs.sectionIcon",
    },
    prepare({ title, media }) {
      return {
        title: title || "No section name provided",
        media: media,
      };
    },
  },
});

export default whyUs;
