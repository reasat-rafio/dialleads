import { SiHomeadvisor } from 'react-icons/si';
import { defineArrayMember, defineField, defineType } from 'sanity';
import { FaPenFancy } from 'react-icons/fa';
import React from 'react';

const hero = defineType({
    title: 'Hero',
    name: 'industries.hero',
    type: 'object',
    icon: SiHomeadvisor,
    fields: [
        {
            name: 'hero',
            title: 'Hero',
            type: 'object',
            fields: [
                defineField({
                    name: 'heroTitle',
                    title: 'Hero Title',
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
                                        title: 'Violet Gradient',
                                        value: 'violetGradient',
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

                defineField({
                    name: 'subtitle',
                    type: 'string',
                    description: 'The subtitle of the hero section'
                }),


                defineField({
                    name: 'link',
                    type: 'link'
                }),

                defineField({
                    name: 'agentCard',
                    title: 'Agent Card',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'cardImage',
                            type: 'image',
                            title: 'Card Image',
                            // validation: (Rule) => Rule.required(),
                            options: { hotspot: true },
                            fields: [
                                {
                                    name: 'alt',
                                    title: 'Alternative Text',
                                    description: 'Important for SEO and accessibility',
                                    type: 'string',
                                    validation: (Rule) => Rule.required()
                                }
                            ]
                        }),

                        defineField({
                            name: 'cardTitle',
                            title: 'Card Title',
                            type: 'string',
                            validation: (Rule) => Rule.required()
                        }),

                        defineField({
                            name: 'cardSubTitle',
                            title: 'Card Sub Title',
                            type: 'string',
                            validation: (Rule) => Rule.required()
                        }),

                        defineField({
                            name: 'mp3File',
                            title: 'MP3 File',
                            type: 'file',
                            description: 'Upload an MP3 file',
                            options: {
                                accept: 'audio/mpeg'
                            },
                            validation: (Rule) => Rule.required()
                        })
                    ],
                }),
            ]
        }
    ],
    preview: {
        select: {
            subtitle: 'hero.subtitle'
        },
        prepare({ subtitle }) {
            return {
                title: 'Hero',
                subtitle: subtitle || '',
                media: SiHomeadvisor
            };
        }
    }
});

export default hero;
