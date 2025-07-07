<script lang="ts">
	import { imgBuilder } from '$lib/sanity/sanity-client';
	import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
	import type { ContactFormData } from '../../../../../types/contact.types';
	import type { SanityImageWithAlt } from '../../../../../types/common.types';

	let { title, description, contactPageImage }: { title: string; description: string; contactPageImage: SanityImageWithAlt } = $props();

	let form: ContactFormData = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		message: '',
		agreeToPrivacy: false
	};

	function handleSubmit(event: Event) {
		event.preventDefault();
		alert(JSON.stringify(form, null, 2));
	}
</script>

<section class="relative mx-auto mt-[2.5rem] w-full max-w-7xl px-5 lg:mt-[5rem] 2xl:px-0">
	<div class="grid grid-cols-1 md:grid-cols-2 md:gap-x-[1.875rem] gap-y-8">
		<SanityImage
			class="hidden md:block overflow-hidden rounded-2xl"
			lqip
			sizes="50vw"
			imageUrlBuilder={imgBuilder}
			src={contactPageImage}
			alt={contactPageImage.alt}
		/>

		<div class="space-y-1 md:col-span-1 w-full flex justify-center">
			<form
				onsubmit={handleSubmit}
				class="self-stretch px-4 py-6 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-200 flex flex-col justify-start items-start gap-7 bg-white w-full max-w-xl md:p-7 md:gap-7 md:outline-white md:bg-white md:rounded-2xl md:max-w-xl lg:p-7 lg:gap-7 lg:outline-white lg:bg-white lg:rounded-2xl lg:max-w-xl"
			>
				<div class="self-stretch px-4 flex justify-start items-start md:px-0">
					<div class="flex-1 flex flex-col justify-start items-start gap-3">
						<div class="self-stretch flex flex-col justify-start items-start gap-1.5">
							<div class="self-stretch text-zinc-900 text-2xl font-semibold font-geist leading-9 md:text-[2.25rem] md:leading-[2.75rem] md:font-semibold md:font-geist md:tracking-[0%]">{title}</div>
							<div class="self-stretch text-neutral-500 text-base font-light font-geist leading-normal md:text-[1.25rem] md:font-normal md:leading-[150%]">{description}</div>
						</div>
					</div>
				</div>
				<div class="self-stretch px-4 flex flex-col justify-start items-start gap-12 md:px-0">
					<div class="self-stretch flex flex-col justify-start items-center gap-12">
						<div class="self-stretch flex flex-col justify-start items-start gap-8">
							<div class="self-stretch flex flex-col justify-start items-start gap-6">
								<!-- First Name -->
								<div class="self-stretch flex flex-col justify-start items-start gap-1.5">
									<label for="firstName" class="justify-start text-neutral-500 text-sm font-medium font-geist leading-tight">First name</label>
									<input
										id="firstName"
										class="self-stretch px-3.5 py-2.5 bg-white rounded-lg shadow outline outline-1 outline-offset-[-1px] outline-zinc-200 flex justify-start items-center gap-2 text-gray-500 text-sm font-normal font-geist leading-normal"
										bind:value={form.firstName}
										placeholder="First name"
									/>
								</div>
								<!-- Last Name -->
								<div class="self-stretch flex flex-col justify-start items-start gap-1.5">
									<label for="lastName" class="justify-start text-neutral-500 text-sm font-medium font-geist leading-tight">Last name</label>
									<input
										id="lastName"
										class="self-stretch px-3.5 py-2.5 bg-white rounded-lg shadow outline outline-1 outline-offset-[-1px] outline-zinc-200 flex justify-start items-center gap-2 text-gray-500 text-sm font-normal font-geist leading-normal"
										bind:value={form.lastName}
										placeholder="Last name"
									/>
								</div>
								<!-- Email -->
								<div class="self-stretch flex flex-col justify-start items-start gap-1.5">
									<label for="email" class="justify-start text-neutral-500 text-sm font-medium font-geist leading-tight">Email</label>
									<input
										id="email"
										type="email"
										class="self-stretch px-3.5 py-2.5 bg-white rounded-lg shadow outline outline-1 outline-offset-[-1px] outline-zinc-200 flex justify-start items-center gap-2 text-gray-500 text-sm font-normal font-geist leading-normal"
										bind:value={form.email}
										placeholder="you@company.com"
									/>
								</div>
								<!-- Phone -->
								<div class="self-stretch flex flex-col justify-start items-start gap-1.5">
									<label for="phone" class="justify-start text-neutral-500 text-sm font-medium font-geist leading-tight">Phone number</label>
									<input
										id="phone"
										type="tel"
										class="self-stretch px-3.5 py-2.5 bg-white rounded-lg shadow outline outline-1 outline-offset-[-1px] outline-zinc-200 flex justify-start items-center gap-2 text-gray-500 text-sm font-normal font-geist leading-normal"
										bind:value={form.phone}
										placeholder="+1 (555) 000-0000"
									/>
								</div>
								<!-- Message -->
								<div class="self-stretch h-40 flex flex-col justify-start items-start gap-1.5">
									<label for="message" class="justify-start text-neutral-500 text-sm font-medium font-geist leading-tight">Message</label>
									<textarea
										id="message"
										class="self-stretch flex-1 px-3.5 py-3 bg-white rounded-lg shadow outline outline-1 outline-offset-[-1px] outline-zinc-200 flex justify-start items-start gap-2 text-gray-500 text-sm font-normal font-geist leading-normal"
										bind:value={form.message}
										placeholder="Leave us a message..."
									></textarea>
								</div>
								<!-- Privacy Policy -->
								<div class="self-stretch flex justify-start items-start gap-3">
									<input
										type="checkbox"
										bind:checked={form.agreeToPrivacy}
										class="w-5 h-5 bg-white rounded-md border border-zinc-200"
									/>
									<span class="text-neutral-500 text-base font-normal font-geist leading-normal">You agree to our friendly privacy policy.</span>
								</div>
							</div>
							<!-- Submit Button -->
							<div class="self-stretch flex flex-col justify-start items-start gap-4">
								<button
									type="submit"
									class="self-stretch h-14 px-8 py-4 bg-gradient-to-r from-violet-700 to-violet-400 rounded-lg outline outline-1 outline-offset-[-1px] outline-violet-600 flex justify-center items-center gap-3 text-white text-lg font-medium font-geist leading-none"
								>
									Send Message
								</button>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</section>
