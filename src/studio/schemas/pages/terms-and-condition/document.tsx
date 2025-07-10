import { FaPenFancy } from "react-icons/fa";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { defineArrayMember, defineField, defineType } from "sanity";
import React from "react";

const termsAndCondition = defineType({
  name: "termsAndCondition",
  type: "document",
  title: "Terms And Condition",
  icon: MdOutlinePrivacyTip,
  fields: [
    defineField({
      name: "seo",
      title: "SEO Settings",
      type: "seo",
      options: { collapsible: true },
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
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "banner",
      type: "common.banner",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "lastUpdated",
    },
  },
});

export default termsAndCondition;
