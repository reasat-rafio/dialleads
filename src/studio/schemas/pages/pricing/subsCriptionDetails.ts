import { defineArrayMember, defineType } from 'sanity';

const subsCriptionDetails = defineType({
  title: 'Subscription Details',
  name: 'pricing.subscriptionDetails',
  type: 'object',
  fields: [
    {
      name: 'subscriptionDetails',
      title: 'Subscription Details',
      type: 'object',
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
                  name: 'featureHeading',
                  title: 'Feature Heading',
                  type: 'string',
                },
                {
                  name: 'featureIcon',
                  title: 'Feature Icon',
                  type: 'image',
                  description: 'Icon feature',
                  options: {
                    hotspot: true,
                  },
                  fields: [
                    {
                      name: 'alt',
                      title: 'Alternative Text',
                      type: 'string',
                      description: 'Important for SEO and accessibility',
                    },
                  ],
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
                                  name: 'relatedPlan',
                                  title: 'Related Plan',
                                  type: 'reference',
                                  to: [{ type: 'planName' }],
                                  description:
                                    'Select the Plan Name associated with this value.',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  name: 'instructions',
                  title: 'Instructions',
                  description: 'Instructions for the feature if any',
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        {
                          name: 'instruction',
                          title: 'Instruction',
                          type: 'array',
                          of: [defineArrayMember({ type: 'block' })],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'subscriptionDetails.features.0.featureHeading',
      subtitle: 'subscriptionDetails.features.0.featureLists.0.featureName',
      media: 'subscriptionDetails.features.0.featureIcon',
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title: title || 'No feature heading',
        subtitle: subtitle || 'No feature name',
        media: media || undefined,
      };
    },
  },
});

export default subsCriptionDetails;
