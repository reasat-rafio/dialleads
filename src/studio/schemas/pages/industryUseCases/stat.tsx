import { SiHomeadvisor } from "react-icons/si";
import { defineArrayMember, defineField, defineType } from "sanity";
import { FaPenFancy } from "react-icons/fa";
import React from "react";

const stat = defineType({
  title: "stat",
  name: "industryUseCase.stat",
  type: "object",
  icon: SiHomeadvisor,
  fields: [
    defineField({
      name: "sectionName",
      type: "string",
      // validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "tagline",
      type: "string",
      // validation: (Rule) => Rule.required(),
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
                title: "Violet Gradient",
                value: "violetGradient",
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
      name: "description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "value",
              title: "Value",
              type: "string",
              // validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "title",
              title: "Title",
              type: "string",
              // validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "title",
              // subtitle: 'link',
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "sectionName",
    },
  },
});

export default stat;
