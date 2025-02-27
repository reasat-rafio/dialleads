import landing from './landing';
import industryUseCases from './industryUseCases';
import pricing from './pricing';
import contact from './contact';
import privacyPolicy from './privacy-policy/document';
import termsAndCondition from './terms-and-condition/document';

export default [
  ...landing,
  ...pricing,
  ...industryUseCases,
  ...contact,
  privacyPolicy,
  termsAndCondition,
];
