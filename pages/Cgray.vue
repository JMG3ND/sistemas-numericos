<template>
  <div>
    <h1 class="header">Código Gray</h1>
    <UCard class="card">
      <template #header>
        <div class="card__header">
          <div class="card__header__decresult">
            <Box>N<sub>10</sub> →</Box>
            <Box>{{ convertirADecimal(num1.join(""), 2) }}<sub>10</sub></Box>
          </div>
          <UButton @click="isOpen = !isOpen">Código</UButton>
        </div>
      </template>
      <div class="card__container">
        <div class="card__entrada">
          <div class="card__entrada__num">
            <UTooltip
              :text="Math.pow(2, num1.length - i - 1).toString()"
              v-for="(num, i) in num1"
            >
              <div
                @click="alternar(num1, i)"
                class="card__entrada__box"
                :class="num == 1 ? `text-on` : ``"
              >
                <Box>{{ num }}</Box>
              </div>
            </UTooltip>
          </div>
        </div>
        <div class="card__salida">
          <Box>Código GRAY: {{ result }}</Box>
        </div>
      </div>
    </UCard>
    <UModal v-model="isOpen">
      <a href="https://github.com/JMG3ND/sistemas-numericos?tab=readme-ov-file#c%C3%B3digo-gray">Código GitHub</a>
      <img style="border-radius: 10px;" src="/public/Codigo-Gray.png">
    </UModal>
  </div>
</template>

<script setup>
const isOpen = ref(false);
const num1 = ref(new Array(8).fill(0));
const alternar = (array, i) => (array[i] = !array[i] * 1);
const result = computed(() => cgray([...num1.value]))

//Código que calcula el código gray de un número binario
const XOR = (A, B) => (A && !B) || (!A && B);
function cgray (array) {
  let res = [array[0]];
  
  for (let i = 1; i < array.length - 1; i++) {
    res.push(XOR(array[i], array[i+1]) * 1);
  }
  
  res = res.slice(res.findIndex(v=> v!=0));
  return res.join('');
}
</script>

<style lang="scss" scoped>
.header {
  font-size: x-large;
  margin-bottom: 1rem;
}

.card {
  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__decresult {
      display: flex;
    }
  }

  &__entrada {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    &__num {
      display: flex;
      position: relative;
      gap: 1rem;
    }

    &__signo {
      display: flex;
      justify-content: center;
    }

    &__box {
      display: flex;
      position: relative;
      transition: top 0.1s ease, left 0.1s ease;
      left: 0;
      top: 0;
      &:hover {
        left: 5px;
        top: -5px;
        cursor: pointer;
      }

      &:active {
        left: 0;
        top: 0;
      }
    }
  }
}

.text-on {
  //text-shadow: 0px 0px 14px #11CE03;
  text-shadow: 0 0 20px #49ff18, 0 0 30px #49ff18, 0 0 40px #49ff18,
    0 0 55px #49ff18, 0 0 75px #49ff18, 0px 0px 19px rgba(17, 206, 3, 0);
}
</style>
