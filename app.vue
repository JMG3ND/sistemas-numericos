<template>
  <div class="screen">
    <aside>
      <div class="aside">
        <div class="head">
          <div class="name">
            <UAvatar
              src="https://avatars.githubusercontent.com/u/63263243?v=4"
              alt="José Gutiérrez"
              size="lg"
            />
            <a href="https://github.com/JMG3ND"><h1>José Gutiérez</h1></a>
          </div>
          <UButton
            :icon="
              dark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
            "
            color="gray"
            variant="ghost"
            aria-label="Theme"
            @click="
              isDark = !isDark;
              dark = !dark;
            "
          />
        </div>
        <UVerticalNavigation :links="links" />
      </div>
    </aside>
    <main>
      <NuxtPage />
    </main>
    <UModal v-model="isOpen">
      <div style="padding: 1rem; border-radius: 10px;">
        <strong style="color: brown">Advertencia:</strong> Ver la página web
        desde PC, ya que me dio mucha flojera hacerla responsiva para teléfono.
        PD: Por ahí lo hago.
      </div></UModal
    >
  </div>
</template>

<script setup>
const isOpen = ref(true);
const links = [
  {
    label: "Sistemas Numéricos",
    to: "/",
    icon: "i-heroicons-home",
  },
  {
    label: "Conversion entre sistemas",
    to: "/conversiones",
    icon: "i-heroicons-arrow-path-rounded-square",
  },
  {
    label: "Operaciones Binaria",
    to: "/operaciones",
    icon: "i-heroicons-calculator",
  },
  {
    label: "Código Gray",
    to: "/cgray",
    icon: "i-heroicons-code-bracket-square",
  },
  {
    label: "Código Hamming",
    to: "/Chamming",
    icon: "i-heroicons-code-bracket-square",
  },
];

const colorMode = useColorMode();
const dark = ref(true);
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>

<style lang="scss" >
a {
  margin-left: 1rem;
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

aside,
main {
  padding: 2rem 2rem 0 2rem;
}

main {
  height: 100%;
}

.aside {
  position: sticky;
  top: 20px;
}

.screen {
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 3fr;
}

.head {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
}

.name {
  display: flex;
  width: 100%;
  gap: 1rem;
  align-items: center;
}
</style>
