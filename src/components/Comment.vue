<template>
	<div>
		<Flex on="sm">
			<div
				v-if="!ghost"
				class="float-left sm:float-none mr-3 lg:mr-5 relative h-9 w-9 lg:h-11 lg:w-11 rounded-full flex-none overflow-hidden"
			>
				<img
					:src="user.thumbnail"
					class="w-full h-full object-cover object-center"
				/>
			</div>
			<div>
				<p class="text-base lg:text-lg">
					<a href="#" class="font-bold">{{
						ghost ? "@Anonymous" : user.username
					}}</a>
					{{ comment }}
				</p>
			</div>
		</Flex>
		<Flex justify-end class="space-x-4 mt-2">
			<p class="text-base lg:text-xl text-cyan-accent">Tipped $5.00</p>
			<button class="text-base lg:text-xl text-white">Like</button>
			<button class="text-base lg:text-xl text-white">Reply</button>
			<p class="text-base lg:text-xl text-gray-400">Yesterday</p>
		</Flex>
	</div>
</template>

<script>
export default {
	name: 'Comment',
	props: {
		user: {
			username: {
				type: String,
				required: true
			},
			thumbnail: {
				type: String,
				required: true
			}
		},
		ghost: Boolean,
		comment: {
			type: String,
			required: true
		}
	}
}
</script>
