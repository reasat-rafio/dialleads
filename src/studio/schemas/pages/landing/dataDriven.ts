import { FaDatabase } from "react-icons/fa";
import { defineType } from "sanity";

const dataDriven = defineType({
    name: 'landing.dataDriven',
    title: 'Data Driven',
    type: 'object',
    icon: FaDatabase,
    fields: [
        {
            name: 'dataDriven',
            title: 'Data Driven',
            type: 'object',
            description: 'DataDriven Sectiohn',
            fields: [
                {
                    name: 'sectionDetails',
                    title: 'Section Details',
                    type: 'object',
                    description: 'Section Details',
                    fields: [
                        {
                            name: 'sectionIcon',
                            title: 'Section Icon',
                            type: 'image',
                            description: 'The icon for the section',
                            options: {
                                hotspot: true
                            },
                            fields: [
                                {
                                    name: 'alt',
                                    title: 'Alt Text',
                                    description: 'Important for SEO and accessibility',
                                    type:'string'
                                }
                            ]
                        },
                        {
                            name: 'sectionName',
                            title: 'Section Name',
                            type:'string',
                            description: 'The name of the section'
                        }
                    ]
                },
                {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                    description: 'Title Text',
                
                },
                {
                    name: 'description',
                    title: 'Description',
                    type: 'string',
                },
                {
                    name: 'cta',
                    title: 'Call to Action',
                    type: 'link'
                },
                {
                    name: 'text',
                    title: 'Text',
                    type: 'string'
                }
            ]
        }
    ]
})

export default dataDriven;