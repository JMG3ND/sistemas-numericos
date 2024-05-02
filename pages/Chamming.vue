<template>
  <div>
    <h1 class="header">Código Hamming</h1>
    <UCard class="card">
      <template #header>
        <div class="card__header">
          <UButton @click="isOpen = !isOpen">Código</UButton>
        </div>
      </template>
      <div class="card__container">
        <div class="card__entrada">
          <div class="card__entrada__num">
            <UTooltip
              v-for="(num, i) in num1"
              :text="Math.pow(2, num1.length - i - 1).toString()"
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
          <div v-for="num in result">
            <Box>{{ num }}</Box>
          </div>
        </div>
      </div>
    </UCard>
    <UModal v-model="isOpen">
      <img src="" />
    </UModal>
  </div>
</template>

<script setup>
const isOpen = ref(false);
const num1 = ref(new Array(4).fill(0));
const alternar = (array, i) => (array[i] = !array[i] * 1);
const result = computed(() => calcular([...num1.value]));

//Función que calcula el resultado del código Hamming
function calcular(array) {
  let res = new Array(7).fill(1);
  res[0] = 0;
  res[1] = 0;
  res[3] = 0;

  let x = 0;
  res.forEach((v, i) => (v ? (res[i] = array[x++]) : 0));
  let p1 = 0,
    p2 = 0,
    p3 = 0;
  res.forEach((v, i) => (!(i % 2) ? (p1 += v) : 0));

  for (let i = 1; i < res.length; i += 4) {
    p2 += res[i] + res[i + 1];
  }

  for (let i = 3; i < res.length; i += 8) {
    p2 += res[i] + res[i + 1] + res[i + 2] + res[i + 3];
  }

  res[0] = p1 % 2;
  res[1] = p2 % 2;
  res[3] = p3 % 2;

  return res.join("");
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
    gap: 1rem;
  }

  &__header {
    display: flex;
    justify-content: end;
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
      justify-content: end;
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

  &__salida {
    display: flex;
    justify-content: center;
  }
}

.text-on {
  //text-shadow: 0px 0px 14px #11CE03;
  text-shadow: 0 0 20px #49ff18, 0 0 30px #49ff18, 0 0 40px #49ff18,
    0 0 55px #49ff18, 0 0 75px #49ff18, 0px 0px 19px rgba(17, 206, 3, 0);
}
</style>
