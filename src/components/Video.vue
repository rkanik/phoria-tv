<template>
	<div class="video rounded-xl bg-primary p-2">
		<div class="h-52 rounded-xl relative overflow-hidden">
			<img
				:src="video.thumbnail"
				:alt="video.title"
				class="video__thumbnail w-full object-cover object-center"
			/>
			<Flex v-if="!modal" center class="absolute inset-0">
				<img
					@click="modal = true"
					src="@/assets/images/play-circle.png"
					class="video__play w-14 h-14 absolute cursor-pointer"
				/>
			</Flex>
			<Flex
				v-else
				center
				v-on-clickaway="() => (modal = false)"
				class="video__modal absolute inset-0 z-10"
			>
				<Flex center class="bg-yellow-accent2 flex-1 py-2">
					<span class="font-bold text-black text-base"
						>Open for {{ video.price }}</span
					>
					<Icon
						name="box"
						class="h-10 w-16 mx-2"
						fill="black"
						stroke="none"
					>
						<IconBox />
					</Icon>
					<span class="font-bold text-black text-base"
						>Video {{ video.duration }}</span
					>
				</Flex>
			</Flex>
			<span class="absolute bottom-3 right-3">
				<strong>HD</strong>
				{{ video.duration }}
			</span>
		</div>
		<div>
			<h4 class="text-xl font-bold mt-3">{{ video.title }}</h4>
			<p class="text-base">{{ video.date }}</p>
		</div>
	</div>
</template>

<script>
import { directive as onClickaway } from 'vue-clickaway';
import IconBox from '@/components/icons/IconBox';
export default {
	name: 'Video',
	components: {
		IconBox
	},
	directives: {
		onClickaway,
	},
	props: {
		video: {
			thumbnail: {
				type: String,
				required: true
			},
			title: {
				type: String,
				required: true
			},
			date: {
				type: String,
				required: true
			},
			duration: {
				type: String,
				required: true
			},
			price: {
				type: String,
				required: true
			},
		}
	},
	data() {
		return {
			modal: false
		}
	}
}
</script>
<style lang="scss">
	.video {
		&__play {
			transition: transform 300ms ease-in-out;
			&:hover {
				transform: scale(1.2);
			}
		}
		&__modal {
			background: #646464;
			background: linear-gradient(to bottom, #646464, #004a5d);
		}
	}
</style>
