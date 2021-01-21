<template>
	<Container lg="10" mx-auto v-if="!isAuth">
		<div class="auth d-flex">
			<div class="auth__bg"></div>
			<div class="auth__content w-100">
				<div class="d-flex align-items-center justify-content-end mb-5">
					<h2 class="mr-5 mb-0 auth__title">PhoriaTV Sign Up</h2>
					<div class="actions">
						<Button
							to="/signup"
							radius="tl bl"
							:outlined="$route.path !== '/signup'"
							>Signup</Button
						>
						<Button
							to="/login"
							radius="tr br"
							:outlined="$route.path !== '/login'"
							>Login</Button
						>
					</div>
				</div>
				<router-view />
			</div>
		</div>
	</Container>
	<div v-else>
		<Header />
		<Container>
			<router-view />
		</Container>
	</div>
</template>

<script>

import { mapGetters } from 'vuex'
import Header from '../components/Header'

export default {
	name: 'auth',
	components: {
		Header
	},
	computed: {
		...mapGetters('Auth', ['isAuth'])
	}
}
</script>

<style lang='scss' scoped>
	.auth {
		position: relative;
		min-height: 100vh;
		&__bg {
			position: absolute;

			left: 50%;
			z-index: 0;
			width: 120%;
			height: 100%;
			opacity: 0.01;
			background-size: contain;
			background-repeat: no-repeat;
			transform: translate(-50%, 0);
			background-image: url(../assets/images/Phoria-Logo_Y2.png);
		}
		&__content {
			z-index: 1;
			padding: 190px 0;
		}
		&__title {
			font-size: 42px;
			font-weight: bold;
		}
	}
</style>
0
