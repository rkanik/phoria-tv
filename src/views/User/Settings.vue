<template>
	<div class="usettings">
		<Container>
			<UserbarUser class="py-2" />
		</Container>
		<div class="bg-secondary pt-3">
			<Flex on="lg">
				<aside
					class="usettings__sidebar bg-primary flex-none mb-3 lg:mb-0 p-3 lg:p-9"
				>
					<ul class="flex lg:block">
						<li
							class="usettings__tab relative bg-cyan-accent py-2 px-2 lg:py-5 lg:px-4 rounded lg:rounded-xl font-bold text-base lg:text-xl cursor-pointer lg:mb-4 mr-3 lg:mr-0"
						>
							Profile
						</li>
						<li
							class="usettings__tab relative py-2 px-2 lg:py-5 lg:px-4 rounded lg:rounded-xl font-bold text-base lg:text-xl cursor-pointer"
						>
							Payments and Earning
						</li>
					</ul>
				</aside>
				<div class="bg-primary p-3 lg:p-12 lg:ml-3 lg:rounded-tl-xl flex-1">
					<h4 class="font-bold text-xl lg:text-2xl 2xl:text-3xl">
						Edit Profile
					</h4>
					<p class="text-base text-secondary lg:text-xl lg:mt-8">
						Update your cover and avatar image
					</p>
					<div class="relative mt-8">
						<img
							class="usettings__cover-img rounded-xl w-full object-cover object-center"
							:src="
								$user.cover ||
								require('@/assets/images/profile-cover.png')
							"
							alt="Profile Cover"
						/>
						<button
							@click="triggerHFInput('hfInputCover')"
							class="absolute top-2 right-2 z-10 bg-gray-900 bg-opacity-50 flex items-center justify-center p-1 rounded"
						>
							<span class="material-icons text-xl lg:text-2xl"
								>camera_alt</span
							>
						</button>
						<div
							class="profile__content absolute inset-0 flex flex-col justify-end items-center"
						>
							<div
								class="w-28 h-28 lg:w-60 lg:h-60 rounded-xl relative overflow-hidden -mb-8 lg:-mb-16"
							>
								<img
									class="w-full h-full object-cover object-center"
									:src="
										$user.avatar ||
										require('@/assets/images/profile-thumb.png')
									"
									alt="Profile Thumbnail"
								/>
								<button
									@click="triggerHFInput('hfInputProfile')"
									class="absolute bottom-1 right-2 bg-gray-900 bg-opacity-50 flex items-center justify-center p-1 rounded"
								>
									<span class="material-icons text-xl lg:text-2xl"
										>camera_alt</span
									>
								</button>
							</div>
						</div>
					</div>
					<div class="py-10"></div>
					<h4 class="font-bold text-xl lg:text-2xl 2xl:text-3xl">
						Edit Username
					</h4>
					<label for="username" class="sr-only"></label>
					<input
						type="text"
						id="username"
						name="username"
						:value="$user.username"
						class="w-full border-b-2 text-base lg:text-xl bg-primary border-secondary2 py-2"
					/>
					<p class="text-base mt-1">
						This will be displayed as
						<router-link
							:to="`/${$user.username}`"
							class="text-yellow-500"
							>https://phoria.tv/{{ $user.username }}</router-link
						>
					</p>
					<div class="py-5"></div>
					<h4 class="font-bold text-xl lg:text-2xl 2xl:text-3xl">
						Edit About Me
					</h4>
					<label for="bio" class="sr-only"></label>
					<textarea
						name="bio"
						id="bio"
						:value="$user.bio"
						placeholder="Write your bio here"
						class="w-full border-b-2 text-base lg:text-xl bg-primary border-secondary2 py-2"
					/>
					<p class="text-base mt-1">
						This will be displayed on your profile.
					</p>
					<div class="py-5"></div>
					<h4 class="font-bold text-xl lg:text-2xl 2xl:text-3xl">
						Location
					</h4>
					<label for="location" class="sr-only"></label>
					<input
						type="text"
						id="location"
						name="location"
						:value="$user.location"
						placeholder="Where are you?"
						class="w-full border-b-2 text-base lg:text-xl bg-primary border-secondary2 py-2"
					/>
					<p class="text-base mt-1">
						Let your subscribers know where you're based.
					</p>
				</div>
			</Flex>
		</div>
		<input
			type="file"
			ref="hfInputProfile"
			style="display: none"
			accept="image/x-png,image/gif,image/jpeg"
			@input="onFileChoosed($event, onProfileDataUrl)"
		/>
		<input
			type="file"
			ref="hfInputCover"
			style="display: none"
			accept="image/x-png,image/gif,image/jpeg"
			@input="onFileChoosed($event, onCoverDataUrl)"
		/>
	</div>
</template>

<script>
import UserbarUser from '@/components/UserbarUser'
import ImageUpload from '@/mixins/ImageUpload'
import { mapGetters, mapMutations } from 'vuex'
export default {
	name: 'UserSettings',
	mixins: [ImageUpload],
	components: {
		UserbarUser
	},
	computed: {
		...mapGetters('Auth', ['$user'])
	},
	methods: {
		...mapMutations('Users', ['updateUser']),
		...mapMutations('Auth', ['setAuthState']),
		handleUpdateUser(user) {
			this.updateUser(user)
			this.setAuthState({ user })
		},
		triggerHFInput(ref) {
			this.$refs[ref].click()
		},
		onCoverDataUrl(res) {
			this.handleUpdateUser({
				...this.$user,
				cover: res
			})
		},
		onProfileDataUrl(res) {
			this.handleUpdateUser({
				...this.$user,
				avatar: res
			})
		}
	}
}
</script>

<style lang='scss' scoped>
	.usettings {
		&__sidebar {
			@include on("lg") {
				width: 461px;
			}
		}
		&__tab {
			&::before {
				content: "";
				position: absolute;
				bottom: 0;
				left: 1rem;

				height: 3px;
				width: 65%;
				background-color: #3b3b3b;
			}
		}
		&__cover-img {
			max-height: 200px;
			@include on("lg") {
				max-height: 400px;
			}
		}
	}
</style>
