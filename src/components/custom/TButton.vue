<template>
	<button
		:disabled="disabled"
		:class="{
			[color]: !text,
			'py-4 px-5 text-xl': size === 'lg',
			'py-3 px-4 text-xl': size === 'md',
			'py-2 px-3 text-base': size === 'sm',
			'py-1 px-2 text-base': size === 'xs',
		}"
		class="font-bold rounded"
		@click="$emit('click')"
	>
		<div class="text-center flex items-center justify-center">
			<slot />
		</div>
	</button>
</template>

<script>
export default {
	name: 'TButton',
	props: {
		color: {
			type: String,
			default: 'secondary2',
		},
		text: {
			type: Boolean,
			default: false
		},
		size: {
			type: String,
			default: 'lg'
		},
		disabled: {
			type: Boolean,
			default: false
		}
	}
}
</script>
<style lang="scss" scoped>
	button {
		text-shadow: 1px 1px rgba(0, 0, 0, 0.25);
		transition: background-color 300ms ease-in-out;
		& > div {
			transition: transform 300ms ease-in-out;
		}
		&:hover {
			background-color: var(--yellow-3);
			div {
				transform: scale(0.95);
			}
		}
		&[disabled] {
			opacity: 0.6;
			user-select: none;
			pointer-events: none;
		}
		&.secondary2 {
			background-color: var(--dark-3);
			&:hover {
				background-color: var(--yellow-3);
			}
		}
		&.primary {
			background-color: var(--yellow-2);
			&:hover {
				background-color: var(--yellow-3);
			}
		}
	}
</style>
