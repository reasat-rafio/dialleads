import { defineField, defineType } from 'sanity';

const landingPage = defineType({
	name: 'landingPage',
	title: 'Landing Page',
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
				{ type: 'landing.hero' },
				{ type: 'landing.clients' },
				{ type: 'landing.testCall' },
				{ type: 'landing.whyDialleadsAI' },
				{ type: 'common.video' },
				{ type: 'landing.industry' },
				{ type: 'landing.getStarted' },
				{ type: 'landing.comparison' },
				{ type: 'landing.integrations' },
				{ type: 'landing.whyChooseUs' },
				{ type: 'landing.testimonials' },
				{ type: 'landing.faq' },
				{ type: 'common.banner' }
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

export default landingPage;
