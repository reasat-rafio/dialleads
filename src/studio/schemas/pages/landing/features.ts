import { SiHomeadvisor } from 'react-icons/si';
import { defineArrayMember, defineField, defineType } from 'sanity';

const features = defineType({
	title: 'Features',
	name: 'landing.features',
	type: 'object',
	icon: SiHomeadvisor,
	fields: [
		defineField({
			name: 'sectionTitle',
			type: 'string',
			title: 'Section Title'
		}),
		defineField({
			name: 'sectionIcon',
			type: 'image',
			title: 'Section Icon',
			options: { hotspot: true },
			fields: [
				{
					name: 'alt',
					title: 'Alternative Text',
					description: 'Important for SEO and accessibility',
					type: 'string'
				}
			]
		}),
		defineField({
			name: 'title',
			type: 'string',
			title: 'Title'
		}),
		defineField({
			name: 'features',
			title: 'Features',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'object',
					fields: [
						defineField({
							name: 'featureGroupName',
							title: 'Feature Group Name',
							type: 'string'
						}),
						defineField({
							name: 'features',
							title: 'Features',
							type: 'array',
							of: [
								defineArrayMember({
									type: 'object',
									fields: [
										defineField({
											name: 'featureIcon',
											type: 'image',
											title: 'Feature Icon',
											options: { hotspot: true },
											fields: [
												{
													name: 'alt',
													title: 'Alternative Text',
													description: 'Important for SEO and accessibility',
													type: 'string'
												}
											]
										}),
										defineField({
											name: 'featureTitle',
											title: 'Feature Title',
											type: 'string'
										}),
										defineField({
											name: 'featureDescription',
											title: 'Feature Description',
											type: 'string'
										})
									],
									preview: {
										select: {
											title: 'featureTitle'
										}
									}
								})
							]
						})
					],
					preview: {
						select: {
							title: 'featureGroupName'
						}
					}
				})
			]
		})
	],

	preview: {
		select: {
			title: 'sectionTitle', // Main section title
			subtitle: 'title', // Additional title for context
			media: 'sectionIcon' // Use the section icon as the preview image
		},
		prepare({ title, subtitle, media }) {
			return {
				title: title || 'Features Section', // Fallback for title
				subtitle: subtitle || 'No title provided', // Fallback for subtitle
				media: media || SiHomeadvisor // Fallback to the default icon
			};
		}
	}
});

export default features;
