<template>
	<div class="container">
		<div class="row">
			<div :class="colClasses">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Container',
	props: {
		lg: {
			type: [String, Boolean],
			default: false
		},
		mxAuto: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		colClasses() {
			return {
				['col']: true,
				[`col-lg-${this.lg}`]: this.lg,
				['mx-auto']: this.mxAuto
			}
		}
	}
}
</script>
