import groq from "groq";
import type { PageServerLoad } from "./$types";
import { sanityClient } from "$lib/sanity/sanity-client";
import { error } from "@sveltejs/kit";
import type { ContactPage } from "../../../types/contact.types";
import { asset } from "$lib/sanity/sanity-image";

const query = groq`
  *[_id == "contactPage"][0]{
    ...,
    ${asset("contactPageImage")},
    sections[]{
      ...,
      _type == "contact.contactForm" => {
        ...,
        ${asset("contactPageImage")}
      }
    }
  }
`;

export const load: PageServerLoad = async ({ setHeaders }) => {
  const data: ContactPage = await sanityClient.fetch(query);
  setHeaders({ "cache-control": "public, max-age=360" });

  if (!data) error(404, { message: "Not found" });

  return { page: data };
};
