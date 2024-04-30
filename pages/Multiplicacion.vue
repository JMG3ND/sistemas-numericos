<template>
  <div>
    <h1 class="header">Multiplicación Binaria</h1>
    <UCard class="card">
      <div class="card__entrada">
        <div class="card__entrada__num">
          <div
            @click="alternar(num1, i)"
            class="card__entrada__box"
            v-for="(num, i) in num1"
          >
            <Box>{{ num }}</Box>
          </div>
        </div>
        <div class="card__entrada__signo">
          <div @click="iop++" class="card__entrada__box">
            <Box>{{ operacion }}</Box>
          </div>
        </div>
        <div class="card__entrada__num">
          <div
            @click="alternar(num2, i)"
            class="card__entrada__box"
            v-for="(num, i) in num2"
          >
            <Box>{{ num }}</Box>
          </div>
        </div>
      </div>
      <div class="card__salida">
          <Box >{{ result }}</Box>
      </div>
    </UCard>
  </div>
</template>

<script setup>
const array = new Array(8).fill(0);
const num1 = ref([...array]);
const num2 = ref([...array]);
const iop = ref(0);
const operacion = computed(() => "+-x/"[iop.value % 4]);
const alternar = (array, i) => (array[i] = !array[i] * 1);
const result = computed(() =>
  operar([...num1.value], [...num2.value], operacion.value)
);

const XOR = (A, B) => (A && !B) || (!A && B);
function sumaBinaria(array1, array2) {
  const resSum = [];
  let carry = 0;

  for (let i = array1.length - 1; i >= 0; i--) {
    const A = array1[i];
    const B = array2[i];
    const v = XOR(A, B);
    const F = XOR(v, carry);
    carry = (v && carry) || (A && B);
    resSum.push(F * 1);
  }
  resSum.push(carry);
  return resSum;
}
function restaBinaria(array1, array2) {
  const resRes = [];
  let C = 0;

  for(let i = array1.length - 1; i >= 0; i--){
    const A = array1[i];
    const B = array2[i];

    const s1 = XOR(A, B);
    const D = XOR(s1, C);
    const s2 = !A && B;
    const s3 = !s1 && C;

    C = s2 || s3;

    resRes.push(D * 1);
  }

  return resRes;
}

function operar(array1, array2, operador) {
  let respuesta = [];
  switch (operador) {
    case "+":
      respuesta = sumaBinaria(array1, array2);
      break;
    case "-":
      respuesta = restaBinaria(array1, array2);
      break;
    case "x":
      
      break;
    case "/":
  }
  return respuesta
    .reverse()
    .slice(respuesta.findIndex(v => v !== 0))
    .join("");
}
</script>

<style lang="scss" scoped>
.header {
  font-size: x-large;
  margin-bottom: 1rem;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 1rem;

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
    margin-top: 1rem;
  }
}
</style>
