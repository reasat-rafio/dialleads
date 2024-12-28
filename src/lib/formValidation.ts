import type { Infer, SuperValidated } from 'sveltekit-superforms';
import { z } from 'zod';

export const formSchema = z.object({
  username: z.string().min(1, 'Username is required'),
});

export type FormSchema = typeof formSchema;
export type ContactSuperFormType = SuperValidated<Infer<FormSchema>>;
