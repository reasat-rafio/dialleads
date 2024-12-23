const plans = {
    title: 'Plans',
    name: 'plans',
    type: 'document',
    fields: [
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
                options: { hotspot: true },
                description: 'Icon for the feature heading.',
                fields: [
                  {
                    name: 'alt',
                    title: 'Alternative Text',
                    description: 'Icon for the feature heading.',
                    type: 'string',
                  },
                ],
              },
              {
                name: 'featureHeading',
                title: 'Feature Heading',
                type: 'string',
                description: 'Heading of the feature.',
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
                                description:
                                  'Specify the type of value (Text or Checked/Unchecked).',
                                options: {
                                  list: [
                                    { title: 'Text', value: 'text' },
                                    {
                                      title: 'Checked/Unchecked',
                                      value: 'status',
                                    },
                                  ],
                                },
                              },
                              {
                                name: 'text',
                                title: 'Text',
                                type: 'string',
                                description: 'Text value for the feature.',
                                hidden: ({ parent }) =>
                                  parent?.type !== 'text',
                              },
                              {
                                name: 'isAvailable',
                                title: 'Is Available',
                                type: 'boolean',
                                description:
                                  'Checked (true) or Unchecked (false) value.',
                                hidden: ({ parent }) =>
                                  parent?.type !== 'status',
                              },
                              {
                                name: 'relatedSubscriptionType',
                                title: 'Related Subscription Type',
                                type: 'reference',
                                description:
                                  'Select the subscription type associated with this value.',
                                to: [{ type: 'subscriptionTypes' }],
                              },
                            ],
                            description:
                              'A single value for the feature (text or checked/unchecked) linked to a subscription type.',
                          },
                        ],
                        description:
                          'Values associated with this feature (text, checked/unchecked, and linked subscription types).',
                      },
                    ],
                    preview: {
                      select: {
                        title: 'featureName',
                        values: 'values',
                      },
                      prepare({ title, values }) {
                        const valueText =
                          values?.map((value) =>
                            value?.type === 'text'
                              ? value?.text
                              : value?.isAvailable
                              ? '✔'
                              : '✖',
                          ) || [];
                        return {
                          title: title || 'Feature Name',
                          subtitle: valueText.join(', ') || 'No values',
                        };
                      },
                    },
                  },
                ],
                description:
                  'A list of features, each with multiple associated values (text, checked/unchecked, and linked subscription types).',
              },
            ],
          },
        ],
      },
    ],
    preview: {
      select: {
        title: 'title',
        featureCount: 'features.length',
      },
      prepare({ title, featureCount }) {
        return {
          title: title || 'Plans Document',
          subtitle: `${featureCount || 0} feature${featureCount === 1 ? '' : 's'}`,
        };
      },
    },
  };
  
  export default plans;
  