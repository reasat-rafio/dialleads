import { orderRankField } from "@sanity/orderable-document-list";
import { defineField, defineType } from "sanity";

const industryUseCasePage = defineType({
  name: "industryUseCasePage",
  title: "Industry Use Case Page",
  type: "document",
  fields: [
    orderRankField({ type: "industryUseCasePage" }),

    defineField({
      name: "seo",
      type: "seo",
    }),

    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "string",
      title: "Description",
      validation: (Rule) => Rule.required(),
    }),

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
          // validation: (Rule) => Rule.required(),
        },
      ],
    }),

    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
      },
    }),

    // TItle rakhte hobe .. slug generate korte hobe ..

    defineField({
      name: "useCaseImageForAI",
      type: "image",
      title: "Use Case Image For AI",
      // validation: (Rule) => Rule.required(),
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alternative Text",
          description: "Important for SEO and accessibility",
          type: "string",
          // validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: "useCaseTitleForAI",
      title: "Use Case Title For AI ",
      type: "string",
      // validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "useCaseSubTitleForAI",
      title: "Use Case Sub Title For AI",
      type: "string",
      // validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "mp3File",
      title: "MP3 File",
      type: "file",
      description: "Upload an MP3 file",
      options: {
        accept: "audio/mpeg",
      },
      // validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "sections",
      type: "array",
      validation: (Rule) => Rule.required().min(0),
      of: [
        { type: "industryUseCase.details" },
        { type: "industryUseCase.features" },
        { type: "industryUseCase.stat" },
        { type: "industryUseCase.hero" },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "seo.description",
    },
  },
});

export default industryUseCasePage;
