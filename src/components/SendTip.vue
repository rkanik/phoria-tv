<template>
	<div class="lg:p-16">
		<div class="text-center">
			<img
				alt="profile-pic"
				src="@/assets/images/profile-thumb.png"
				class="h-12 w-12 rounded mx-auto object-center object-cover"
			/>
			<h4 class="mt-3 text-xl lg:text-2xl xl:text-3xl font-bold">Name</h4>
			<h6 class="text-base">@PhoriaUsername</h6>
			<p class="text-sm xl:text-lg text-gray-300">
				Enter the amount you wish to tip!
			</p>
		</div>
		<form @submit.prevent="onSubmit" class="mt-4 lg:mt-8">
			<TInput
				name="tip"
				label="Tip"
				hint="$5.00"
				v-model="tip.tip"
				v-bind="bindInput"
			/>
			<textarea
				rows="4"
				placeholder="Type your message"
				class="bg-secondary p-3 w-full text-xl"
			/>
			<Flex justify-between class="mt-10">
				<TButton size="sm" color="primary" class="px-12">Send Tip</TButton>
				<TButton size="sm" class="px-12" @click="$emit('cancel')"
					>Cancel</TButton
				>
			</Flex>
		</form>
	</div>
</template>

<script>
export default {
	name: 'SendTip',
	data: () => ({
		tip: {
			tip: '',
			message: ''
		},
		bindInput: {
			dark: true,
			labelClass: "w-28",
			class: "mb-1 md:mb-6",
			inputClass: "w-full",
			contentClass: "w-full"
		}
	})
}
</script>
