import { MdOutlineQuestionMark } from 'react-icons/md';
import { defineField, defineType } from 'sanity';

const getStarted = defineType({
    title: 'How to get started',
    name: 'landing.getStarted',
    type: 'object',
    icon: MdOutlineQuestionMark,
    fields: [
        {
            name: 'getStarted',
            title: 'How to get started',
            type: 'object',
            fields: [
                {
                    name: 'sectionName',
                    title: 'Section Name',
                    type: 'string',
                    description: 'The name of the section'
                },
                {
                    name: 'sectionIcon',
                    title: 'Section Icon',
                    type: 'image',
                    description: 'The icon for the section'
                },
                {
                    name: 'sectionTitle',
                    title: 'Section Title',
                    type: 'string',
                    description: 'The title for the section'
                },
                {
                    name: 'cards',
                    title: 'Cards',
                    type: 'array',
                    of: [
                        {
                            name: 'card',
                            title: 'Card',
                            type: 'object',
                            fields: [
                                {
                                    name: 'stepText',
                                    title: 'Text for step',
                                    type: 'string',
                                },
                                {
                                    name: 'cardTitle',
                                    title: 'Card Title',
                                    type: 'string',
                                },
                                {
                                    name: 'cardDescription',
                                    title: 'Card Description',
                                    type: 'string',
                                    description: 'The description for the card'
                                },
                                defineField({
                                    name: 'ctaBtnText',
                                    title: 'CTA Button Text',
                                    type: 'string'
                                }),
                                defineField({
                                    name: 'ctaBtnIcon',
                                    title: 'CTA Button Icon',
                                    type: 'image',
                                    options: { hotspot: true },
                                }),
                                defineField({
                                    name: 'ctaBtnURL',
                                    type: 'string',
                                    title: 'CTA Button URL',
                                }),
                            ]
                        }
                    ],
                    description: 'The cards for the section'
                }
            ]
        }
    ],
    preview: {
        select: {
            title: 'getStarted.sectionName',
            subtitle: 'getStarted.sectionTitle',
            media: 'getStarted.sectionIcon'
        },
        prepare({ title, subtitle, media }) {
            return {
                title: title || 'No section name provided',
                subtitle: subtitle || 'No section title provided',
                media: media
            };
        }
    }
});

export default getStarted;
