<template>
	<div class="profile">
		<div class="relative">
			<div class="relative">
				<img
					class="profile__cover-img w-full object-cover object-center"
					src="@/assets/images/profile-cover.png"
					alt="Profile Cover"
				/>
			</div>
			<div
				class="profile__content absolute inset-0 flex flex-col justify-end items-center"
			>
				<h2
					class="text-xl md:text-5xl text-primary font-bold flex items-center mb-2"
				>
					Phoria Username
					<span class="material-icons text-xl ml-2 text-blue-300"
						>verified_user</span
					>
				</h2>
				<div
					class="w-32 h-32 lg:w-44 lg:h-44 2xl:w-60 2xl:h-60 rounded-xl relative overflow-hidden -mb-16 lg:-mb-18 2xl:-mb-28"
				>
					<img
						class="w-full h-full object-cover object-center"
						src="@/assets/images/profile-thumb.png"
						alt="Profile Thumbnail"
					/>
				</div>
			</div>
		</div>
		<Flex on="lg" class="bg-primary lg:pt-18 2xl:pt-0">
			<Flex
				items-center
				justify-center
				class="mt-20 2xl:mt-0 py-3 lg:justify-end flex-1 space-x-4 text-cyan-accent font-bold text-sm md:text-base lg:text-xl 2xl:text-3xl"
			>
				<div class="bg-secondary2 py-2 px-4 2xl:py-3 2xl:px-8">Top 10%</div>
				<div class="py-2 px-4 2xl:py-3 2xl:px-8">234 Posts</div>
				<div class="py-2 px-4 2xl:py-3 2xl:px-8">2.3k Likes</div>
			</Flex>
			<div class="hidden lg:block lg:w-48 2xl:w-80"></div>
			<Flex
				items-center
				justify-center
				class="profile__tab lg:mt-20 2xl:mt-0 lg:justify-start space-x-4 flex-1 relative font-bold text-base lg:text-xl 2xl:text-3xl"
			>
				<Flex items-center class="h-full py-3 cursor-pointer px-2 active">
					Feed
				</Flex>
				<Flex items-center class="h-full py-3 cursor-pointer px-2"
					>Videos</Flex
				>
				<Flex items-center class="h-full py-3 cursor-pointer px-2">
					Pictures
				</Flex>
				<Flex
					citems-center
					lass="h-full py-3 store cursor-pointer px-2 store"
				>
					Store
				</Flex>
			</Flex>
		</Flex>
		<div class="bg-secondary py-3 lg:py-10 text-center">
			<Container>
				<p class="text-sm lg:text-lg text-white mb-4 lg:mb-12">
					Last Online 2 Hours Ago
				</p>
				<Unfold class="mx-auto text-left" content="bg-secondary2">
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
					nonumy eirmod tempor invidunt ut labore et dolore.. magna
					aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
					duo dolores et ea rebum<br /><br />
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
					nonumy eirmod tempor invidunt ut labore et dolore.. magna
					aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
					duo dolores et ea rebum<br /><br />
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
					nonumy eirmod tempor invidunt ut labore et dolore.. magna
					aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
					duo dolores et ea rebum
				</Unfold>

				<Container v2 v-if="paidUser">
					<div
						class="my-8 flex lg:block justify-center space-x-4 lg:space-x-8"
					>
						<TButton size="lg" class="flex-1">Message</TButton>
						<TButton size="lg" class="flex-1">Send A Tip</TButton>
					</div>
					<Post :post="post" class="mb-7" />
				</Container>

				<div
					v-else
					class="text-left flex flex-col space-y-3 lg:space-y-6 mt-3 lg:mt-14"
				>
					<div
						class="subscription w-full mx-auto text-base lg:text-2xl font-bold text-white bg-primary p-4 rounded"
					>
						Support Phoria Girl 9000
					</div>
					<template v-for="sub in subscription.list">
						<div
							:key="sub.id"
							@click="subscription.selected = sub.id"
							class="subscription w-full mx-auto text-white bg-secondary2 p-4 rounded flex justify-between cursor-pointer"
							:class="{ active: sub.id === subscription.selected }"
						>
							<h3 class="text-base lg:text-2xl font-bold">
								{{ sub.title }}
							</h3>
							<p class="text-base lg:text-2xl font-light">
								{{ sub.price }}
							</p>
						</div>
					</template>
					<div class="text-center pt-2 lg:pt-4">
						<p class="text-white text-sm lg:text-xl font-light">
							Normal Subscription is $14.99 per month
						</p>
					</div>
				</div>
			</Container>
		</div>
	</div>
</template>

<script>
import Post from '@/components/Post'
import Unfold from '@/components/custom/Unfold'
import { mapGetters } from 'vuex'
export default {
	name: 'profile',
	components: {
		Post,
		Unfold,
	},
	data() {
		return {
			post: {
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
			},
			subscription: {
				selected: 1,
				list: [
					{
						id: 1,
						title: '1 Month Subscription',
						price: '$5.98 (SALE)'
					},
					{
						id: 2,
						title: '3 Months Subscription',
						price: '$33.73 (25% OFF)'
					},
					{
						id: 3,
						title: '6 Months Subscription',
						price: '$62.96 (30% OFF)'
					},
					{
						id: 4,
						title: '12 Months Subscription',
						price: '$116.92 (35% OFF)'
					}
				]
			}
		}
	},
	computed: {
		...mapGetters('Auth', ['$user']),
		paidUser() {
			console.log(this.$user)
			return (this.$user && this.$user.subscription) && this.$user.subscription.trim() !== ''
		}
	}
}
</script>

<style lang='scss' scoped>
	.profile {
		&__cover-img {
			max-height: 400px;
		}
		&__secure {
			fill: #00b9e8;
		}
		&__content {
			background: rgba(0, 0, 0, 0.25);
		}
		&__tab {
			> div {
				color: var(--yellow-1);
				border-bottom: 3px solid transparent;
				&.active {
					color: var(--cyan-1);
					border-color: white;
				}
				&.store {
					color: #8b8b8b;
				}
			}
		}
	}
	.unfold {
		max-width: 961px;
	}
	.subscription {
		max-width: 100%;
		@include on("md") {
			max-width: 90%;
		}
		@include on("lg") {
			max-width: 80%;
		}
		@include on("2xl") {
			max-width: 1255px;
		}
		&.active {
			background: linear-gradient(to bottom, #ffcf00, #8f7400);
		}
	}
</style>
