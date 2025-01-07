import { MdOutlinePriceCheck } from 'react-icons/md';

const pricing = {
  name: 'pricing',
  title: 'Pricing',
  type: 'object',
  icon: MdOutlinePriceCheck,
  fields: [
    {
      name: 'saveUpTo',
      title: 'Save Up To',
      type: 'number',
      description: 'The maximum amount or percentage users can save.',
    },
    {
      name: 'plans',
      title: 'Plans',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Icon',
              type: 'image',
              description:
                'Text to display for accessibility or if the banner image fails to load.',
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: 'alt',
                  title: 'Alternative Text',
                  description: 'Important for SEO and accessibility',
                  type: 'string',
                },
              ],
            },
            {
              name: 'planName',
              title: 'Plan Name',
              type: 'reference',
              to: [{ type: 'planName' }], 
            },
            {
              name: 'price',
              title: 'Price',
              type: 'number',
            },
            {
              name: 'features',
              title: 'Features',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'featureName',
                      title: 'Feature Name',
                      type: 'string',
                    },
                  ],
                },
              ],
            },
            {
              name: 'cta',
              title: 'Call to Action',
              type: 'link',
              description: 'A call to action link for the plan.',
            },
          ],
          preview: {
            select: {
              title: 'planName.name', 
              subtitle: 'price',
              media: 'icon',
            },
            prepare({
              title,
              subtitle,
              media,
            }: {
              title: string;
              subtitle: number;
              media: { asset: { _ref: string } };
            }) {
              return {
                title: title || 'Untitled Plan',
                subtitle: subtitle ? `$${subtitle}` : 'No price set',
                media: media,
              };
            },
          },
        },
      ],
    },
    {
      name: 'enterprisePlan',
      title: 'Enterprise Plan',
      type: 'banner',
      description: 'Banner for Enterprise Plan',
    },
    {
      name: 'sections',
      type: 'array',
      description: 'Sections for Pricing Page',
      of: [
        { type: 'pricing.hero' },
        { type: 'pricing.subscriptionDetails' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(): { title: string; subtitle: string } {
      return {
        title: 'Pricing',
        subtitle: 'Plans',
      };
    },
  },
};

export default pricing;
