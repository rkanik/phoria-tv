<template>
	<router-link v-if="to" :to="to" class="button" :class="classes"
		><slot
	/></router-link>
	<button
		v-else
		class="button"
		:class="classes"
		@click="$emit('click', $event)"
	>
		<slot />
	</button>
</template>

<script>
export default {
	name: 'Button',
	props: {
		to: {
			type: [Boolean, String],
			default: false
		},
		color: {
			type: String,
			default: 'cyan'
		},
		outlined: {
			type: Boolean,
			default: false
		},
		radius: {
			type: [Boolean, String],
			default: true
		},
		text: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		classes() {

			let radius = {}
			if (typeof this.radius === 'string') {
				this.radius.split(' ').forEach(rd => {
					radius[`radius__${rd}`] = true
				});
			}
			else {
				radius['radius__all'] = true
			}

			return {
				...radius,
				['button__text']: this.text,
				['button__outlined']: this.outlined,
				['button__' + this.color]: true,
			}
		}
	}
}
</script>

<style lang='scss' scoped>
	.button {
		font-weight: bold;
		white-space: nowrap;
		transition: all 300ms ease-in-out;
		border: 1px solid transparent;
		&:focus {
			outline: none;
		}

		&:not(.button__text) {
			padding: 0.5rem 1rem;
		}

		&.radius__all {
			border-radius: 0.2rem;
		}
		&.radius__tl {
			border-top-left-radius: 0.2rem;
		}
		&.radius__tr {
			border-top-right-radius: 0.2rem;
		}
		&.radius__bl {
			border-bottom-left-radius: 0.2rem;
		}
		&.radius__br {
			border-bottom-right-radius: 0.2rem;
		}

		// Colors
		&__cyan:not(.button__outlined):not(.button__text) {
			background-color: var(--cyan-1);
			&:hover {
				background-color: var(--cyan-2);
			}
		}
		&__cyan.button__outlined {
			color: white;
			border-color: #707070;
			&:hover {
				background-color: var(--cyan-1);
			}
      }

		// Color Yellow
		&__yellow:not(.button__outlined):not(.button__text) {
			background-color: var(--yellow-2);
			&:hover {
				background-color: var(--yellow-2);
			}
		}
		&__yellow.button__outlined {
			color: white;
			border-color: #707070;
			&:hover {
				background-color: var(--yellow-2);
			}
		}
	}
	a.button {
		display: inline-block;
		text-decoration: none;
		color: var(--light-1);
	}
</style>
