import seo from "./seo";
import link from "./link";
import social from "./social";
import pages from "./pages";
import site from "./site";
import testimonials from "./testimonials";
import industries from "./industries";
import video from "./video";
import common from "./common";
import industriesPage from "./industriesSections";

export const schemaTypes = [
  social,
  seo,
  link,
  testimonials,
  industries,
  video,
  ...industriesPage,
  ...common,
  ...site,
  ...pages,
];
