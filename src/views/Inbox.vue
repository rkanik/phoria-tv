<template>
	<div class="inbox">
		<Container>
			<UserbarUser class="inbox__userbar py-2" />
		</Container>
		<Flex class="relative">
			<aside
				class="absolute lg:relative inset-y-0 left-0 w-14 bg-secondary lg:bg-transparent z-50 lg:w-96 border-t-4 lg:border-r-4 border-secondary2 py-4 px-1 lg:p-4 flex-shrink-0 overflow-hidden flex flex-col items-center"
			>
				<Flex
					items-center
					class="bg-blue-500 rounded p-1 lg:p-2 mb-3 cursor-pointer"
				>
					<img
						src="../assets/images/profile-thumb.png"
						alt="User profile pic"
						class="h-8 w-8 lg:h-14 lg:w-14 rounded-full lgrounded object-center object-cover"
					/>
					<div class="ml-4 hidden lg:block">
						<h4 class="font-bold text-lg">UserName</h4>
						<p class="text-secondary">Lorem ipsum dolor sit amet, co..</p>
					</div>
				</Flex>
				<Flex items-center class="rounded p-1 lg:p-2 mb-3 cursor-pointer">
					<img
						src="../assets/images/profile-thumb.png"
						alt="User profile pic"
						class="h-8 w-8 lg:h-14 lg:w-14 rounded-full lgrounded object-center object-cover"
					/>
					<div class="ml-4 hidden lg:block">
						<h4 class="font-bold text-lg">UserName</h4>
						<p class="text-secondary">Lorem ipsum dolor sit amet, co..</p>
					</div>
				</Flex>
				<Flex items-center class="rounded p-1 lg:p-2 mb-3 cursor-pointer">
					<img
						src="../assets/images/profile-thumb.png"
						alt="User profile pic"
						class="h-8 w-8 lg:h-14 lg:w-14 rounded-full lgrounded object-center object-cover"
					/>
					<div class="ml-4 hidden lg:block">
						<h4 class="font-bold text-lg">UserName</h4>
						<p class="text-secondary">Lorem ipsum dolor sit amet, co..</p>
					</div>
				</Flex>
			</aside>
			<div
				class="pl-14 lg:pl-0 relative border-t-4 flex-auto border-secondary2"
			>
				<perfect-scrollbar :style="`height:${inboxHeight}px`">
					<div class="px-3 lg:px-12 py-4">
						<Flex flex-row-reverse class="mb-8">
							<img
								src="../assets/images/profile-thumb.png"
								alt="User profile pic"
								class="h-7 lg:h-14 w-7 lg:w-14 rounded object-center object-cover flex-shrink-0"
							/>
							<div class="mr-4">
								<img
									src="../assets/images/video1.png"
									class="w-96 mb-4 rounded shadow ml-auto"
								/>
								<p
									class="p-2 lg:p-4 bg-secondary2 rounded shadow text-sm lg:text-base"
								>
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
								class="h-7 lg:h-14 w-7 lg:w-14 rounded object-center object-cover flex-shrink-0"
							/>
							<div class="ml-4">
								<img
									src="../assets/images/profile-thumb.png"
									class="w-96 mb-4 rounded shadow"
								/>
								<p
									class="p-2 lg:p-4 bg-secondary2 rounded shadow text-sm lg:text-base"
								>
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
					class="inbox__bottom py-2 px-4 bg-primary border-t-4 border-secondary2"
				>
					<input
						placeholder="Type your message here"
						class="w-full bg-primary text-lg py-2"
					/>
					<Flex itemsCenter class="py-3 flex-wrap">
						<TButton outlined text size="sm" class="mr-4">
							<i class="material-icons mr-0 sm:mr-2 md-18"
								>insert_photo</i
							>
							<span class="hidden sm:block">Add Media</span>
						</TButton>
						<TButton @click="tripModal = true" outlined text size="sm">
							<i class="material-icons mr-1 sm:mr-2 md-18"
								>monetization_on</i
							>
							Send a tip
						</TButton>
						<TButton size="sm" class="ml-auto px-3 md:px-8">
							Send
							<i class="material-icons ml-2 text-base">send</i>
						</TButton>
					</Flex>
				</div>
			</div>
		</Flex>
		<TModal
			class="modal"
			:showClose="true"
			:backgroundClose="true"
			:showing="tripModal"
			@close="tripModal = false"
		>
			<SendTip @cancel="tripModal = false" />
		</TModal>
	</div>
</template>

<script>
import TModal from 'vue-tailwind-modal'
import SendTip from '@/components/SendTip'
import UserbarUser from '@/components/UserbarUser'
export default {
	name: 'Inbox',
	components: {
		TModal,
		SendTip,
		UserbarUser,
	},
	data() {
		return {
			tripModal: false,
			inboxHeight: null
		}
	},
	mounted() {
		setTimeout(() => {
			this.inboxHeight = this.getHeight('.default-layout__ps') - [
				'.inbox__bottom', '.inbox__userbar'
			].reduce((height, cls) => height + this.getHeight(cls), 0)
		}, 300);
	},
	methods: {
		getHeight(cls) {
			return document
				.querySelector(cls)
				?.getBoundingClientRect()
				.height
		}
	}
}
</script>
