<template>
	<TDropdown contentClass="fixed 2xl:top-20 right-0">
		<template v-slot:toggler>
			<div class="relative">
				<i class="material-icons md:text-2xl lg:text-3xl 2xl:text-4xl">{{ nav.icon }}</i>
				<span
					v-if="nav.badge"
					class="h-5 w-5 text-xs font-bold absolute top-0 -right-1 rounded-full bg-red-500 flex items-center justify-center"
				>
					{{ nav.badge }}
				</span>
			</div>
		</template>
		<template v-slot:content>
			<div
				class="notify-dropdown flex flex-col space-y-2 md:space-y-4 mx-auto sm:mx-0 p-2 md:p-4 bg-secondary2 shadow-md"
			>
				<Flex
					items-center
					justify-between
					:key="index"
					v-for="(item, index) in 5"
					class="bg-primary py-2 md:py-4 pl-4 pr-8 md:px-12 space-x-4 rounded relative"
				>
					<img
						alt="Phoria Logo"
						src="@/assets/images/Phoria-Logo_YBBG.png"
						class="w-8 md:w-12 h-8 md:h-12 rounded-full flex-shrink-0"
					/>
					<h4 class="font-bold text-sm md:text-lg">
						<router-link to="/elharlen" class="text-blue-400"
							>ElHarlen</router-link
						>
						has liked your post
					</h4>
					<span>🤑</span>
					<button
						class="absolute top-2 right-2 text-gray-300 hover:text-white"
					>
						<i class="material-icons text-sm">close</i>
					</button>
				</Flex>
			</div>
		</template>
	</TDropdown>
</template>

<script>
export default {
	name: 'NotifyDropdown',
	props: {
		nav: {
			type: Object,
			required: true
		}
	}
}
</script>
<style lang="scss">
	.notify-dropdown {
		width: 100%;
		@include on("lg") {
			width: 500px;
		}
		@include on("2xl") {
			width: 750px;
		}
	}
</style>
