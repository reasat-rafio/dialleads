import { MdOutlineUsb } from 'react-icons/md';
import { defineArrayMember, defineField, defineType } from 'sanity';
import { FaPenFancy } from 'react-icons/fa';
import React from 'react';

const securedAndEfficient = defineType({
    title: 'Secured & Efficient',
    name: 'industries.securedAndEfficient',
    type: 'object',
    icon: MdOutlineUsb,
    fields: [
        {
            name: 'securedAndEfficient',
            title: 'Secured & Efficient',
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
                defineField({
                    name: 'sectionTitle',
                    title: 'Section Title',
                    type: 'array',
                    validation: (Rule) => Rule.required(),
                    of: [
                        defineArrayMember({
                            type: 'block',
                            styles: [],
                            lists: [],
                            marks: {
                                decorators: [
                                    {
                                        title: 'Violate Gradient',
                                        value: 'violateGradient',
                                        // @ts-expect-error i don't know how to fix this
                                        blockEditor: {
                                            icon: () => <FaPenFancy />,
                                            render: ({ children }: { children: React.ReactNode }) => (
                                                <span className="bg-[linear-gradient(75deg,_#731AFF_31%,_#FCCEEE_170%)] bg-clip-text font-semibold text-white/15">
                                                    {children}
                                                </span>
                                            )
                                        }
                                    }
                                ]
                            }
                        })
                    ]
                }),
                {
                    name: 'description',
                    title: 'Section Description',
                    type: 'string',
                    description: 'The description for the section'
                },
                {
                    name: 'stats',
                    title: 'Statistics',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                {
                                    name: 'value',
                                    title: 'Numeric Value',
                                    type: 'string',
                                },
                                {
                                    name: 'description',
                                    title: 'Description',
                                    type: 'string',
                                },
                            ],
                            preview: {
                                select: {
                                    title: 'value',
                                    subtitle: 'description'
                                },
                                prepare({ title, subtitle }) {
                                    return {
                                        title: `${title} ${subtitle}`,
                                    };
                                }
                            }
                        }
                    ],
                },
            ]
        }
    ],
    preview: {
        select: {
            title: 'securedAndEfficient.sectionName',
            media: 'securedAndEfficient.sectionIcon'
        },
        prepare({ title, media }) {
            return {
                title: title || 'No section name provided',
                media: media
            };
        }
    }
});

export default securedAndEfficient;
