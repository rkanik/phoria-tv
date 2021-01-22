<template>
	<div class="post bg-primary rounded relative p-10">
		<p class="absolute top-10 right-10 font-bold text-base text-cyan-accent">
			2 Days Ago
		</p>
		<Flex itemsEnd>
			<img
				class="w-28 h-28 rounded-xl object-cover object-contain"
				:src="post.thumbnail"
				alt="Profile thumbnail"
			/>
			<div class="ml-4">
				<h4 class="text-2xl font-bold">RK Anik</h4>
				<p class="text-2xl font-bold text-cyan-accent">@rkanik</p>
			</div>
		</Flex>
		<div class="bg-secondary rounded-xl text-xl p-3 mt-5">
			<p>
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
				nonumy eirmod tempor invidunt ut labore et dolore.. magna aliquyam
				erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
				et ea rebum
			</p>
		</div>
		<div class="relative mt-5">
			<img class="w-full rounded-xl" :src="post.image" alt="Post Image" />
			<Icon
				fill="none"
				name="Zoom"
				stroke="currentColor"
				class="absolute right-4 bottom-4 cursor-pointer h-10 w-10"
				@click="imagePreview = post.image"
			>
				<IconZoomIn />
			</Icon>
		</div>
		<ImagePreview v-model="imagePreview" :src="previewSrc" />
	</div>
</template>

<script>

// Icons
import IconZoomIn from '@/components/icons/IconZoomIn'

//Components
import ImagePreview from '@/components/ImagePreview'

export default {
	name: 'Post',
	components: {
		IconZoomIn,
		ImagePreview
	},
	props: {
		post: {
			type: Object,
			default: () => ({
				image: require('@/assets/images/post.png'),
				thumbnail: require('@/assets/images/profile-thumb.png'),
			})
		}
	},
	data() {
		return {
			imagePreview: false,
			previewSrc: false
		}
	}
}
</script>

<style lang='scss' scoped>
	.post {
	}
</style>
