import { sanityClient } from "$lib/sanity/sanity-client";
import { asset } from "$lib/sanity/sanity-image";
import { error } from "@sveltejs/kit";
import groq from "groq";
import type { IndustriesPageProps } from "../../../../types/industries.types";
import type { PageServerLoad } from "./$types";

const dynamicQuery = (param: string) => {
  return groq`
  *[_type == "industries" && slug.current == "${param}"][0]{
        seo,
        'sections': industrySections.sections[]{
          ...,
          hero{
            ...,
            agentCard{
              ...,
              ${asset("cardImage")},
              mp3File {
                ...,
                asset->
              }
            },
          },
          whyUs{
            ...,
            card{
              ...,
              ${asset("cardImage")},
            },
          },
        },
      }
    `;
};

export const load: PageServerLoad = async ({ setHeaders, params }) => {
  const { industry } = params;

  const query = dynamicQuery(industry);

  const data: IndustriesPageProps = await sanityClient.fetch(query);
  setHeaders({ "cache-control": "public, max-age=120" });

  if (!data) error(404, { message: "Not found" });

  return { page: data };
};
