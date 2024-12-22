import { MdOutlinePriceCheck } from 'react-icons/md';

const pricingPage = {
  name: 'pricingPage',
  title: 'Pricing Page',
  type: 'document',
  icon: MdOutlinePriceCheck,
  fields: [
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        { type: 'pricingPage.comparePlans' },
        
      ],
    },
  ],
  
  preview: {
    select: {
      title: 'seo.title',
      subtitle: 'seo.description',
    },
  },
};

export default pricingPage;
