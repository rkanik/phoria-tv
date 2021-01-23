<template>
	<div class="landing">
		<div class="hero">
			<div class="relative overflow-hidden">
				<img
					class="hero__img w-full h-full object-cover object-center"
					src="../assets/images/landing-hero.png"
					alt="Landing Hero"
				/>
				<img
					class="hero__img2 absolute top-2/3 right-0 z-10"
					src="../assets/images/landing-hero2.png"
					alt="Landing Hero Right"
				/>
				<div
					class="hero__content absolute inset-0 flex items-center justify-center"
				>
					<h1
						class="text-3xl 2xl:text-7xl font-bold text-white text-center"
					>
						WELCOME <br />
						TO PHORIATV
					</h1>
				</div>
			</div>
		</div>
		<div class="services">
			<div class="services__inner">
				<div class="container mx-auto">
					<div class="grid grid-cols-1 lg:grid-cols-3 bg-secondary">
						<div class="service p-2 2xl:p-8 text-center mb-2 2xl:mb-0">
							<h4 class="text-primary text-xl 2xl:text-2xl font-bold mb-4 2xl:mb-8">
								A Place For All Your Exclusive Content
							</h4>
							<p class="block text-base 2xl:text-2xl font-light text-white 2xl:mt-9">
								Phoria hosts your images / videos private DMs. Only
								accessible after you get paid what you've want from your
								subscribers.
							</p>
						</div>
						<div class="service p-2 2xl:p-8 text-center mb-2 2xl:mb-0">
							<h4 class="text-primary text-xl 2xl:text-2xl font-bold mb-4 2xl:mb-8">
								Subscription Platform With Zero Fees
							</h4>
							<div class="flex items-center justify-center">
								<IconMoneyBillWave class="h-8 mt-1" />
								<IconLongArrowRight class="h-4 mx-8" />
								<IconOpenPerson class="h-7" />
							</div>
							<p class="block text-base 2xl:text-2xl font-light text-white 2xl:mt-9">
								We believe creators should earn more, and not feel
								cheated for their hard work.
							</p>
						</div>
						<div class="service p-2 2xl:p-8 text-center">
							<h4 class="text-primary text-xl 2xl:text-2xl font-bold mb-4 2xl:mb-8">
								A Place For All Your Exclusive Content
							</h4>
							<p class="block text-base 2xl:text-2xl font-light text-white 2xl:mt-9">
								Phoria hosts your images / videos private DMs. Only
								accessible after you get paid what you've want from your
								subscribers.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="text-center text-base 2xl:text-2xl text-white font-bold py-3">
				Interested in using our platform?
			</div>
		</div>
		<div class="subscribe bg-primary p-7 text-center text-white">
			<div class="container mx-auto">
				<h3 class="subscribe__title text-base 2xl:text-2xl text-white mx-auto">
					<router-link to="/signup" class="text-primary font-bold"
						>Sign up</router-link
					>
					to receive information. We're only allowing a few creators to
					join
					<a class="text-primary font-bold" href="#">exclusively</a>
					before we are in open beta.
				</h3>
				<form action="#" class="mt-10" @submit.prevent="onSubmit">
					<div class="subscribe__input-group mx-auto relative">
						<label for="name" class="sr-only">Name</label>
						<input
							id="name"
							type="text"
							placeholder="Enter Full Name"
							class="text-2xl w-full bg-secondary text-white p-3"
						/>
					</div>
					<div class="subscribe__input-group mx-auto relative mt-4">
						<label for="email" class="sr-only">Email</label>
						<input
							id="email"
							type="email"
							placeholder="Your Email"
							class="text-2xl w-full bg-secondary text-white p-3"
						/>
					</div>
					<div class="subscribe__input-group mx-auto relative mt-4">
						<label for="name" class="sr-only">Name</label>
						<input
							id="instagram"
							type="text"
							placeholder="Instagram Handle"
							class="text-2xl w-full bg-secondary text-white p-3"
						/>
					</div>
					<button
						class="bg-yellow-accent3 text-xl font-bold uppercase mt-4 py-3"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>

import IconOpenPerson from '../components/icons/IconOpenPerson'
import IconLongArrowRight from '../components/icons/IconLongArrowRight'
import IconMoneyBillWave from '../components/icons/IconMoneyBillWave'

export default {
	name: 'Landing',
	components: {
		IconMoneyBillWave,
		IconLongArrowRight,
		IconOpenPerson
	},
	methods: {
		onSubmit() {

		}
	}
}
</script>

<style lang='scss' scoped>
	.hero {
		&__img {
			min-height: 100px;
			@include on("2xl") {
				min-height: 512px;
			}
		}
		&__img2 {
			max-height: 150px;
         transform: translateY(-50%);
         @include on("2xl") {
            max-height: 681px;
			}
		}
		&__content {
			background-color: rgba(#161616, 0.9);
		}
	}
	.services {
		background-color: #2d2d2d;
	}
	.services__inner,
	.service {
		background-color: #1f1f1f;
	}
	.subscribe {
		&__title {
			max-width: 894px;
		}
		button,
		&__input-group {
			width: 347px;
		}
		input::placeholder {
			color: #727272;
		}
	}
</style>
