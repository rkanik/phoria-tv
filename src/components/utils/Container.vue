<template>
	<div v-if="v2" class="containerv2 mx-auto">
		<slot />
	</div>
	<div v-else class="container px-2 sm:px-0 mx-auto">
		<slot />
	</div>
</template>

<script>
export default {
	name: 'Container',
	props: {
		v2: {
			type: Boolean,
			default: false
		}
	}
}
</script>
<style lang="scss">
	.containerv2 {
		max-width: 95%;
		@include on("md") {
			max-width: 704px;
		}
		@include on("xl") {
			max-width: 960px;
		}
		@include on("2xl") {
			max-width: 1200px;
		}
	}
</style>
