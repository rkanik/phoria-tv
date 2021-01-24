<template>
	<div class="home">
		<Container>
			<Flex on="lg" justify-between items-stretch class="pt-4 lg:pt-0">
				<Flex on="sm" items-center class="lg:py-4">
					<UserbarUser />
					<Flex
						items-end
						class="space-x-3 text-sm text-secondary sm:text-base font-light mt-3 sm:mt-0 sm:ml-8"
					>
						<p>0 Subs</p>
						<p>0 Following</p>
					</Flex>
				</Flex>
				<Flex
					items-center
					class="space-x-4 lg:space-x-8 text-sm md:text-base xl:text-xl font-bold text-primary"
				>
					<Flex
						items-center
						:to="tab.path"
						:key="tab.name"
						:class="{ active: $route.path === tab.path }"
						class="home__tab h-12 lg:h-full"
						v-for="tab in tabs"
						>{{ tab.name }}</Flex
					>
				</Flex>
			</Flex>
		</Container>
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
