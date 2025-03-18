import { z } from 'zod';

export const formSchema = z.object({
	name: z.string().min(1, 'Username is required'),
	email: z.string().min(1, 'Email is required'),
	phoneNumber: z.string().min(8, 'Phone Number is required')
});

export type FormSchema = typeof formSchema;
