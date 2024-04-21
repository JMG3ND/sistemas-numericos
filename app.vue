<template>
	<div class="screen">
		<aside>
			<div class="head">
				<UAvatar src="https://avatars.githubusercontent.com/u/63263243?v=4" alt="José Gutiérrez" size="lg"/>
				<a href="https://github.com/JMG3ND"><h1>José Gutiérez</h1></a>
			</div>
			<UVerticalNavigation :links="links" />
		</aside>
		<main>
			<NuxtPage />
		</main>
	</div>
</template>

<script setup>
const links = [{
	label:"Sistemas Numericos",
	to:"/",
	icon:"i-heroicons-home"
},{
    label:"Conversion entre sistemas",
    to:"/conversiones",
	icon:"i-heroicons-arrow-path-rounded-square"
},{
	label:"Multiplicación Binaria",
	to:"/multiplicacion",
	icon:"i-heroicons-calculator"
},{
	label:"Código Gray",
	to:"/cgray",
	icon:"i-heroicons-code-bracket-square"
},{
	label:"Código Haming",
	to:"/Chamming",
	icon:"i-heroicons-code-bracket-square"
}];
</script>

<style lang="scss" scoped>
*,*::after,*::before{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

aside, main{
	padding: 2rem 2rem 0 2rem;
}

main{
	height: 100%;
}

aside{
	position: sticky;
	top: 20px;
}

.screen{
	width: 100vw;
	height: 100vh;
	max-height: 100vh;
	display: grid;
	grid-template-columns: 1fr 3fr;
}

.head{
	padding-bottom: 2rem;
	display: flex;
	width: 100%;
	gap: 1rem;
	align-items: center;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>