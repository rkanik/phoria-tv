<template>
	<span class="tooltrip">
		<div class="tooltrip__text">
			<span class="tooltrip__triangle" />
			<span>{{ text }}</span>
		</div>
		<slot />
	</span>
</template>

<script>

export default {
	name: 'TTooltrip',
	props: {
		text: {
			type: String,
			required: true
		}
	},
}
</script>
<style lang="scss">
	.tooltrip {
		position: relative;
		&:hover {
			.tooltrip__text {
				opacity: 1;
				visibility: visible;
				bottom: calc(100% + 16px);
			}
		}
		&__text,
		&__triangle {
			left: 47%;
			position: absolute;
			transform: translateX(-50%);
		}
		&__text {
			max-width: 200px;
			width: max-content;
			background: #616161;
			color: #ffffff;
			text-align: center;
			padding: 0.5rem 1rem;
			border-radius: 0.25rem;
			bottom: calc(100% + 12px);
			font-size: 0.95em;

			opacity: 0;
			visibility: hidden;
			transition: all 300ms ease-out;
		}
		&__triangle {
			height: 12px;
			width: 12px;
			transform: rotate(45deg);
			background-color: #616161;
			bottom: -6px;
		}
	}
</style>
