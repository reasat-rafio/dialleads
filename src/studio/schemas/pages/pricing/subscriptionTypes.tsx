const subscriptionTypes = {
  title: 'Subscription Types',
  name: 'subscriptionTypes',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the subscription type (e.g., plan name).',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Subtitle for the subscription type.',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'array',
      description: 'Pricing options (e.g., monthly and annually).',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'type',
              title: 'Type',
              type: 'string',
              description:
                'Specify whether this price is for Monthly or Annually.',
              options: {
                list: [
                  { title: 'Monthly', value: 'monthly' },
                  { title: 'Annually', value: 'annually' },
                ],
              },
            },
            {
              name: 'value',
              title: 'Price Value',
              type: 'number',
              description: 'The actual price value.',
            },
          ],
        },
      ],
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'array',
      description: 'Array of texts for buttons in the subscription type.',
      of: [
        {
          type: 'string',
          description: 'Text for the button.',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};

export default subscriptionTypes;
