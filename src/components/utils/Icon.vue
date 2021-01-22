<template>
	<svg
		fill="none"
		viewBox="0 0 24 24"
		role="presentation"
		:stroke="stroke"
		:aria-labelledby="name"
		@click="$emit('click')"
	>
		<title :id="name" lang="en">{{ name }} icon</title>
		<slot />
	</svg>
</template>
<script>
export default {
	name: 'Icon',
	props: {
		name: {
			type: String,
			required: true
		},
		stroke: {
			type: String,
			default: 'currentColor'
		}
	}
}
</script>
<style scoped>
	svg {
		display: inline-block;
		vertical-align: baseline;
		margin-bottom: -2px;
	}
</style>
