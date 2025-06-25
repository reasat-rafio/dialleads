
import { defineType, defineField } from 'sanity';

const bookCallButton = defineType({
  name: 'bookCallButton',
  title: 'Book a Call Button',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Button Label',
      type: 'string',
      initialValue: 'Book a Call',
    }),
    defineField({
      name: 'url',
      title: 'Button URL',
      type: 'url',
    }),
    defineField({
      name: 'openInNewTab',
      title: 'Open in New Tab?',
      type: 'boolean',
      initialValue: true,
    }),
  ],
});

export default bookCallButton;
