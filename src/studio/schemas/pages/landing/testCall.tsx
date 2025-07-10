import { SiHomeadvisor } from "react-icons/si";
import { defineArrayMember, defineField, defineType } from "sanity";
import { FaPenFancy } from "react-icons/fa";
import React from "react";

const testCall = defineType({
  title: "TestCall",
  name: "landing.testCall",
  type: "object",
  icon: SiHomeadvisor,
  fields: [
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
      name: "sectionTitle",
      type: "string",
      title: "Section Title",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [
        defineArrayMember({
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
        }),
      ],
    }),
    defineField({
      name: "supportingText",
      title: "Supporting Text",
      type: "string",
    }),
    defineField({
      name: "backgroundImage",
      type: "image",
      title: "Background Image",
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
      name: "forms",
      title: "Forms",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "name",
              type: "string",
            }),
            defineField({
              name: "email",
              type: "string",
            }),
            defineField({
              name: "phoneNumber",
              type: "string",
            }),
          ],
          preview: {
            select: {
              title: "email",
            },
          },
        }),
      ],
    }),
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
  preview: {
    select: {
      title: "sectionTitle",
      media: "sectionIcon",
      fallbackMedia: "backgroundImage",
    },
    prepare({ title, media, fallbackMedia }) {
      return {
        title: title || "Test Call Section",
        media: media || fallbackMedia || SiHomeadvisor,
      };
    },
  },
});

export default testCall;
