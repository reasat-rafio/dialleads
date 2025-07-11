import { sanityClient } from "$lib/sanity/sanity-client";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import groq from "groq";
import type { PrivacyPolicy } from "../../../types/privacy-policy.types";
import { asset } from "$lib/sanity/sanity-image";

const query = groq`
    *[_id == "termsAndCondition"][0]{
		...,
		banner {
			...,
			banner {
				...,
				cta {
					...,
					${asset("icon")},
				}
			}
		}
	}
`;

export const load: PageServerLoad = async ({ setHeaders }) => {
  const data: PrivacyPolicy = await sanityClient.fetch(query);
  setHeaders({ "cache-control": "public, max-age=360" });

  if (!data) error(404, { message: "Not found" });

  return { page: data };
};
