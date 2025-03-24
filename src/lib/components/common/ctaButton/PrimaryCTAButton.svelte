<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
	import { imgBuilder } from '$lib/sanity/sanity-client';
	import type { SanityImageWithAlt } from '../../../../types/common.types';

	interface ButtonProps {
		buttonText: string;
		buttonIcon: SanityImageWithAlt;
		iconPosition: 'before' | 'after';
		as: 'button' | 'a';
		href: string;
		type: 'button' | 'submit' | 'reset';
		disabled: boolean;
		WrapperClass: string;
		iconClass: string;
		iconInnerClass: string;
        onClickHandler: () => void;
		children: Snippet;
	}

	let {
		buttonText,
		buttonIcon,
		iconPosition = 'before',
		as = 'button',
		href = '/',
		type = 'button',
		disabled = false,
		iconClass = '',
		iconInnerClass = '',
		WrapperClass = '',
		children,
        onClickHandler = $bindable(),
	}: ButtonProps = $props();

	const Component = $derived.by(() => (as === 'a' ? 'a' : 'button'));
</script>

<svelte:element
	this={Component}
	{...as === 'a' ? { href } : { type }}
	{disabled}
    
	class={cn(
		`flex h-[3.25rem] w-fit items-center gap-3 rounded-[0.5rem] bg-primary-gradient px-8 py-4 text-white`,
        iconPosition === 'before' ? 'flex-row' : 'flex-row-reverse',
		WrapperClass
	)}
>
	<SanityImage
		class={cn('h-fit w-fit', iconClass)}
		innerClass={cn('object-contain w-6 h-6', iconInnerClass)}
		src={buttonIcon}
		sizes="50vw"
		imageUrlBuilder={imgBuilder}
		alt={'icon'}
	/>
    <span class="font-geist text-[18px] font-normal leading-[18px] tracking-normal">
		{buttonText}
	</span>
</svelte:element>
