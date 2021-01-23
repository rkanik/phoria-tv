<template>
	<div class="Inbox">
		<Container>
			<UserbarUser class="py-2" />
		</Container>
		<Flex>
			<aside
				class="w-96 border-t-4 border-r-4 border-secondary2 p-4 flex-shrink-0"
			>
				<Flex
					items-center
					class="bg-blue-500 rounded p-2 mb-3 cursor-pointer"
				>
					<img
						src="../assets/images/profile-thumb.png"
						alt="User profile pic"
						class="h-14 w-14 rounded object-center object-cover"
					/>
					<div class="ml-4">
						<h4 class="font-bold text-lg">UserName</h4>
						<p class="text-secondary">Lorem ipsum dolor sit amet, co..</p>
					</div>
				</Flex>
				<Flex items-center class="rounded p-2 mb-3 cursor-pointer">
					<img
						src="../assets/images/profile-thumb.png"
						alt="User profile pic"
						class="h-14 w-14 rounded object-center object-cover"
					/>
					<div class="ml-4">
						<h4 class="font-bold text-lg">UserName</h4>
						<p class="text-secondary">Lorem ipsum dolor sit amet, co..</p>
					</div>
				</Flex>
			</aside>
			<div class="relative border-t-4 flex-auto border-secondary2">
				<perfect-scrollbar
					:style="`height: calc(${inboxHeight}px - 210px)`"
				>
					<div class="px-12 py-4">
						<Flex flex-row-reverse class="mb-8">
							<img
								src="../assets/images/profile-thumb.png"
								alt="User profile pic"
								class="h-14 w-14 rounded object-center object-cover"
							/>
							<div class="mr-4">
								<img
									src="../assets/images/video1.png"
									class="w-96 mb-4 rounded shadow ml-auto"
								/>
								<p class="p-4 bg-secondary2 rounded shadow text-base">
									Lorem ipsum dolor sit, amet consectetur adipisicing
									elit. Cum perferendis a quas consequatur doloribus
									illum, quo aut ipsum aliquid ex, adipisci vel soluta
									quod natus eveniet nemo voluptatum perspiciatis
									cumque?
								</p>
								<p class="text-sm text-secondary mt-1 text-right">
									3:32 pm 6/27/2020
								</p>
							</div>
						</Flex>
						<Flex class="mb-8">
							<img
								src="../assets/images/profile-thumb.png"
								alt="User profile pic"
								class="h-14 w-14 rounded object-center object-cover"
							/>
							<div class="ml-4">
								<img
									src="../assets/images/profile-thumb.png"
									class="w-96 mb-4 rounded shadow"
								/>
								<p class="p-4 bg-secondary2 rounded shadow text-base">
									Lorem ipsum dolor sit, amet consectetur adipisicing
									elit. Cum perferendis a quas consequatur doloribus
									illum, quo aut ipsum aliquid ex, adipisci vel soluta
									quod natus eveniet nemo voluptatum perspiciatis
									cumque?
								</p>
								<p class="text-sm text-secondary mt-1">
									3:32 pm 6/27/2020
								</p>
							</div>
						</Flex>
					</div>
				</perfect-scrollbar>
				<div
					class="py-2 px-4 bg-primary border-t-4 border-secondary2"
				>
					<input
						placeholder="Type your message here"
						class="w-full bg-primary text-lg py-2"
					/>
					<Flex itemsCenter class="py-3">
						<TButton outlined text size="sm" class="mr-4">
							<i class="material-icons mr-2 md-18">insert_photo</i>
							Add Media
						</TButton>
						<TButton outlined text size="sm">
							<i class="material-icons mr-2 md-18">monetization_on</i>
							Send a tip
						</TButton>
						<TButton size="sm" class="ml-auto px-8">
							Send
							<i class="material-icons ml-2 text-base">send</i>
						</TButton>
					</Flex>
				</div>
			</div>
		</Flex>
	</div>
</template>

<script>
import UserbarUser from '@/components/UserbarUser'
export default {
	name: 'Inbox',
	components: {
		UserbarUser
	},
	data() {
		return {
			inboxHeight: 0
		}
	},
	mounted() {
		this.inboxHeight = document
			.querySelector('.default-layout__ps')
			?.getBoundingClientRect()
			.height
	}
}
</script>
