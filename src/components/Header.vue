<template>
	<header class="header py-3 shadow z-10">
		<Container class="px-2">
			<Flex items-center class="sm:justify-between">
				<router-link to="/" class="mr-auto sm:mr-0">
					<Flex
						class="bg-secondary2 rounded 2xl:rounded-xl overflow-hidden"
					>
						<img
							class="w-8 h-8 lg:w-12 lg:h-12 2xl:w-16 2xl:h-16"
							src="../assets/images/PhoriaTVLogo.png"
							alt="PhoriaTVLogo"
						/>
						<div
							class="header__title text-base lg:text-2xl 2xl:text-3xl text-white font-bold flex items-center px-2 2xl:px-3"
						>
							PhoriaTV
						</div>
					</Flex>
				</router-link>
				<Flex class="hidden sm:flex space-x-6 lg:space-x-8 2xl:space-x-10">
					<template v-for="(nav, navIndex) in navs">
						<router-link
							:to="nav.path"
							:key="navIndex"
							v-if="nav.type === 'link'"
							class="relative"
						>
							<i
								class="material-icons md:text-2xl lg:text-3xl 2xl:text-4xl"
								>{{ nav.icon }}</i
							>
						</router-link>
						<NotifyDropdown
							:nav="nav"
							:key="navIndex"
							v-else-if="nav.type === 'dropdown'"
						/>
					</template>
				</Flex>
				<NotifyDropdown :nav="notifyDropdown" class="sm:hidden mr-4" />
				<MobileMenuButton v-model="menu" />
			</Flex>
			<div v-if="menu" class="md:hidden pt-5 space-y-1">
				<template v-for="(nav, navIndex) in mobileNavs">
					<Flex
						items-center
						:to="nav.path"
						:key="navIndex"
						class="px-4 py-2 text-base"
					>
						<i class="material-icons">{{ nav.icon }}</i>
						<span class="ml-3">{{ nav.name }}</span>
					</Flex>
				</template>
			</div>
		</Container>
	</header>
</template>

<script>

// Vuex
import { mapGetters } from 'vuex'

// Components
import MobileMenuButton from '@/components/MobileMenuButton';
import NotifyDropdown from '@/components/NotifyDropdown';

const navs = [
	{
		type: 'link',
		path: '/home',
		name: 'Home',
		icon: 'home'
	},
	{
		type: 'link',
		path: '/explore',
		icon: 'explore',
		name: 'Explore'
	},
	{
		type: 'link',
		path: '/user/settings',
		icon: 'settings',
		name: 'Settings'
	}
]

const inboxNav = {
	type: 'link',
	path: '/direct/inbox',
	icon: 'mark_email_unread',
	name: 'Inbox'
}

export default {
	name: 'navbar',
	components: {
		NotifyDropdown,
		MobileMenuButton
	},
	data() {
		return {
			menu: false,
			notifyDropdown: {
				type: 'dropdown',
				badge: '9+',
				icon: 'notifications_active'
			},
			mobileNavs: [...navs],
			navs: navs,

		}
	},
	created() {
		if (this.$isAuth) {
			this.navs.splice(1, 0, {
				type: 'link',
				path: `/${this.$user.username}`,
				icon: 'contact_mail'
			}, inboxNav, { ... this.notifyDropdown })
			this.mobileNavs.push(inboxNav)
		}
	},
	computed: {
		...mapGetters('Auth', ['$isAuth', '$user']),
	},
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
