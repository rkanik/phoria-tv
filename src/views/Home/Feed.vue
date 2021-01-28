<template>
	<div class="feed">
		<div class="py-3 md:py-5 lg:py-16 bg-secondary">
			<Container v2>
				<Flex class="space-x-2 md:space-x-4 xl:space-x-6 md:block">
					<TButton @click="createSubsModal = true" class="flex-1"
						>Create Subscription</TButton
					>
					<TButton class="flex-1" @click="createPromoModal = true"
						>Manage Promotions</TButton
					>
				</Flex>
				<CreatePost
					@create="(p) => posts.unshift(p)"
					class="mt-3 md:mt-7"
				/>
				<div class="posts mt-4 md:mt-11">
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
			<CreateSubscription
				@create="onCreateSubsription"
				@cancel="createSubsModal = false"
			/>
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
import { mapGetters, mapMutations } from 'vuex'
import { getToast } from '../../markup/toast'

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
	computed: {
		...mapGetters('Auth', ['$user', '$isAuth'])
	},
	methods: {
		...mapMutations('Auth', ['setAuthState']),
		onCreateSubsription(subscription) {
			console.log(subscription, this.$user)
			if (this.$isAuth) {
				this.setAuthState({ user: { ...this.$user, subscription } })
				this.createSubsModal = false
			}
			else {
				this.$router.push('/login?ref=profile&action=create-subscription')
				this.$toast.open({
					type: 'warning',
					message: getToast('You are not logged in. Please login first to continue.')
				})
			}
		}
	}
}
</script>
