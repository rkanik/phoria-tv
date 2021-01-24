<template>
	<div v-click-outside="() => (open = false)">
		<button @click="open = !open">
			<slot name="toggler"></slot>
		</button>

		<!--dropdown content: desktop-->
		<transition
			enter-active-class="transition-all duration-200 ease-out"
			leave-active-class="transition-all duration-750 ease-in"
			enter-class="opacity-0 scale-75"
			enter-to-class="opacity-100 scale-100"
			leave-class="opacity-100 scale-100"
			leave-to-class="opacity-0 scale-75"
		>
			<div
				v-if="open"
				:class="contentClass"
				:style="`z-index:${z}`"
				class="shadow-lg rounded overflow-hidden"
			>
				<slot name="content"></slot>
			</div>
		</transition>

		<!--dropdown content: mobile-->
		<!-- <transition
			enter-active-class="transition-all duration-200 ease-out"
			leave-active-class="transition-all duration-750 ease-in"
			enter-class="opacity-0 scale-75"
			enter-to-class="opacity-100 scale-100"
			leave-class="opacity-100 scale-100"
			leave-to-class="opacity-0 scale-75"
		>
			<div
				class="md:hidden fixed inset-x-0 bottom-0 w-full shadow-2xl"
				style="z-index: 100"
				v-if="open"
			>
				<slot name="content"></slot>
			</div>
		</transition> -->
		<!-- to close when clicked on space around it in mobile-->
		<!-- <div
			class="md:hidden fixed w-full h-full inset-0 bg-gray-900 opacity-50 z-10"
			@click="open = false"
			v-if="open"
		></div> -->
	</div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
export default {
	name: 'TDropdown',
	directives: { ClickOutside },
	data() {
		return {
			open: false,
		};
	},
	props: {
		contentClass: {
			type: String,
			default: 'absolute top-0 right-0'
		},
		z: {
			type: [Number, String],
			default: 100
		}
	},
	mounted() {
		const onEscape = (e) => {
			if (e.key === "Esc" || e.key === "Escape") {
				this.open = false;
			}
		};
		document.addEventListener("keydown", onEscape);
		this.$once("hook:beforeDestroy", () => {
			document.removeEventListener("keydown", onEscape);
		});
	},
};
</script>
