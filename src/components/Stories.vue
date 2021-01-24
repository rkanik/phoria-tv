<template>
	<div class="py-3 bg-secondary2">
		<Container>
			<Flex id="story" class="space-x-2 md:space-x-4 lg:space-x-8 2xl:space-x-12 overflow-hidden">
				<div class="text-center w-max flex-none">
					<div class="relative rounded lg:rounded-xl 2xl:rounded-3xl overflow-hidden">
						<img
							class="w-14 h-14 md:w-16 md:h-16 lg:w-24 lg:h-24 2xl:w-32 2xl:h-32 object-cover object-center mx-auto"
							src="@/assets/images/profile-thumb.png"
							alt="Profile thumbnail"
						/>
						<div
							class="bg-black bg-opacity-30 flex cursor-pointer items-center justify-center absolute inset-0 font-bold text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-primary"
						>
							+
						</div>
					</div>
					<p
						class="mt-1 2xl:mt-3 text-xs lg:text-base 2xl:text-xl md:font-bold"
					>
						Your Story
					</p>
				</div>
				<template v-for="num in 10">
					<div :key="num" class="text-center w-max flex-none">
						<img
							class="w-14 h-14 md:w-16 md:h-16 lg:w-24 lg:h-24 2xl:w-32 2xl:h-32 rounded lg:rounded-xl 2xl:rounded-3xl object-cover object-center mx-auto"
							src="@/assets/images/my-day.png"
							alt="User Story"
						/>
						<p
							class="mt-1 2xl:mt-3 text-xs lg:text-base 2xl:text-xl md:font-bold"
						>
							User Stories
						</p>
					</div>
				</template>
			</Flex>
		</Container>
	</div>
</template>
