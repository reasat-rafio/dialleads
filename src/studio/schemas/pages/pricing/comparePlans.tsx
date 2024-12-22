import { FaTable } from 'react-icons/fa';

const comparePlans = {
  title: 'Compare Plans',
  name: 'pricingPage.comparePlans',
  type: 'object',
  icon: FaTable,
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Main heading for the compare plans section.',
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      description: 'Subtitle for the compare plans section.',
    },
    {
      name: 'columns',
      title: 'Columns',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'Title of the column (e.g., plan name).',
            },
            {
              name: 'subtitle',
              title: 'Subtitle',
              type: 'string',
              description: 'Subtitle for the column.',
            },
            {
              name: 'buttonText',
              title: 'Button Text',
              type: 'string',
              description: 'Text for the button in this column.',
            },
            {
              name: 'rows',
              title: 'Rows',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'icon',
                      title: 'Icon',
                      type: 'image',
                      description: 'Icon for the row.',
                    },
                    {
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                      description: 'Title of the row.',
                    },
                    {
                      name: 'points',
                      title: 'Points',
                      type: 'array',
                      of: [
                        {
                          type: 'object',
                          fields: [
                            {
                              name: 'text',
                              title: 'Text',
                              type: 'string',
                              description: 'Point text.',
                            },
                            {
                              name: 'icon',
                              title: 'Icon',
                              type: 'image',
                              description: 'Optional icon for the point.',
                            },
                          ],
                        },
                      ],
                      description: 'Points under each row.',
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
            select: {
              title: 'title',
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
