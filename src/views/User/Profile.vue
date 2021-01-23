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
				<h2 class="text-5xl text-primary font-bold flex items-center mb-2">
					Phoria Username
					<IconVerifiedUser class="profile__secure w-9 h-9 ml-2" />
				</h2>
				<div class="w-60 h-60 rounded-xl relative overflow-hidden -mb-28">
					<img
						class="w-full h-full object-cover object-center"
						src="@/assets/images/profile-thumb.png"
						alt="Profile Thumbnail"
					/>
				</div>
			</div>
		</div>
		<div class="bg-primary flex">
			<ul
				class="py-3 flex flex-1 items-center justify-end space-x-4 text-cyan-accent font-bold text-base lg:text-3xl"
			>
				<li class="bg-secondary2 py-3 px-8">Top 10%</li>
				<li class="py-3 px-8">234 Posts</li>
				<li class="py-3 px-8">2.3k Likes</li>
			</ul>
			<div class="w-80"></div>
			<ul
				class="profile__tab flex items-center justify-start space-x-4 flex-1 relative font-bold text-base lg:text-3xl"
			>
				<li class="h-full flex items-center cursor-pointer px-2 active">
					Feed
				</li>
				<li class="h-full flex items-center cursor-pointer px-2">Videos</li>
				<li class="h-full flex items-center cursor-pointer px-2">
					Pictures
				</li>
				<li class="h-full flex items-center cursor-pointer px-2 store">
					Store
				</li>
			</ul>
		</div>
		<div class="bg-secondary py-10 text-center">
			<div class="container mx-auto">
				<p class="text-lg text-white mb-12">Last Online 2 Hours Ago</p>
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

				<div class="text-left flex flex-col space-y-6 mt-14">
					<div
						class="subscription w-full mx-auto text-2xl font-bold text-white bg-primary p-4 rounded"
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
							<h3 class="text-2xl font-bold">{{ sub.title }}</h3>
							<p class="text-2xl font-light">{{ sub.price }}</p>
						</div>
					</template>
					<div class="text-center pt-4">
						<p class="text-white text-xl font-light">
							Normal Subscription is $14.99 per month
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import IconVerifiedUser from '@/components/icons/IconVerifiedUser'
import Unfold from '@/components/custom/Unfold'
export default {
	name: 'profile',
	components: {
		Unfold,
		IconVerifiedUser
	},
	data() {
		return {
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
			li {
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
		max-width: 1255px;
		&.active {
			background: linear-gradient(to bottom, #ffcf00, #8f7400);
		}
	}
</style>
