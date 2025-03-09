import { defineType } from 'sanity';

const planName = defineType({
	name: 'planName',
	title: 'Plan Name',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Plan Name',
			type: 'string',
			description: 'Name of the plan (e.g., Basic, Standard, Premium).'
		}
	]
});

export default planName;
