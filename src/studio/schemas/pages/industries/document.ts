import { defineField, defineType } from 'sanity';

const industriesPage = defineType({
    name: 'industriesPage',
    title: 'Industries Page',
    type: 'document',
    fields: [
        defineField({
            name: 'seo',
            type: 'seo'
        }),

        defineField({
            name: 'sections',
            type: 'array',
            validation: (Rule) => Rule.required().min(1),
            of: [
                { type: 'industries.hero' },
                { type: 'industries.whyDialleadsAI' },
                { type: 'common.banner' },
            ]
        })
    ],
    preview: {
        select: {
            title: 'seo.title',
            subtitle: 'seo.description'
        }
    }
});

export default industriesPage;
