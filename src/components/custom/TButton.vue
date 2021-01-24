<template>
	<button
		:disabled="disabled"
		:class="{
			text,
			outlined,
			[color]: color,
			'text-sm py-2 px-3 md:py-3 md:px-4 lg:py-4 lg:px-5 lg:text-xl': size === 'lg',
			'text-sm py-1 px-3 lg:py-3 lg:px-4 lg:text-xl': size === 'md',
			'py-2 px-2 sm:px-3 text-sm sm:text-base': size === 'sm',
			'py-1 px-2 text-base': size === 'xs',
		}"
		class="font-bold rounded border"
		@click="onClick"
	>
		<div class="flex items-center justify-center whitespace-nowrap">
			<slot />
		</div>
	</button>
</template>

<script>
export default {
	name: 'TButton',
	props: {
		to: {
			type: [String, Boolean],
			default: false,
		},
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
		},
		outlined: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		onClick() {
			this.to
				? this.$router.push(this.to)
				: this.$emit('click')
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
			//background-color: var(--yellow-3);
			div {
				transform: scale(0.95);
			}
		}
		&.border {
			border-color: transparent;
		}
		&[disabled] {
			opacity: 0.6;
			user-select: none;
			pointer-events: none;
		}
		&.secondary2 {
			&.outlined {
				border-color: var(--dark-3);
			}
			&:not(.text) {
				background-color: var(--dark-3);
			}
			&:hover {
				background-color: var(--dark-2);
			}
		}
		&.primary {
			border-color: var(--yellow-2);
			background-color: var(--yellow-2);
			&:hover {
				background-color: var(--yellow-3);
			}
		}
		&.cyan {
			border-color: var(--cyan-1);
			&:hover {
				background-color: var(--cyan-2);
			}
			&:not(.outlined) {
				background-color: var(--cyan-1);
			}
			&.outlined:hover {
				background-color: var(--cyan-2);
			}
		}
	}
</style>
