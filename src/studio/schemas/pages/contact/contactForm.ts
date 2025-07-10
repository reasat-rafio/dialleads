import { alt } from "$studio/lib/alt";
import { SiHomeadvisor } from "react-icons/si";
import { defineField, defineType } from "sanity";

const contactForm = defineType({
  title: "ContactForm",
  name: "contact.contactForm",
  type: "object",
  icon: SiHomeadvisor,
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "contactPageImage",
      type: "image",
      title: "Contact Page Image",
      validation: (Rule) => Rule.required(),
      options: { hotspot: true },
      fields: [alt()],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
      media: "contactPageImage",
    },
  },
});

export default contactForm;
