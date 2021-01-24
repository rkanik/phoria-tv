<template>
	<AuthLayout>
		<div class="login">
			<ValidationObserver v-slot="{ invalid, handleSubmit, reset }">
				<form @submit.prevent="handleSubmit(() => onSubmit(reset))">
					<Validate
						class="block"
						v-slot="{ errors }"
						rules="required|email"
					>
						<TInput
							dark
							name="email"
							label="Email"
							type="email"
							class="mb-1 md:mb-6"
							:errors="errors"
							v-model="user.email"
							hint="johnnybravo@gmail.com"
							inputClass="w-full md:w-96"
						/>
					</Validate>
					<Validate class="block" v-slot="{ errors }" rules="required">
						<TInput
							dark
							hint="***********"
							name="password"
							label="Password"
							type="password"
							class="mb-1 md:mb-6"
							:errors="errors"
							v-model="user.password"
							inputClass="w-full md:w-96"
						/>
					</Validate>
					<TButton
						size="sm"
						color="primary"
						class="px-10 mt-3 lg:mt-0 block ml-auto"
						:disabled="invalid"
						>Login</TButton
					>
				</form>
			</ValidationObserver>
		</div>
	</AuthLayout>
</template>

<script>
import AuthLayout from '@/layouts/AuthLayout'

import { extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
import { mapActions } from 'vuex';

extend('email', email);
extend('required', required);

export default {
	name: 'Login',
	components: {
		AuthLayout
	},
	data() {
		return {
			user: {
				email: '',
				password: ''
			}
		}
	},
	methods: {
		...mapActions('Auth', ['loginUser']),
		async onSubmit() {
			let { error, message } = await this.loginUser(this.user)
			if (error) {
				return this.$toast.error(message)
			}
			this.$toast.open(message)
			this.$router.push('/')
		}
	}
}
</script>

<style lang='scss' scoped>
	.login {
		@include on("lg") {
			min-width: 822px;
		}
	}
</style>
