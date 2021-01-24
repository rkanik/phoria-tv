<template>
	<AuthLayout>
		<div class="signup">
			<Flex class="flex-col md:flex-row">
				<div class="w-44 mx-auto md:mr-16 mb-6 md:mb-0 md:mx-0">
					<img
						class="rounded-xl mb-2 object-cover object-center w-44 h-44"
						:src="
							userAvatar ||
							require('@/assets/images/Phoria-Logo_YBBG.png')
						"
						alt="Registration Avatar"
					/>
					<button
						class="font-bold flex items-center justify-center w-full"
						@click="onClickUpload"
					>
						<i class="material-icons mr-2">backup</i>
						<span class="mt-1">Upload Avatar</span>
					</button>
				</div>
				<div>
					<ValidationObserver v-slot="{ invalid, handleSubmit, reset }">
						<form @submit.prevent="handleSubmit(() => onSubmit(reset))">
							<template v-for="field in user">
								<Validate
									class="block"
									:rules="field.rules"
									:key="field.name"
									v-slot="{ errors }"
								>
									<TInput
										dark
										:hint="field.hint"
										:name="field.name"
										:label="field.label"
										:type="field.type"
										:errors="
											field.errors && field.errors.length
												? field.errors
												: errors
										"
										:textarea="field.textarea || false"
										:class="field.class || ' mb-1 md:mb-6'"
										v-model="field.value"
										@change="onChangeInput"
										inputClass="w-full md:w-96"
									/>
								</Validate>
							</template>
							<TButton
								size="sm"
								color="primary"
								class="px-10 block ml-auto"
								:disabled="invalid || cPassInvalid"
								>Signup</TButton
							>
						</form>
					</ValidationObserver>
				</div>
			</Flex>
		</div>
		<input
			type="file"
			ref="avatarInput"
			name="avatarInput"
			style="display: none"
			accept="image/x-png,image/gif,image/jpeg"
			@input="onInputAvatar"
		/>
	</AuthLayout>
</template>

<script>

import AuthLayout from '@/layouts/AuthLayout'

import { miniId } from '../helpers'
import { extend } from 'vee-validate';
import { required, email, min, max } from 'vee-validate/dist/rules';
import { mapActions } from 'vuex';

extend('min', min);
extend('max', max);
extend('email', email);
extend('required', required);

export default {
	name: 'signup',
	components: {
		AuthLayout
	},
	data() {
		return {
			// Booleans
			showPassword: false,
			userAvatar: null,

			// Objects
			user: {
				username: {
					value: '',
					rules: 'required|min:3|max:16',
					name: 'username',
					hint: 'JohnnyBravo',
					label: 'Username*'
				},
				email: {
					value: '',
					type: 'email',
					name: 'email',
					rules: 'required|email',
					hint: 'johnnybravo@gmail.com',
					label: 'Email*'
				},
				password: {
					value: '',
					rules: 'required|min:6|max:16',
					type: 'password',
					name: 'password',
					label: 'Password*',
					hint: '***********'
				},
				confirmPassword: {
					value: '',
					type: 'password',
					name: 'confirmPassword',
					label: 'Confirm Password*',
					class: 'mb-4 md:mb-14',
					hint: '***********',
					errors: []
				},
				subscription: {
					value: '',
					hint: '$7.99',
					name: 'subscription',
					label: 'Subscription',
					helpText: 'This can be updated later in Settings'
				},
				bio: {
					value: '',
					name: 'bio',
					label: 'Bio',
					textarea: true,
					hint: 'Type your bio here',
					helpText: 'This can be updated later in Settings'
				}
			}
		}
	},
	computed: {
		cPassInvalid() {
			return this.user.confirmPassword.errors.length > 0
		}
	},
	methods: {
		...mapActions('Users', ['addUser']),
		onChangeInput({ name, value }) {
			if (name === 'confirmPassword') {
				if (value !== this.user.password.value) {
					this.user.confirmPassword.errors = ['Password not matched']
				}
				else if (this.user.confirmPassword.errors.length) {
					this.user.confirmPassword.errors = []
				}
			}
		},
		onClickUpload() {
			this.$refs.avatarInput.click()
		},
		onInputAvatar(e) {
			const file = e.target.files[0]
			const reader = new FileReader();
			reader.addEventListener("load", () => {
				this.userAvatar = reader.result;
			}, false);

			if (file) {
				reader.readAsDataURL(file);
			}
		},
		async onSubmit(reset) {
			const user = {
				...Object
					.entries(this.user)
					.reduce((user, [key, { value }]) => (
						{ ...user, [key]: value }
					), {}),
				id: miniId(),
				avatar: this.userAvatar,
				createdAt: Date.now()
			}
			let { error, message } = await this.addUser(user)
			this.$toast.open({
				message,
				type: error ? 'error' : 'success',
			})
			if (!error) {
				Object.keys(this.user).forEach(field => {
					this.user[field].value = ''
				})
				this.userAvatar = null
				reset()
			}
		}
	}
}
</script>

<style lang='scss' scoped>
	.signup {
		@include on("lg") {
			min-width: 822px;
		}
	}
</style>
