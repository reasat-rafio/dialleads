import { SiHomeadvisor } from 'react-icons/si';
import { defineArrayMember, defineField, defineType } from 'sanity';

const contactForm = defineType({
	title: 'ContactForm',
	name: 'contact.contactForm',
	type: 'object',
	icon: SiHomeadvisor,
	fields: [
		defineField({
			name: 'sectionTitle',
			type: 'string',
			title: 'Section Title'
			// validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'contactPageImage',
			type: 'image',
			title: 'Contact Page Image',
			// validation: (Rule) => Rule.required(),
			options: { hotspot: true },
			fields: [
				{
					name: 'alt',
					title: 'Alternative Text',
					description: 'Important for SEO and accessibility',
					type: 'string'
					// validation: (Rule) => Rule.required(),
				}
			]
		})
	],
	preview: {
		select: {
			subtitle: 'sectionTitle'
		}
	}
});

export default contactForm;
