<template>
	<div class="post bg-primary rounded relative p-10">
		<p class="absolute top-10 right-10 font-bold text-base text-cyan-accent">
			2 Days Ago
		</p>
		<Flex itemsEnd>
			<img
				class="w-28 h-28 rounded-xl object-cover object-center"
				:src="post.user.thumbnail"
				alt="Profile thumbnail"
			/>
			<div class="ml-4">
				<h4 class="text-2xl font-bold">{{ post.user.fullName }}</h4>
				<p class="text-2xl font-bold text-cyan-accent">
					{{ post.user.username }}
				</p>
			</div>
		</Flex>
		<div v-if="post.text" class="bg-secondary rounded-xl text-xl p-3 mt-5">
			<p>{{ post.text }}</p>
		</div>
		<div class="relative mt-5">
			<img
				:src="img"
				:key="imgi"
				alt="Post Image"
				class="w-full rounded-xl"
				v-for="(img, imgi) in post.images"
			/>
			<Icon
				name="zoom"
				class="absolute right-4 bottom-4 cursor-pointer h-10 w-10"
				@click="imagePreview = post.images[0]"
			>
				<IconZoomIn />
			</Icon>
		</div>
		<Flex class="mt-5" justify-between items-center>
			<TButton size="md" class="text-cyan-accent hover:text-white">
				<Icon
					name="bubble"
					fill="#00B9E8"
					stroke="none"
					class="w-5 h-5 mr-2 hover:fill-white"
				>
					<IconBubble />
				</Icon>
				Send Tip
			</TButton>
			<div class="font-bold text-2xl">22 Likes</div>
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

// Icons
import IconZoomIn from '@/components/icons/IconZoomIn'
import IconBubble from '@/components/icons/IconBubble'

//Components
import ImagePreview from '@/components/ImagePreview'
import Comment from '@/components/Comment'

export default {
	name: 'Post',
	components: {
		IconZoomIn,
		IconBubble,
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
