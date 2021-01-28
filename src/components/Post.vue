<template>
	<div class="post bg-primary rounded relative p-3 lg:p-6 2xl:p-10">
		<p
			class="absolute top-3 right-3 lg:top-6 lg:right-6 2xl:top-6 2xl:right-10 font-bold text-xs lg:text-base text-cyan-accent"
		>
			2 Days Ago
		</p>
		<Flex itemsEnd>
			<img
				class="w-14 h-14 lg:w-20 lg:h-20 2xl:w-28 2xl:h-28 rounded lg:rounded-xl object-cover object-center"
				:src="post.user.thumbnail"
				alt="Profile thumbnail"
			/>
			<div class="ml-4">
				<h4 class="text-base lg:text-xl 2xl:text-2xl font-bold">
					{{ post.user.fullName }}
				</h4>
				<p
					class="text-base lg:text-xl 2xl:text-2xl font-bold text-cyan-accent"
				>
					{{ post.user.username }}
				</p>
			</div>
		</Flex>
		<div
			v-if="post.text"
			class="bg-secondary rounded lg:rounded-xl text-base lg:text-xl p-3 mt-3 lg:mt-5"
		>
			<p>{{ post.text }}</p>
		</div>
		<div class="relative mt-3 lg:mt-5">
			<img
				:src="img"
				:key="imgi"
				alt="Post Image"
				class="w-full rounded lg:rounded-xl"
				v-for="(img, imgi) in post.images"
			/>
			<button
				@click="imagePreview = post.images[0]"
				class="absolute right-2 bottom-0 lg:right-4 lg:bottom-4"
			>
				<i class="material-icons md:text-3xl 2xl:text-4xl">zoom_in</i>
			</button>
		</div>
		<Flex class="mt-5" justify-between items-center>
			<TButton size="md" class="text-cyan-accent hover:text-white">
				<span class="material-icons text-base lg:text-lg 2xl:text-2xl mr-2"
					>chat_bubble</span
				>
				<span>Send Tip</span>
			</TButton>
			<div class="font-bold text-base lg:text-2xl">22 Likes</div>
		</Flex>
		<Comment
			class="mt-5"
			:key="comIndex"
			:user="post.user"
			:comment="com.text"
			:ghost="com.ghost"
			v-for="(com, comIndex) in comments"
		/>
		<hr class="my-4 border-t-2 border-secondary" />
		<div>
			<textarea
				name="commnent"
				v-model="comment"
				placeholder="Type a message"
				class="w-full bg-transparent text-base 2xl:text-xl"
			/>
			<div class="flex justify-end space-x-4">
				<button
					@click="sendComment({ ghost: true })"
					class="bg-cyan-500 items-center flex space-x-2 py-1 lg:py-2 px-4"
				>
					<svg width="16.968" height="22.624">
						<path
							data-name="Icon awesome-ghost"
							d="M8.223 0A8.72 8.72 0 000 8.84V20.5a.707.707 0 001.207.5l1.1-.819a.707.707 0 01.95.1l1.9 2.136a.707.707 0 001 0l1.8-2.026a.707.707 0 011.057 0l1.8 2.026a.707.707 0 001 0l1.9-2.136a.707.707 0 01.95-.1l1.1.819a.707.707 0 001.207-.5V8.484A8.484 8.484 0 008.223 0zM5.656 9.9A1.414 1.414 0 117.07 8.484 1.414 1.414 0 015.656 9.9zm5.656 0a1.414 1.414 0 111.414-1.414A1.414 1.414 0 0111.312 9.9z"
							fill="#fff"
						/>
					</svg>
					<span>Ghost On</span>
					<svg width="16" height="16">
						<path
							data-name="Icon ionic-ios-information-circle"
							d="M8 0a8 8 0 108 8 8 8 0 00-8-8zm.731 11.692H7.262V6.15h1.469zm-.735-6.146a.768.768 0 11.8-.769.771.771 0 01-.8.769z"
							fill="#fff"
						/>
					</svg>
				</button>
				<button
					@click="sendComment"
					class="bg-secondary2 py-1 lg:py-2 px-4"
				>
					Send
				</button>
			</div>
		</div>
		<ImagePreview v-model="imagePreview" />
	</div>
</template>

<script>

//Components
import ImagePreview from '@/components/ImagePreview'
import Comment from '@/components/Comment'

export default {
	name: 'Post',
	components: {
		ImagePreview,
		Comment
	},
	props: {
		post: {
			type: Object,
			default: () => ({
				user: {}
			})
		}
	},
	data() {
		return {
			comment: '',
			imagePreview: false,
			comments: [
				{
					ghost: false,
					text: `Lorem ipsum dolor
					sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
					tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
					voluptua.`
				},
				{
					ghost: false,
					text: `Lorem ipsum dolor
					sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
					tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
					voluptua.`
				}
			]
		}
	},
	methods: {
		sendComment({ ghost }) {
			this.comments.push({
				ghost: ghost || false,
				text: this.comment
			})
			this.comment = ''
		}
	}
}
</script>

<style lang='scss' scoped>
	.post {
	}
</style>
