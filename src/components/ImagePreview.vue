<template>
	<div
		class="img-preview fixed flex items-center justify-center"
		:class="{
			'opacity-0 invisible': !value,
			'opacity-1 visible inset-0 z-50': value,
		}"
	>
		<img v-if="value" :src="value" class="max-h-screen mx-auto shadow-lg" />
		<Icon
			name="close"
			stroke-width="2"
			class="h-12 w-12 absolute top-8 right-8 cursor-pointer opacity-60 hover:opacity-100"
			@click="$emit('input', false)"
		>
			<IconClose />
		</Icon>
	</div>
</template>

<script>
import IconClose from '@/components/icons/IconClose'
export default {
	name: 'ImagePreview',
	components: {
		IconClose
	},
	props: {
		value: {
			type: [Boolean, String],
			default: true
		},
	},
}
</script>

<style lang='scss' scoped>
	.img-preview {
		backdrop-filter: blur(10px);
		background-color: rgba(0, 0, 0, 0.35);
		transition: all 300ms ease-in-out;
	}
</style>
