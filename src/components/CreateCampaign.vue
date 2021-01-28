<template>
	<div class="p-2 lg:p-16">
		<h4 class="text-xl lg:text-2xl xl:text-3xl font-bold">
			Promotional Sales
		</h4>
		<p class="text-sm xl:text-lg text-gray-300">
			Enter the amount you wish to charge for the promotional sale and how
			many subscriptions you will allow the discount for.
		</p>
		<form @submit.prevent="onSubmit" class="mt-4 lg:mt-8">
			<TInput
				hint="$5.00"
				label="1 Month"
				name="one-month"
				v-model="subs[1]"
				v-bind="bindInput"
			/>
			<TInput
				name="three-month"
				label="3 Months"
				v-model="subs[2]"
				hint="$5.00"
				v-bind="bindInput"
			/>
			<div class="text-center text-gray-300">
				The number of subscriptions available for sale.
			</div>
			<Flex justify-between class="mt-10">
				<TButton size="sm" color="primary" class="px-12"
					>Start Campaign</TButton
				>
				<TButton size="sm" class="px-12" @click="$emit('cancel')"
					>Cancel</TButton
				>
			</Flex>
		</form>
	</div>
</template>

<script>
export default {
	name: 'CreateCampaign',
	data() {
		return {
			subs: {
				1: '',
				promos: ''
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

		}
	}
}
</script>
