<template>
	<div class="signup">
		<div class="row">
			<div class="col col-lg-3 text-center">
				<img
					class="signup__avatar mb-2"
					:src="
						user.avatar ||
						require('../assets/images/Phoria-Logo_YBBG.png')
					"
					alt="Registration Avatar"
				/>
				<Button text @click="onClickUpload">
					<input
						type="file"
						ref="avatarInput"
						name="avatarInput"
						style="display: none"
						accept="image/x-png,image/gif,image/jpeg"
						@input="onInputAvatar"
					/>
					<UploadIcon class="mb-2" />
					Upload Avatar
				</Button>
			</div>
			<div class="col">
				<form @submit.prevent="onSubmit" novalidate>
					<div class="d-flex mb-4">
						<label for="username" class="mr-4 mb-0">Username</label>
						<div class="w-100">
							<input
								type="text"
								class="w-100"
								id="username"
								placeholder="JohnnyBravo"
								v-model="user.username"
							/>
							<small class="text-center d-block mt-1"
								>This will be displayed as
								<span class="yellow"
									>https://phoria.tv/{{
										user.username !== ""
											? user.username
											: "johnnybravo"
									}}</span
								></small
							>
						</div>
					</div>
					<div class="d-flex mb-4">
						<label for="email" class="mr-4 mb-0">Email</label>
						<input
							id="email"
							type="email"
							class="w-100"
							placeholder="johnnybravo@gmail.com"
							v-model="user.email"
						/>
					</div>
					<div class="signup__input-group d-flex mb-4">
						<label for="password" class="mr-4 mb-0">Password</label>
						<input
							id="password"
							class="w-100"
							v-model="user.password"
							placeholder="***********"
							:type="showPassword ? 'text' : 'password'"
						/>
						<div class="post-icon" @click="showPassword = !showPassword">
							<EyeIcon v-if="showPassword" />
							<EyeOffIcon v-else />
						</div>
					</div>
					<div class="d-flex mb-5">
						<label for="confirmPassword" class="mr-4 mb-0"
							>Confirm Password</label
						>
						<input
							:type="showPassword ? 'text' : 'password'"
							class="w-100"
							id="confirmPassword"
							v-model="user.confirmPassword"
							placeholder="***********"
						/>
					</div>
					<div class="d-flex mb-4">
						<label for="subscription" class="mr-4 mb-0"
							>Set Subscription<small> (Optional)</small></label
						>
						<div class="w-100">
							<input
								type="text"
								class="w-100"
								id="subscription"
								placeholder="$7.99"
								v-model="subscription"
							/>
							<small class="text-center d-block mt-1"
								>This can be updated later in Settings</small
							>
						</div>
					</div>
					<div class="d-flex mb-4">
						<label for="bio" class="mr-4 mb-0"
							>Bio<small> (Optional)</small></label
						>
						<div class="w-100">
							<textarea
								id="bio"
								type="text"
								rows="3"
								class="w-100 mt-1"
								placeholder="Write your bio here"
								v-model="user.bio"
							/>
							<small class="text-center d-block"
								>This can be updated later in Settings</small
							>
						</div>
					</div>
					<Button class="d-block ml-auto px-4" color="yellow"
						>SUBMIT</Button
					>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import UploadIcon from '../components/icons/Upload'
import EyeIcon from '../components/icons/Eye'
import EyeOffIcon from '../components/icons/EyeOff'
export default {
	name: 'signup',
	components: {
		UploadIcon,
		EyeIcon,
		EyeOffIcon
	},
	data() {
		return {
			// Booleans
			showPassword: false,

			// Objects
			user: {
				avatar: null,// require('../assets/images/Phoria-Logo_YBBG.png'),
				username: '',
				email: '',
				password: '',
				confirmPassword: '',
				subscription: '',
				bio: ''
			}
		}
	},
	computed: {
		subscription: {
			get() {
				return this.user.subscription !== ''
					? `$${this.user.subscription}`
					: this.user.subscription
			},
			set(v) {
				const value = v.replace(/\$/g, '')
				if (!/^\d+$/.test(value)) return
				this.user.subscription = value
			}
		}
	},
	methods: {
		onClickUpload() {
			this.$refs.avatarInput.click()
		},
		onInputAvatar(e) {
			const file = e.target.files[0]
			const reader = new FileReader();
			reader.addEventListener("load", () => {
				this.user.avatar = reader.result;
			}, false);

			if (file) {
				reader.readAsDataURL(file);
			}
		},
		onSubmit() {

			const required = ['username', 'email', 'password']
			let invalid = ''

			let valid = required.every(key => {
				if (this.user[key] === '') {
					invalid = key
					return false
				}
				return true
			})

			if (!valid) return this.$toast.open({
				type: 'error',
				message: `'${invalid}' is required!`
			})

			if (this.user.password !== this.user.confirmPassword) {
				return this.$toast.open({
					type: 'error',
					message: `Password doesn't matched!`
				})
			}

         this.$toast.clear()

			console.log(this.user)

		}
	}
}
</script>

<style lang='scss' scoped>
	.signup {
		&__avatar {
			height: 183px;
			width: 183px;
			border-radius: 22px;
			object-fit: cover;
			object-position: top center;
		}
		&__input-group {
			position: relative;
		}
	}
	label[for="subscription"] {
		line-height: unset;
	}
	.post-icon {
		position: absolute;
		top: 50%;
		right: 1rem;
		transform: translate(0, -50%);
		svg {
			stroke: var(--light-3);
		}
	}
</style>
