<template>
	<div class="py-3 bg-secondary2">
		<Container>
			<div class="flex space-x-12 overflow-hidden">
				<div class="text-center w-max flex-none">
					<div class="relative rounded-3xl overflow-hidden">
						<img
							class="w-32 h-32 object-cover object-contain mx-auto"
							src="@/assets/images/profile-thumb.png"
							alt="Profile thumbnail"
						/>
						<div
							class="bg-black bg-opacity-30 flex cursor-pointer items-center justify-center absolute inset-0 font-bold text-6xl text-primary"
						>
							+
						</div>
					</div>
					<p class="mt-3 text-base lg:text-xl font-bold">Your Story</p>
				</div>
				<template v-for="num in 10">
					<div :key="num" class="text-center w-max flex-none">
						<img
							class="w-32 h-32 rounded-3xl object-cover object-contain mx-auto"
							src="@/assets/images/my-day.png"
							alt="User Story"
						/>
						<p class="mt-3 text-base lg:text-xl font-bold">
							User Stories
						</p>
					</div>
				</template>
			</div>
		</Container>
	</div>
</template>
