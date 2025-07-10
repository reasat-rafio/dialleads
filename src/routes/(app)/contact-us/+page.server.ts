import groq from "groq";
import type { PageServerLoad } from "./$types";
import { sanityClient } from "$lib/sanity/sanity-client";
import { error } from "@sveltejs/kit";
import type { ContactPage } from "../../../types/contact.types";

const query = groq`
    *[_id == "contactPage"][0]
`;

export const load: PageServerLoad = async ({ setHeaders }) => {
  const data: ContactPage = await sanityClient.fetch(query);
  setHeaders({ "cache-control": "public, max-age=360" });

  if (!data) error(404, { message: "Not found" });

  return { page: data };
};
