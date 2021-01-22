<template>
	<div class="default-layout">
		<Header />
		<main>
			<router-view />
		</main>
	</div>
</template>

<script>

import { mapGetters } from 'vuex'
import Header from '../components/Header'

export default {
	name: 'DefaultLayout',
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
