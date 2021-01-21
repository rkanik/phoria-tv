<template>
	<header class="header">
		<div class="d-flex">
			<div class="header__logo">
				<img src="../assets/images/PhoriaTVLogo.png" alt="PhoriaTVLogo" />
			</div>
			<div class="header__title">PhoriaTV</div>
		</div>
	</header>
</template>

<script>
export default {
	name: 'navbar',

}
</script>

<style lang='scss' scoped>
	.header {
		height: 76px;
		padding: 0 36px;
		background-color: var(--dark-2);

		display: flex;
		align-items: center;
		justify-content: space-between;

		&__logo {
			background-color: #3e3e3e;
			border-top-left-radius: 11px;
			border-bottom-left-radius: 11px;
		}
		&__title {
			font-size: 30px;
			font-weight: 37px;
			padding: 0.2rem 1rem;
			background-color: #1f1f1f;
			border-top-right-radius: 11px;
			border-bottom-right-radius: 11px;
		}
	}
</style>
