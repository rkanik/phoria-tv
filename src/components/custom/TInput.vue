<template>
	<Flex class="t-input flex-col md:flex-row" :class="{ error }">
		<label
			:for="id"
			:class="labelClass"
			class="text-base md:text-xl font-light md:font-bold pt-2 flex-shrink-0"
			>{{ label || name }}</label
		>
		<div class="md:ml-6" :class="contentClass">
			<textarea v-if="textarea" v-bind="bind" v-model="model" />
			<input
				v-else
				v-bind="bind"
				v-model="model"
				@keyup="$emit('change', { name, value: $event.target.value })"
			/>
			<small
				:class="helpClass"
				class="block text-base mt-1 text-gray-300"
			>
				{{ helpText }}
				<slot name="help-text"></slot>
			</small>
			<p v-if="error" class="text-red-500">{{ error }}</p>
		</div>
	</Flex>
</template>

<script>

export default {
	name: 'TInput',
	props: {
		dark: {
			type: Boolean,
			default: false
		},
		textarea: {
			type: Boolean,
			default: false
		},
		id: {
			type: String,
			default() {
				return Math.random().toString(36).slice(-10)
			}
		},
		errors: {
			type: Array,
			default() { return [] }
		},
		type: {
			type: String,
			default: 'text'
		},
		value: {
			type: [String, Number],
			default: ''
		},
		label: {
			type: String,
			default: ''
		},
		name: {
			type: String,
			default: ''
		},
		// Hint
		hint: {
			type: String,
			default: 'Enter input here'
		},
		helpText: {
			type: [String, Boolean],
			default: false
		},
		// Classes
		inputClass: {
			type: String,
			default: ''
		},
		labelClass: {
			type: String,
			default: 'flex-1 md:text-right'
		},
		contentClass: {
			type: String,
			default: ''
		},
		helpClass: {
			type: String,
			default: ''
		}
	},
	computed: {
		model: {
			get() { return this.value },
			set(v) { this.$emit('input', v) }
		},
		bind() {
			return {
				id: this.id,
				type: this.type,
				name: this.name,
				placeholder: this.hint,
				class: [
					this.inputClass,
					"text-base md:text-xl py-1 px-2 md:py-2 md:px-3 text-white",
					{
						dark: this.dark,
						'border border-red-500': this.error
					}
				],
			}
		},
		error() {
			return this.errors.length && this.errors[0].replace('{field}', this.name)
		}
	}
}
</script>
<style lang="scss">
	.t-input {
		textarea.dark,
		select.dark,
		input.dark {
			background-color: #3a3a3a;
			&::placeholder {
				color: rgba(white, 0.3);
			}
		}
	}
</style>
