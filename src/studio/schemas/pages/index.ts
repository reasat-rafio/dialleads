import landing from './landing';
import industries from './industries';
import industryUseCases from './industryUseCases';
import contact from './contact';
import privacyPolicy from './privacy-policy/document';
import termsAndCondition from './terms-and-condition/document';

export default [
    ...landing,
    ...industryUseCases,
    ...industries,
    ...contact,
    privacyPolicy,
    termsAndCondition
];
