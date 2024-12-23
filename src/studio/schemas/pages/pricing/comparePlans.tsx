import { FaTable } from 'react-icons/fa';

const comparePlans = {
  title: 'Compare Plans',
  name: 'pricingPage.comparePlans',
  type: 'object',
  icon: FaTable,
  fields: [
    {
      name: 'plans',
      title: 'Plans',
      type: 'object',
      fields: [
        {
          name: 'subHeading',
          title: 'SubHeading',
          type: 'object',
          description: 'Sub heading for the compare plans section with icon.',
          fields: [
            {
              name: 'icon',
              title: 'Sub Heading Icon',
              type: 'image',
              options: { hotspot: true },
              description: 'Icon for the subheading.',
              fields: [
                {
                  name: 'alt',
                  title: 'Alt Text',
                  type:'string',
                  description: 'Icon for the subheading.',
                }
              ]
            },
            {
              name: 'text',
              title: 'Text',
              type: 'string',
              description: 'Text for the subheading.',
            },
          ],
        },
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          description: 'Heading for the compare plans section.',
        },
        
      ],
    },
  ],
  preview: {
    select: {
      title: 'plans.heading', 
    },
    prepare({ title }) {
      return {
        title: title || 'No Title', 
      };
    },
  },
};

export default comparePlans;
