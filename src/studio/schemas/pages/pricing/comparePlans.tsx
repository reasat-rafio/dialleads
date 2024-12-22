import { FaTable } from 'react-icons/fa';

const comparePlans = {
  title: 'Compare Plans',
  name: 'pricingPage.comparePlans',
  type: 'object',
  icon: FaTable,
  fields: [
    {
      name: 'subHeading',
      title: 'SubHeading',
      type: 'object',
      description: 'Sub heading for the compare plans section with icon.',
      fields: [
        {
          name: 'icon',
          title: 'Icon',
          type: 'image',
          description: 'Icon for the subheading.',
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
    {
      name: 'subscriptionTypes',
      title: 'Subscription Types',
      type: 'array',
      description: 'Reference to subscription types.',
      of: [
        {
          type: 'reference',
          to: [{ type: 'subscriptionTypes' }],
        },
      ],
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
              name: 'icon',
              title: 'Icon',
              type: 'image',
              description: 'Icon for the feature.',
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'Title of the feature.',
            },
            {
              name: 'featureLists',
              title: 'Feature Lists',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'featureName',
                      title: 'Feature Name',
                      type: 'string',
                      description: 'Name of the feature.',
                    },
                    {
                      name: 'values',
                      title: 'Values',
                      type: 'array',
                      of: [
                        {
                          type: 'object',
                          fields: [
                            {
                              name: 'type',
                              title: 'Type',
                              type: 'string',
                              description: 'Specify the type of value (Text or Checked/Unchecked).',
                              options: {
                                list: [
                                  { title: 'Text', value: 'text' },
                                  { title: 'Checked/Unchecked', value: 'status' },
                                ],
                              },
                            },
                            {
                              name: 'text',
                              title: 'Text',
                              type: 'string',
                              description: 'Text value for the feature.',
                              hidden: ({ parent }) => parent?.type !== 'text',
                            },
                            {
                              name: 'isAvailable',
                              title: 'Is Available',
                              type: 'boolean',
                              description: 'Checked (true) or Unchecked (false) value.',
                              hidden: ({ parent }) => parent?.type !== 'status',
                            },
                            {
                              name: 'relatedSubscriptionType',
                              title: 'Related Subscription Type',
                              type: 'reference',
                              description: 'Select the subscription type associated with this value.',
                              to: [{ type: 'subscriptionTypes' }],
                            },
                          ],
                          description: 'A single value for the feature (text or checked/unchecked) linked to a subscription type.',
                        },
                      ],
                      description: 'Values associated with this feature (text, checked/unchecked, and linked subscription types).',
                    },
                  ],
                  preview: {
                    select: {
                      title: 'featureName',
                    },
                  },
                },
              ],
              description: 'A list of features, each with multiple associated values (text, checked/unchecked, and linked subscription types).',
            },
          ],
          preview: {
            select: {
              title: 'title',
              media: 'icon',
            },
          },
        },
      ],
    },
  ],
  preview: {
    prepare: () => ({ title: 'Compare Plans' }),
  },
};

export default comparePlans;
