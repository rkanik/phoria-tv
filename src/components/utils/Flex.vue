<template>
	<div class="flex" :class="classes">
		<slot />
	</div>
</template>
<script>
export default {
	name: 'Flex',
	props: {
		itemsCenter: {
			type: Boolean,
			default: false
		},
		itemsEnd: {
			type: Boolean,
			default: false
		},
		justifyCenter: {
			type: Boolean,
			default: false
		},
		justifyBetween: {
			type: Boolean,
			default: false
		},
		flexRow: {
			type: Boolean,
			default: false
		},
		flexCol: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		classes() {
			return {
				'items-center': this.itemsCenter,
				'items-end': this.itemsEnd,
				'justify-center': this.justifyCenter,
				'justify-between': this.justifyBetween,
				'flex-row': this.flexRow,
				'flex-col': this.flexCol,
			}
		}
	}
}
</script>
