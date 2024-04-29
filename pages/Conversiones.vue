<template>
  <div class="gaping">
    <h1 style="font-size: x-large">Conversión entre Sistemas</h1>
    <UCard class="card">
      <template #header>
        <div class="header">
          <h2 class="card__title">
            Convertir de
            <USelectMenu v-model="selectedI" :options="options" />
            a
            <USelectMenu v-model="selectedF" :options="options" />
          </h2>
          <div>
            <UButton label="Código" @click="showModal = true" />
          </div>
        </div>
      </template>
      <div class="card__ress">
        <div style="display: inline-block; padding-bottom: 1rem">
          <UInput size="xl" v-model="value" placeholder="Valor..." />
        </div>
        <div class="card__ress_container">
          <Box v-if="error">El valor debe ser de tipo {{ errortype }}</Box>
          <div v-if="!error && res" class="card__box_container">
            <Box
              >Conversión n<sub>{{ baseConversion }}</sub></Box
            >
            <div class="card__box_container__child">
              <div style="display: flex">
                <Box v-for="(char, sup = 8) in res.toString()">{{ char }}</Box>
              </div>
              <div style="display: flex; flex-direction: row-reverse">
                <Box v-for="(sup, i) in res">
                  {{ baseConversion }}<sup>{{ i }}</sup>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UCard>
    <UModal v-model="showModal">
      <div style="padding: 1rem;">
        <img style="border-radius: 10px;" src="/public/codigo-conversiones.png" />
      </div>
    </UModal>
  </div>
</template>

<script setup>
import {
  convertirABase,
  convertirADecimal,
} from "@/composables/conversiones_numericas.js";

const value = ref("");
const res = ref("0");
const error = ref(false);
const errortype = ref("");
const baseConversion = ref("8");
const showModal = ref(false);

const options = ["Binario", "Octal", "Decimal", "Hexadecimal"];
const selectedI = ref(options[0]);
const selectedF = ref(options[1]);

const switchF = (decimal) => {
  let base;
  switch (selectedF.value) {
    case options[0]:
      base = 2;
      break;
    case options[1]:
      base = 8;
      break;
    case options[2]:
      base = 10;
      break;
    case options[3]:
      base = 16;
      break;
  }
  baseConversion.value = base;
  res.value = convertirABase(decimal, base);
};

const conversion = (newQ = value.value) => {
  switch (selectedI.value) {
    case options[0]:
      if (/^[01]*$/.test(newQ)) {
        error.value = false;
        const binariodecimal = convertirADecimal(newQ, 2);
        switchF(binariodecimal);
      } else {
        error.value = true;
        errortype.value = options[0];
      }
      break;
    case options[1]:
      if (/^[01234567]*$/.test(newQ)) {
        error.value = false;
        const octaldecimal = convertirADecimal(newQ, 8);
        switchF(octaldecimal);
      } else {
        error.value = true;
        errortype.value = options[1];
      }
      break;
    case options[2]:
      if (/^[0123456789]*$/.test(newQ)) {
        error.value = false;
        switchF(parseInt(newQ));
      } else {
        error.value = true;
        errortype.value = options[2];
      }
      break;
    case options[3]:
      newQ = newQ.toUpperCase();
      if (/^[0123456789ABCDEF]*$/.test(newQ)) {
        error.value = false;
        const hexdec = convertirADecimal(newQ, 16);
        switchF(hexdec);
      } else {
        error.value = true;
        errortype.value = options[3];
      }
      break;
  }
};

watch(value, async (newQ) => conversion(newQ));
watch(selectedI, async () => conversion());
watch(selectedF, async () => conversion());
</script>

<style lang="scss" scoped>
.gaping {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
}

.card {
  height: 80%;

  &__title {
    display: flex;
    gap: 1rem;
  }

  &__ress_container {
    display: flex;
    justify-content: center;

    > div {
      padding: 0.6rem;
    }
  }

  &__ress {
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  &__box_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    &__child {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
}

.header {
  display: flex;
  justify-content: space-between;
}
</style>
