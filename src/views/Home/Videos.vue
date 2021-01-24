<template>
	<div class="videos bg-secondary">
		<Container>
			<div class="py-3 lg:py-12 font-bold text-xl lg:text-2xl 2xl:text-2xl">
				<h4>Video Feed</h4>
			</div>
			<div
				class="grid gap-3 sm:gap-5 md:gap-8 2xl:gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 pb-12"
			>
				<Video v-for="(video, vI) in videos" :video="video" :key="vI" />
			</div>
		</Container>
	</div>
</template>

<script>
import Video from '@/components/Video'
export default {
	name: 'videos',
	components: {
		Video
	},
	data() {
		return {
			videos: [
				{
					thumbnail: require('@/assets/images/video1.png'),
					title: 'Phoria Girl 9000',
					date: '7/5 3:30pm',
					duration: '3:12',
					price: '$10',
				},
				{
					thumbnail: require('@/assets/images/video2.png'),
					title: 'CuteChick93',
					date: '7/5 3:30pm',
					duration: '3:12',
					price: '$10',
				},
				{
					thumbnail: require('@/assets/images/video1.png'),
					title: 'Phoria Girl 9000',
					date: '7/5 3:30pm',
					duration: '3:12',
					price: '$10',
				},
				{
					thumbnail: require('@/assets/images/video2.png'),
					title: 'CuteChick93',
					date: '7/5 3:30pm',
					duration: '3:12',
					price: '$10',
				},
				{
					thumbnail: require('@/assets/images/video1.png'),
					title: 'Phoria Girl 9000',
					date: '7/5 3:30pm',
					duration: '3:12',
					price: '$10',
				},
				{
					thumbnail: require('@/assets/images/video2.png'),
					title: 'CuteChick93',
					date: '7/5 3:30pm',
					duration: '3:12',
					price: '$10',
				},
				{
					thumbnail: require('@/assets/images/video1.png'),
					title: 'Phoria Girl 9000',
					date: '7/5 3:30pm',
					duration: '3:12',
					price: '$10',
				},
				{
					thumbnail: require('@/assets/images/video2.png'),
					title: 'CuteChick93',
					date: '7/5 3:30pm',
					duration: '3:12',
					price: '$10',
				}
			]
		}
	}
}
</script>

<style lang='scss' scoped>
	.videos {
	}
</style>
