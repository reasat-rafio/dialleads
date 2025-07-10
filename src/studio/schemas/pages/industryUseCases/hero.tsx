import { SiHomeadvisor } from "react-icons/si";
import { defineArrayMember, defineField, defineType } from "sanity";
import { FaPenFancy } from "react-icons/fa";
import React from "react";

const hero = defineType({
  title: "hero",
  name: "industryUseCase.hero",
  type: "object",
  icon: SiHomeadvisor,
  fields: [
    defineField({
      name: "sectionName",
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
      type: "string",
      // validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "link",
      type: "link",
    }),
  ],
  preview: {
    select: {
      title: "sectionName",
    },
  },
});

export default hero;
