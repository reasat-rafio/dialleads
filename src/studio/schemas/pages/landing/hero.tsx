import { SiHomeadvisor } from "react-icons/si";
import { defineArrayMember, defineField, defineType } from "sanity";
import { FaPenFancy } from "react-icons/fa";
import React from "react";
import { alt } from "$studio/lib/alt";

const hero = defineType({
  title: "Hero",
  name: "landing.hero",
  type: "object",
  icon: SiHomeadvisor,
  fields: [
    {
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        {
          name: "sectionIcon",
          title: "Section Icon",
          type: "image",
          description: "The icon for the section",
          options: {
            hotspot: true,
          },
          fields: [alt()],
        },
        {
          name: "sectionName",
          title: "Section Name",
          type: "string",
          description: "The name of the section",
        },
        defineField({
          name: "heroTitle",
          title: "Hero Title",
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
          name: "subtitle",
          type: "string",
          description: "The subtitle of the hero section",
        }),

        defineField({
          name: "useCases",
          title: "UseCases",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({
                  name: "useCaseImage",
                  type: "image",
                  title: "Use Case Image",
                  // validation: (Rule) => Rule.required(),
                  options: { hotspot: true },
                  fields: [
                    {
                      name: "alt",
                      title: "Alternative Text",
                      description: "Important for SEO and accessibility",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                    },
                  ],
                }),

                defineField({
                  name: "useCaseTitle",
                  title: "Use Case Title",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                }),

                defineField({
                  name: "useCaseSubTitle",
                  title: "Use Case Sub Title",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                }),

                defineField({
                  name: "mp3File",
                  title: "MP3 File",
                  type: "file",
                  description: "Upload an MP3 file",
                  options: {
                    accept: "audio/mpeg",
                  },
                  validation: (Rule) => Rule.required(),
                }),
              ],
              preview: {
                select: {
                  title: "useCaseTitle",
                },
              },
            }),
          ],
        }),

        defineField({
          name: "link",
          type: "link",
        }),
      ],
    },
  ],
  preview: {
    select: {
      title: "hero.sectionName",
      subtitle: "hero.subtitle",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Hero",
        subtitle: subtitle || "",
        media: SiHomeadvisor,
      };
    },
  },
});

export default hero;
