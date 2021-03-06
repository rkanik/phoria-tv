<template>
	<div class="createp pt-3 md:pt-6 px-3 md:px-8 lg:px-12 bg-primary rounded">
		<Flex>
			<ProfileThumb
				class="w-12 h-12 md:w-16 md:h-16 rounded md:rounded-xl"
			/>
			<div class="ml-3 md:ml-6 flex-auto">
				<label for="createp-textarea" class="sr-only">Create Post</label>
				<textarea
					v-model="post.text"
					id="createp-textarea"
					placeholder="What do you want to share?"
					class="bg-primary w-full h-full text-base xl:text-xl"
				></textarea>
			</div>
		</Flex>
		<input
			multiple
			type="file"
			class="hidden"
			ref="createpInput"
			name="createp-input"
			accept="image/x-png,image/gif,image/jpeg"
			@input="onMediaChoose"
		/>
		<Flex class="mt-11 pb-3 space-x-4">
			<template v-for="(img, mi) in post.images">
				<div
					:key="mi"
					class="relative h-12 w-12 lg:w-24 lg:h-24"
					@click="post.images.splice(mi, 1)"
				>
					<img
						class="w-full h-full rounded lg:rounded-xl object-cover object-center"
						alt="Create post image"
						:src="img"
					/>
					<div
						class="absolute cursor-pointer -top-2 -right-2 h-5 w-5 rounded-full bg-red-400 flex items-center justify-center"
					>
						<Icon name="close" class="h-4 w-4">
							<IconClose />
						</Icon>
					</div>
				</div>
			</template>
		</Flex>
		<hr class="createp__hr" />
		<Flex justify-between class="flex-wrap">
			<Flex itemsCenter class="py-3">
				<TButton @click="onAddUpload" text size="sm">
					<i class="material-icons mr-2 text-xl">add_photo_alternate</i>
					Add Media
				</TButton>
				<hr class="createp__bhr mx-2 md:mx-4" />
				<TButton text size="sm">
					<i class="material-icons mr-2 text-xl">monetization_on</i>
					Create Tip Goal
				</TButton>
			</Flex>
			<div class="py-3">
				<TButton
					size="sm"
					color="primary"
					v-if="validPost"
					:disabled="!validPost"
					@click="$emit('create', post)"
					>Publish Post</TButton
				>
			</div>
		</Flex>
	</div>
</template>

<script>

// Icons
import IconClose from '@/components/icons/IconClose'

// Components
import ProfileThumb from '@/components/ProfileThumb'

export default {
	name: 'CreatePost',
	components: {
		ProfileThumb,
		IconClose
	},
	data() {
		return {
			post: {
				text: '',
				user: {
					fullName: 'RK Anik',
					username: '@rkanik',
					thumbnail: require('@/assets/images/profile-thumb.png'),
				},
				images: []
			}
		}
	},
	computed: {
		validPost() {
			return !!this.post.text || this.post.images.length > 0
		}
	},
	methods: {
		onAddUpload() {
			this.$refs.createpInput.click()
		},
		onMediaChoose(e) {
			const files = e.target.files
			if (files.length) {
				files.forEach(file => {
					if (!this.post.images.some(img => img.file.name === file.name)) {
						let reader = new FileReader();
						reader.addEventListener("load", () => {
							this.post.images.push(reader.result)
						}, false);
						reader.readAsDataURL(file);
					}
				})
			}
		},

	}
}
</script>

<style lang='scss' scoped>
	.createp {
		&__hr {
			height: 3px;
			border: none;
			background-color: #3b3b3b;
		}
		&__bhr {
			width: 2px;
			height: 22px;
			border: none;
			background-color: #3b3b3b;
		}
	}
</style>
