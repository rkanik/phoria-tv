<template>
	<header class="header py-3">
		<Container class="px-2 sm:px-0">
			<Flex justify-between items-center>
				<router-link to="/">
					<Flex
						class="bg-secondary2 rounded 2xl:rounded-xl overflow-hidden"
					>
						<img
							class="w-10 h-10 2xl:w-16 2xl:h-16"
							src="../assets/images/PhoriaTVLogo.png"
							alt="PhoriaTVLogo"
						/>
						<div
							class="header__title text-base 2xl:text-3xl text-white font-bold flex items-center px-2 2xl:px-3"
						>
							PhoriaTV
						</div>
					</Flex>
				</router-link>
				<Flex class="hidden sm:hidden md:flex">
					<router-link to="/home">
						<IconHome class="mr-11 w-9 h-9 fill-white cursor-pointer" />
					</router-link>
					<IconExplore class="mr-11 w-10 h-10 fill-white cursor-pointer" />
					<router-link to="/user/settings">
						<IconSettings
							class="mt-1 w-8 h-8 stroke-white cursor-pointer"
						/>
					</router-link>
				</Flex>
				<MobileMenuButton v-model="menu" />
			</Flex>
			<div v-if="menu" class="md:hidden pt-5 space-y-1">
				<Flex
					items-center
					to="/home"
					class="px-4 py-2 text-base"
					role="menuitem"
				>
					<i class="material-icons">home</i>
					<span class="ml-3">Home</span>
				</Flex>
				<Flex items-center to="/explore" class="px-4 py-2 text-base">
					<i class="material-icons">explore</i>
					<span class="ml-3">Explore</span>
				</Flex>
				<Flex items-center to="/user/settings" class="px-4 py-2 text-base">
					<i class="material-icons">settings</i>
					<span class="ml-3">Settings</span>
				</Flex>
			</div>
		</Container>
	</header>
</template>

<script>

// Icons
import IconHome from '@/components/icons/IconHomeSharp';
import IconExplore from '@/components/icons/IconExplore';
import IconSettings from '@/components/icons/IconSettings';

// Components
import MobileMenuButton from '@/components/MobileMenuButton';


export default {
	name: 'navbar',
	components: {
		IconHome,
		IconExplore,
		IconSettings,
		MobileMenuButton
	},
	data() {
		return {
			menu: false
		}
	}
}
</script>

<style lang='scss' scoped>
	.header {
		background-color: var(--dark-2);
		&__logo {
			background-color: #3e3e3e;
		}
		&__title {
			background-color: #1f1f1f;
		}
	}
</style>
