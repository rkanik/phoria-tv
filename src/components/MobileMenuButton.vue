<template>
	<button
		class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-yellow-500"
		aria-expanded="false"
		@click="$emit('input', !value)"
	>
		<span class="sr-only">Open main menu</span>
		<i v-if="value" class="material-icons">close</i>
		<i v-else class="material-icons">menu</i>
	</button>
</template>

<script>
export default {
	name: 'MobileMenuButton',
	props: {
		value: {
			type: Boolean,
			required: true
		}
	}
}
</script>
