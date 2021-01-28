<template>
	<div class="createsubs p-3 lg:p-16">
		<h4 class="text-xl lg:text-2xl xl:text-3xl font-bold">
			Create Subscription
		</h4>
		<p class="text-sm xl:text-lg text-gray-300">
			Enter the amount you wish to charge for the subscription prices.
		</p>
		<form @submit.prevent="onSubmit" class="mt-4 lg:mt-8">
			<TInput
				name="one-month"
				label="1 Month"
				v-model="subs[1]"
				hint="$13.99"
				v-bind="bindInput"
				helpText='<span class="text-yellow-500">+ Add Promotional Sale</span>'
			/>
			<TInput
				name="three-month"
				label="3 Months"
				v-model="subs[2]"
				hint="$41.97"
				v-bind="bindInput"
				helpText="Current Discounted Price 0%"
			/>
			<TInput
				name="six-month"
				label="6 Months"
				v-model="subs[3]"
				hint="$83.94"
				v-bind="bindInput"
				helpText="Current Discounted Price 0%"
			/>
			<TInput
				name="twelve-month"
				label="12 Months"
				v-model="subs[3]"
				hint="$167.88"
				v-bind="bindInput"
				helpText="Current Discounted Price 0%"
			/>
			<div class="text-center text-gray-300">
				<span class="text-blue-300">Note:</span> People are more likely to
				subscribe with discounted bundles
			</div>
			<Flex justify-between class="mt-10">
				<TButton size="sm" color="primary" class="px-12">Create</TButton>
				<TButton size="sm" class="px-12" @click="$emit('cancel')"
					>Cancel</TButton
				>
			</Flex>
		</form>
	</div>
</template>

<script>
export default {
	name: 'createsubs',
	data() {
		return {
			subs: {
				1: '',
				3: '',
				6: '',
				12: '',
			},
			bindInput: {
				dark: true,
				labelClass: "w-28",
				class: "mb-1 md:mb-6",
				inputClass: "w-full",
				contentClass: "w-full"
			}
		}
	},
	methods: {
		onSubmit() {
			let subscription = Object.values(this.subs).find(value => !!value)
			if (subscription) this.$emit('create', subscription)
		}
	}
}
</script>
