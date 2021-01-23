<template>
	<Flex items-center>
		<img
			class="w-16 h-16 rounded-xl object-cover object-contain"
			src="@/assets/images/profile-thumb.png"
			alt="Profile thumbnail"
		/>
		<div class="text-base lg:text-xl text-primary font-bold ml-4">
			<h2 class="flex items-center">
				Phoria Username
				<IconVerifiedUser class="icon__secure w-4 h-4 ml-2" />
			</h2>
			<h4 class="flex items-center">
				Phoria.tv/phoriausername
				<IconCopy
					@click="onCopyToClipboard('Phoria.tv/phoriausername')"
					class="icon__copy w-5 h-5 ml-4 cursor-pointer"
				/>
			</h4>
		</div>
	</Flex>
</template>

<script>
// Icons
import IconCopy from '@/components/icons/IconCopy'
import IconVerifiedUser from '@/components/icons/IconVerifiedUser'
export default {
   name: 'UserbarUser',
   components: {
		IconCopy,
		IconVerifiedUser,
	},
	methods: {
		onCopyToClipboard(text) {
			var textArea = document.createElement("textarea");
			textArea.value = text;

			// Avoid scrolling to bottom
			textArea.style.top = "0";
			textArea.style.left = "0";
			textArea.style.position = "fixed";

			document.body.appendChild(textArea);
			textArea.focus();
			textArea.select();

			try {
				document.execCommand('copy');
				this.$toast.open('Text copied to clipboard!')
			} catch (err) {
				this.$toast.open({
					type: 'error',
					message: 'Failed to copy the text'
				})
			}
			document.body.removeChild(textArea);
		}
	}
}
</script>

<style lang='scss' scoped>
	.icon {
		&__secure {
			fill: #00b9e8;
		}
		&__copy {
			stroke: white;
		}
	}
</style>
