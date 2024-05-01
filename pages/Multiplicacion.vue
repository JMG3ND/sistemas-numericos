<template>
  <div>
    <h1 class="header">Operaciones Binaria</h1>
    <UCard class="card">
      <template #header>
        <div class="card__header">
          <Box>N<sub>10</sub> →</Box>
          <div class="card__header__decresult">
            <Box class="shadow-red"
              >{{ convertirADecimal(num1.join(""), 2) }}<sub>10</sub></Box
            >
            <Box class="index">{{ operacion }}</Box>
            <Box class="shadow-blue">{{ convertirADecimal(num2.join(""), 2) }}<sub>10</sub></Box>
            <Box>=</Box>
            <Box>{{ convertirADecimal(result, 2) }}<sub>10</sub></Box>
          </div>
        </div>
      </template>
      <div class="card__entrada">
        <div class="card__entrada__num shadow-red">
          <div
            @click="alternar(num1, i)"
            class="card__entrada__box"
            :class="num == 1 ? `text-on` : ``"
            v-for="(num, i) in num1"
          >
            <Box>{{ num }}</Box>
          </div>
        </div>
        <div class="card__entrada__signo">
          <div @click="iop++" class="card__entrada__box">
            <Box class="shadow-red">A<sub>2</sub></Box>
            <Box class="index">{{ operacion }}</Box>
            <Box class="shadow-blue">B<sub>2</sub></Box>
          </div>
        </div>
        <div class="card__entrada__num shadow-blue">
          <div
            @click="alternar(num2, i)"
            class="card__entrada__box"
            :class="num == 1 ? `text-on` : ``"
            v-for="(num, i) in num2"
          >
            <Box>{{ num }}</Box>
          </div>
        </div>
      </div>
      <div class="card__salida">
        <Box>{{ result }}<sub>2</sub></Box>
      </div>
    </UCard>
  </div>
</template>

<script setup>
import { convertirADecimal } from "@/composables/conversiones_numericas.js";

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
    const F = XOR(XOR(A, B), carry); // F = (AB' + A'B) + C
    carry = (XOR(A, B) && carry) || (A && B); // carry = (AB' + A'B)C + AB
    resSum.push(F * 1);
  }
  resSum.push(carry);
  return resSum;
}

function restaBinaria(array1, array2) {
  const resRes = [];
  let C = 0;
  let a1 = [...array1];
  let a2 = [...array2];
  const index = a1.findIndex((v) => v != 0);
  a1 = a1.slice(index);
  a2 = a2.slice(index);

  for (let i = a1.length - 1; i >= 0; i--) {
    const A = a1[i];
    const B = a2[i];

    const D = XOR(XOR(A, B), C);
    C = (!XOR(A, B) && C) || (!A && B);

    resRes.push(D * 1);
  }
  return resRes;
}

function multiplicacionBinaria(array1, array2) {
  let a1 = [...array1];
  a1 = a1.slice(a1.findIndex((v) => v != 0));
  let a2 = [...array2];
  a2 = a2.slice(a2.findIndex((v) => v != 0));
  
  let multRes = new Array(a2.length).fill(0);
  let column = [];
  a1.forEach(v1 => column.push(a2.map(v2 => v2 * v1)));

  multRes = sumaBinaria(multRes, column[0]);
  for(let i = 0; i < column.length; i++) {
    //Hacer el unshift de todo el array colum para los ceos a la derecha
  }

  console.log(column[0], multRes);
  
  return multRes;
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
      respuesta = multiplicacionBinaria(array1, array2);
      break;
    case "/":
  }
  return respuesta
    .reverse()
    .slice(respuesta.findIndex((v) => v !== 0))
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

  &__header {
    display: flex;
    justify-content: space-between;
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

  &__salida {
    margin-top: 1rem;
  }
}

.shadow-red {
  border-radius: 10px;
  background-color: transparent;
  -webkit-box-shadow: 0px 0px 24px 3px rgba(255, 0, 0, 1);
  -moz-box-shadow: 0px 0px 24px 3px rgba(255, 0, 0, 1);
  box-shadow: 0px 0px 24px 3px rgba(255, 0, 0, 1);
}

.shadow-blue {
  border-radius: 10px;
  background-color: transparent;
  -webkit-box-shadow: 0px 0px 24px 3px rgba(0, 17, 255, 1);
  -moz-box-shadow: 0px 0px 24px 3px rgba(0, 17, 255, 1);
  box-shadow: 0px 0px 24px 3px rgba(0, 17, 255, 1);
}

.index {
  z-index: 1;
}

.text-on {
  //text-shadow: 0px 0px 14px #11CE03;
  text-shadow: 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18, 0px 0px 19px rgba(17,206,3,0);
}
</style>
