<template>
	<div class="auth py-4 relative">
		<div class="auth__bg"></div>
		<perfect-scrollbar class="auth__ps inset-0 py-4 h-full w-full px-4">
			<div class="pt-4 md:pt-56 pb-4 md:pb-28 mx-auto lg:w-max">
				<Flex items-center class="justify-between md:justify-end">
					<h2 class="mr-6 text-xl 2xl:text-4xl font-bold">
						PhoriaTV
						{{ $route.path === "/signup" ? "Sign Up" : "Login" }}
					</h2>
					<div>
						<TButton
							to="/signup"
							size="sm"
							color="cyan"
							class="rounded-r-none"
							:outlined="$route.path !== '/signup'"
							>Sign Up</TButton
						>
						<TButton
							size="sm"
							to="/login"
							color="cyan"
							class="rounded-l-none border-l-0"
							:outlined="$route.path !== '/login'"
							>Log In</TButton
						>
					</div>
				</Flex>
				<div class="mt-16">
					<slot></slot>
				</div>
			</div>
		</perfect-scrollbar>
	</div>
</template>

<script>
export default {
	name: 'AuthLayout'
}
</script>

<style lang='scss' scoped>
	.auth {
		min-height: calc(100vh - 63.98px);
		&__bg {
			opacity: 0.025;
			background-size: contain;
			background-position: center;
			background-repeat: no-repeat;
			min-height: calc(100vh - 100px);
			background-image: url(../assets/images/Phoria-Logo_Y2.png);
		}
		&__ps {
			position: absolute !important;
		}
	}
</style>
