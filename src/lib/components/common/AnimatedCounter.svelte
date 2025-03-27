<!-- <script lang="ts">
	import { onMount } from 'svelte';

	interface CounterProps {
		values: Array<string | number>;
		interval?: number;
		startImmediately?: boolean;
		direction?: 'up' | 'down';
		loop?: boolean;
		ease?: string;
		random?: boolean;
		initialValue?: string | number | undefined;
		class?: string;
	}

	let {
		values = Array.from({ length: 100 }, (_, i) => new String(i).padStart(2, '0')),
		interval = 1000,
		startImmediately = false,
		direction = 'down',
		loop = false,
		ease = 'cubic-bezier(1, 0, 0, 1)',
		random = false,
		initialValue = undefined,
		class: className
	}: CounterProps = $props();

	let contentValues = $derived(values.join('\n\n'));
	let intervalInMs = $derived(`${interval}ms`);

	let index = $state(0);
	let lastIndex = $state(0);

	onMount(() => {
		index = direction === 'up' ? 0 : values.length - 1;
		lastIndex = initialValue ? values.indexOf(initialValue) : index;
	});

	onMount(() => {
		// timer function
		const start = () => {
			index = lastIndex + (direction === 'up' ? 1 : -1);

			// terminate if we looped through all values && loop is false
			if (!loop && (index === values.length - 1 || index === 0)) {
				clearInterval(timer);
				return;
			}
			// ensure index is in range
			if (loop && index === values.length) {
				index = 0;
			}
			if (loop && index === -1) {
				index = values.length - 1;
			}

			if (random) {
				index = Math.floor(Math.random() * values.length);
			}

			lastIndex = index;
		};

		if (startImmediately) {
			start();
		}
		let timer = setInterval(start, interval);

		return () => clearInterval(timer);
	});
</script>

<span class="sliding-text {className}">
	<span style="--index: {index}; --interval: {intervalInMs}; --ease:{ease}">
		<span>{contentValues}</span>
	</span>
</span>

<style>
	.sliding-text {
		display: inline-block;
		position: relative;
		line-height: 1em;
		height: 1em;
	}
	.sliding-text > span {
		height: 1em;
		display: inline-block;
		overflow-y: hidden;
	}
	.sliding-text > span > span {
		text-align: center;
		transition: all var(--interval) var(--ease);
		position: relative;
		height: 100%;
		white-space: pre;
		top: calc(var(--index) * -2em);
	}
</style> -->

<script lang="ts">
	import { onMount } from 'svelte';

	interface CounterProps {
		values: Array<string | number>;
		duration?: number; // Duration in milliseconds for the counting animation
		startCounting?: boolean;
		direction?: 'up' | 'down';
		loop?: boolean;
		ease?: string;
		random?: boolean;
		initialValue?: string | number | undefined;
		class?: string;
	}

	let {
		values = Array.from({ length: 100 }, (_, i) => new String(i).padStart(2, '0')),
		duration = 4000,
		startCounting = $bindable(false),
		direction = 'down',
		ease = 'cubic-bezier(1, 0, 0, 1)',
		initialValue = undefined,
		class: className
	}: CounterProps = $props();

	// Combine the array into a single string for display (each value separated by two newlines)
	let contentValues = $derived(values.join('\n\n'));
	let durationInMs = $derived(`${duration}ms`);

	// We'll animate the index from a starting value to a target value.
	let index = $state(0);
	let startIndex = $state(0);
	let targetIndex = $state(0);

	onMount(() => {
		// Initialize based on direction and initial value
		startIndex = direction === 'up' ? (initialValue ? values.indexOf(initialValue) : 0) : values.length - 1;
		index = startIndex;
		targetIndex = direction === 'up' ? values.length - 1 : 0;
	});

	$effect(() => {
		// Animate over the fixed duration using requestAnimationFrame
		const startTime = performance.now();
		let rafId: number;

		const animate = (now: number) => {
			const elapsed = now - startTime;
			if (elapsed < duration) {
				const progress = elapsed / duration;

				let newIndex: number;
				// Linearly interpolate between startIndex and targetIndex based on direction
				if (direction === 'up') {
					newIndex = startIndex + progress * (targetIndex - startIndex);
				} else {
					newIndex = startIndex - progress * (startIndex - targetIndex);
				}
				index = Math.round(newIndex);

				requestAnimationFrame(animate);
			} else {
				// Ensure the final value is reached
				index = targetIndex;
			}
		};

		if (startCounting) {
			rafId = requestAnimationFrame(animate);
		}

		// cancel the animation if the component unmounts mid-animation.
		return () => {
			cancelAnimationFrame(rafId);
		};
	});
</script>

<span class="sliding-text {className}">
	<span style="--index: {index}; --interval: {durationInMs}; --ease: {ease}">
		<span>{contentValues}</span>
	</span>
</span>

<style>
	.sliding-text {
		display: inline-block;
		position: relative;
		line-height: 1em;
		height: 1em;
	}
	.sliding-text > span {
		height: 1em;
		display: inline-block;
		overflow-y: hidden;
	}
	.sliding-text > span > span {
		text-align: center;
		transition: all var(--interval) var(--ease);
		position: relative;
		height: 100%;
		white-space: pre;
		top: calc(var(--index) * -2em);
	}
</style>
