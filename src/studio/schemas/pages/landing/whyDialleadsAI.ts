import { MdOutlineQuestionMark } from 'react-icons/md';
import { defineType } from 'sanity';

const whyDialleadsAI = defineType({
	title: 'Why Dialleads AI ?',
	name: 'landing.whyDialleadsAI',
	type: 'object',
	icon: MdOutlineQuestionMark,
	fields: [
		{
			name: 'whyDialleadsAI',
			title: 'Why Dialleads AI',
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
									name: 'cardIcon',
									title: 'Card Icon',
									type: 'image',
									description: 'The icon for the card',
									options: { hotspot: true },
									fields: [
										{
											name: 'alt',
											title: 'Alt Text',
											type: 'string',
											description: 'Alternative text for the icon'
										}
									]
								},
								{
									name: 'cardTitle',
									title: 'Card Title',
									type: 'string',
									description: 'The title for the card'
								},
								{
									name: 'cardDescription',
									title: 'Card Description',
									type: 'text',
									description: 'The description for the card'
								}
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
			title: 'whyDialleadsAI.sectionName',
			subtitle: 'whyDialleadsAI.sectionTitle',
			media: 'whyDialleadsAI.sectionIcon'
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

export default whyDialleadsAI;
