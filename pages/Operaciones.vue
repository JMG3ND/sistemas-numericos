<template>
  <div>
    <h1 class="header">Operaciones Binaria</h1>
    <UCard class="card">
      <template #header>
        <div class="card__header">
          <div class="card__header__decresult">
            <Box>N<sub>10</sub> →</Box>
            <Box class="shadow-red"
              >{{ convertirADecimal(num1.join(""), 2) }}<sub>10</sub></Box
            >
            <Box class="index">{{ operacion }}</Box>
            <Box class="shadow-blue"
              >{{ convertirADecimal(num2.join(""), 2) }}<sub>10</sub></Box
            >
            <Box>=</Box>
            <Box>{{ convertirADecimal(result, 2) }}<sub>10</sub></Box>
          </div>
          <div>
            <UButton @click="isOpen = !isOpen" label="Código" />
          </div>
        </div>
      </template>
      <div class="card__entrada">
        <div class="card__entrada__num shadow-red">
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
        <div class="card__entrada__signo">
          <div @click="iop++" class="card__entrada__box">
            <Box class="shadow-red">A<sub>2</sub></Box>
            <Box class="index">{{ operacion }}</Box>
            <Box class="shadow-blue">B<sub>2</sub></Box>
          </div>
        </div>
        <div class="card__entrada__num shadow-blue">
          <UTooltip
            :text="Math.pow(2, num2.length - i - 1).toString()"
            v-for="(num, i) in num2"
          >
            <div
              @click="alternar(num2, i)"
              class="card__entrada__box"
              :class="num == 1 ? `text-on` : ``"
            >
              <Box>{{ num }}</Box>
            </div>
          </UTooltip>
        </div>
      </div>
      <div class="card__salida">
        <Box>{{ result }}<sub>2</sub></Box>
      </div>
    </UCard>
  </div>
  <UModal v-model="isOpen">
    <CodeOperation />
  </UModal>
</template>

<script setup>
import {
  convertirADecimal,
  convertirABase,
} from "@/composables/conversiones_numericas.js";
const isOpen = ref(false);
const array = new Array(8).fill(0);
const num1 = ref([...array]);
const num2 = ref([...array]);
const iop = ref(0);
const operacion = computed(() => "+-x/"[iop.value % 4]);
const alternar = (array, i) => (array[i] = !array[i] * 1);
const result = computed(() =>
  operar([...num1.value], [...num2.value], operacion.value)
);

//Suma Binaria usando compuertas lógicas de circuitos
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
  return resSum.reverse();
}
//Resta binaria usando compuertas lóicas de electrónica
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

    resRes.unshift(D * 1);
  }
  return resRes;
}
//Multiplicación Binaria entre dos números
function multiplicacionBinaria(array1, array2) {
  let a1 = [...array1];
  a1 = a1.slice(a1.findIndex((v) => v != 0));
  let a2 = [...array2];
  a2 = a2.slice(a2.findIndex((v) => v != 0));

  let multRes = new Array(a2.length).fill(0);
  let column = [];
  a1.forEach((v1) => column.push(a2.map((v2) => v2 * v1)));
  column.reverse();
  multRes = sumaBinaria(multRes, column[0]);

  for (let i = 1; i < column.length; i++) {
    column = column.map((v) => {
      v.push(0);
      return v;
    });
    multRes = sumaBinaria(multRes, column[i]);
  }
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
      //Divisón binaria usando los decimales ya que me dió flojera hacerlo
      //con lógica binaria
      const dec1 = convertirADecimal(array1.join(""), 2);
      const dec2 = convertirADecimal(array2.join(""), 2);
      if (dec2 == 0) {
        num2.value[num2.value.length - 1] = 1;
        break;
      }
      const decres = Math.floor(dec1 / dec2);
      respuesta = convertirABase(decres, 2).split("");
  }
  
  return respuesta.slice(respuesta.findIndex((v) => v !== 0)).join("");
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
  text-shadow: 0 0 20px #49ff18, 0 0 30px #49ff18, 0 0 40px #49ff18,
    0 0 55px #49ff18, 0 0 75px #49ff18, 0px 0px 19px rgba(17, 206, 3, 0);
}
</style>
