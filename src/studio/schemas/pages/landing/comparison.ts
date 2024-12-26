import { MdOutlineCompareArrows } from 'react-icons/md';
import {  defineType } from 'sanity';

const comparison = defineType({
  title: 'Comparison',
  name: 'landing.comparison',
  type: 'object',
  icon: MdOutlineCompareArrows,
  fields: [
    {
      title: 'Comparison',
      name: 'comparison',
      type: 'object',
      fields: [
        {
          name: 'sectionName',
          title: 'Section Name',
          type: 'string',
          description: 'The name of the section',
        },
        {
          name: 'sectionIcon',
          title: 'Section Icon',
          type: 'image',
          description: 'Icon for the section',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              title: 'Alternative Text',
              description: 'Important for SEO and accessibility',
              type:'string'
            }
          ]
        },
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type:'string',
          description: 'The title of the section'
        },
        {
          name: 'comparisonCards',
          title: 'Comparison Cards',
          type: 'array',
          of: [
            {
              name: 'comparisonCard',
              title: 'Comparison Card',
              type: 'object',
              fields: [
                {
                  name: 'cardTitle',
                  title: 'Card Title',
                  type:'string',
                  description: 'The title of the card'
                },
                {
                  name: 'icon',
                  title: 'Icon',
                  type: 'image',
                  description: 'Icon for the card to be shown at the top of the card',
                  options: { hotspot: true },
                  fields: [
                    {
                      name: 'alt',
                      title: 'Alternative Text',
                      description: 'Important for SEO and accessibility',
                      type:'string'
                    }
                  ]
                },
                {
                  name: 'features',
                  title: 'Features',
                  type: 'array',
                  of: [
                    {
                      name: 'feature',
                      title: 'Feature',
                      type:'object',
                      description: 'A feature to be displayed in the card',
                      fields: [
                        {
                          name: 'featureName',
                          title: 'Feature Name',
                          type:'string',
                          description: 'The name of the feature'
                        },
                        {
                          name: 'featureIcon',
                          title: 'Feature Icon',
                          type: 'image',
                          description: 'Icon for the feature to be shown at the top of the feature',
                          options: { hotspot: true },
                          fields: [
                            {
                              name: 'alt',
                              title: 'Alternative Text',
                              description: 'Important for SEO and accessibility',
                              type:'string'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
  ],
});

export default comparison;
