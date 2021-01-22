<template>
	<header class="header py-3">
		<div class="container mx-auto">
			<div class="flex justify-between items-center">
				<router-link to="/">
					<div class="flex">
						<div class="header__logo rounded-xl rounded-r-none relative">
							<img
								class="w-full"
								src="../assets/images/PhoriaTVLogo.png"
								alt="PhoriaTVLogo"
							/>
						</div>
						<div
							class="header__title text-3xl text-white font-bold flex items-center px-2 rounded-xl rounded-l-none"
						>
							PhoriaTV
						</div>
					</div>
				</router-link>
				<div class="flex">
					<router-link to="/home">
						<IconHome class="mr-11 w-9 h-9 fill-white cursor-pointer" />
					</router-link>
					<IconExplore class="mr-11 w-10 h-10 fill-white cursor-pointer" />
					<IconSettings class="mt-1 w-8 h-8 stroke-white cursor-pointer" />
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import IconHome from '../components/icons/IconHomeSharp';
import IconExplore from '../components/icons/IconExplore';
import IconSettings from '../components/icons/IconSettings';
export default {
	name: 'navbar',
	components: {
		IconHome,
		IconExplore,
		IconSettings
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
