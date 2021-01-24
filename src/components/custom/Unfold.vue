<template>
	<div class="unfold">
		<div
			class="unfold__content text-white p-3 lg:p-4 rounded overflow-hidden"
			:class="{ [content]: content, 'unfold__content-expanded': expanded }"
		>
			<p><slot /></p>
		</div>
		<button @click="expanded = !expanded" class="mt-2 font-bold text-primary">
			{{ expanded ? "See Less" : "See More" }}
		</button>
	</div>
</template>

<script>
export default {
	name: 'Unfold',
	props: {
		content: {
			type: [String, Boolean],
			default: false
		}
	},
	data() {
		return {
			expanded: false
		}
	}
}
</script>

<style lang='scss' scoped>
	.unfold {
		&__content {
			max-height:89px;
			@include on("lg") {
				max-height: 76px;
			}
			transition: max-height 500ms ease-out;
		}
		&__content-expanded {
			height: max-content;
			max-height: 100vh;
			transition-timing-function: ease-in;
		}
	}
</style>
