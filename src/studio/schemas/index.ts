import seo from './seo';
import link from './link';
import social from './social';
import pages from './pages';
import site from './site';
import testimonials from './testimonials';
import industries from './industries';
import banner from './banner';
import video from './video';

export const schemaTypes = [social, seo, link, testimonials, industries, video, banner, ...site, ...pages];
