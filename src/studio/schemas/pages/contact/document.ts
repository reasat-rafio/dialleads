import { defineField, defineType } from 'sanity';

const contactPage = defineType({
	name: 'contactPage',
	title: 'Contact Page',
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
			of: [{ type: 'contact.hero' }, { type: 'contact.contactForm' }]
		})
	],
	preview: {
		select: {
			title: 'seo.title',
			subtitle: 'seo.description'
		}
	}
});

export default contactPage;
