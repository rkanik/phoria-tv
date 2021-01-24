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
			:user="post.user"
			comment="Lorem ipsum dolor
					sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
					tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
					voluptua."
		/>
		<Comment
			class="mt-5"
			:user="post.user"
			comment="Lorem ipsum dolor
					sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
					tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
					voluptua."
		/>
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
			imagePreview: false,
		}
	}
}
</script>

<style lang='scss' scoped>
	.post {
	}
</style>
