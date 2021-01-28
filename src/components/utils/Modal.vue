<template>
	<div
		class="pt-modal fixed flex items-center justify-center"
		:class="value ? 'opacity-1 visible inset-0 z-50' : 'opacity-0 invisible'"
	>
		<div class="shadow-xl" :class="contentClass">
			<slot />
		</div>
		<Icon
			name="close"
			stroke-width="2"
			class="h-8 w-8 lg:h-12 lg:w-12 absolute top-4 right-4 lg:top-8 lg:right-8 cursor-pointer opacity-60 hover:opacity-100"
			@click="$emit('input', false), $emit('close')"
		>
			<IconClose />
		</Icon>
	</div>
</template>

<script>
import IconClose from '@/components/icons/IconClose'
export default {
	name: 'Modal',
	components: {
		IconClose
	},
	props: {
		value: {
			type: [Boolean, String],
			default: true
		},
		contentClass: {
			type: String,
			default: ""
		}
	}
}
</script>

<style lang='scss' scoped>
	.pt-modal {
		backdrop-filter: blur(8px);
		background-color: rgba(0, 0, 0, 0.35);
		transition: all 300ms ease-in-out;
		> div {
			max-width: 90%;
			position: relative;
			@include on("lg") {
				max-width: 800px;
			}
		}
	}
</style>
