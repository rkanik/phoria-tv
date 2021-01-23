<template>
	<div class="home">
		<div class="container mx-auto">
			<Flex justify-between items-stretch>
				<Flex items-center class="py-2">
					<UserbarUser />
					<div
						class="flex items-end space-x-3 text-base lg:text-xl font-light ml-8"
					>
						<p>0 Subs</p>
						<p>0 Following</p>
					</div>
				</Flex>
				<Flex items-center class="space-x-8 text-xl font-bold text-primary">
					<Flex
						items-center
						:to="tab.path"
						:key="tab.name"
						:class="{ active: $route.path === tab.path }"
						class="home__tab h-full"
						v-for="tab in tabs"
						>{{ tab.name }}</Flex
					>
				</Flex>
			</Flex>
		</div>
		<UserStories />
		<router-view />
	</div>
</template>

<script>

// Components
import UserStories from '@/components/Stories'
import UserbarUser from '@/components/UserbarUser'

// Component object
export default {
	name: 'Home',
	components: {
		UserStories,
		UserbarUser,
	},
	data() {
		return {
			activeRoute: 'Feed',
			tabs: [
				{ name: 'My Feed', path: '/home' },
				{ name: 'Videos', path: '/home/videos' },
				{ name: 'Pictures', path: '/home/pictures' },
				{ name: 'Referrals', path: '/home/referrals' }
			]
		}
	},
	watch: {
		'$route': {
			deep: true,
			handler(v) {
				console.log(v.path)
				this.activeRoute = v.name
			}
		}
	},
}
</script>
<style lang="scss" scoped>
	.home {
		&__tab {
			position: relative;
			&::before {
				content: "";
				bottom: 0;
				left: 50%;
				width: 90%;
				height: 3px;
				position: absolute;
				transform: translateX(-50%);
				background-color: white;
				opacity: 0;
				visibility: hidden;
			}
			&.active {
				color: #00b9e8;
				font-weight: lighter;
				&::before {
					opacity: 1;
					visibility: visible;
					animation: w-0-to-90 500ms ease-in-out;
				}
			}
		}
	}
</style>
