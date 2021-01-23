<template>
	<div class="feed">
		<div class="py-16 bg-secondary">
			<Container v2>
				<TButton @click="createSubsModal = true"
					>Create Subscription</TButton
				>
				<TButton class="ml-8" @click="createPromoModal = true"
					>Manage Promotions</TButton
				>
				<CreatePost @create="(p) => posts.unshift(p)" class="mt-7" />
				<div class="posts mt-11">
					<Post
						v-for="(post, postI) in posts"
						:post="post"
						:key="postI"
						class="mb-7"
					/>
				</div>
			</Container>
		</div>
		<TModal
			class="modal"
			:showClose="true"
			:backgroundClose="true"
			:showing="createSubsModal"
			@close="createSubsModal = false"
		>
			<CreateSubscription @cancel="createSubsModal = false" />
		</TModal>
		<TModal
			class="modal"
			:showClose="true"
			:backgroundClose="true"
			:showing="createPromoModal"
			@close="createPromoModal = false"
		>
			<CreateCampaign @cancel="createPromoModal = false" />
		</TModal>
	</div>
</template>

<script>

import TModal from 'vue-tailwind-modal'
import Post from '@/components/Post'
import CreatePost from '@/components/CreatePost'
import CreateCampaign from '@/components/CreateCampaign'
import CreateSubscription from '@/components/CreateSubscription'

export default {
	name: 'Feed',
	components: {
		Post,
		TModal,
		CreatePost,
		CreateCampaign,
		CreateSubscription
	},
	data() {
		return {
			createSubsModal: false,
			createPromoModal: false,
			posts: [
				{
					text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore.. magna aliquyam
                  erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                  et ea rebum`,
					user: {
						fullName: 'RK Anik',
						username: '@rkanik',
						thumbnail: require('@/assets/images/profile-thumb.png'),
					},
					images: [require('@/assets/images/post.png')],
				}
			]
		}
	},
}
</script>
