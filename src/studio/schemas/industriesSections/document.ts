import { defineField, defineType } from "sanity";

const industriesPage = defineType({
  name: "industriesPage",
  title: "Industries Page",
  type: "object",
  fields: [
    defineField({
      name: "sections",
      type: "array",
      validation: (Rule) => Rule.required().min(1),
      of: [
        { type: "industries.hero" },
        { type: "industries.whyUs" },
        { type: "industries.whyDialleadsAI" },
        { type: "industries.securedAndEfficient" },
        { type: "common.banner" },
      ],
    }),
  ],
});

export default industriesPage;
