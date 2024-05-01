<template>
  <div>
    <UTabs :items="items">
      <template #suma="{ items }">
        <img class="img" src="/public/Suma-Binaria.png" />
      </template>

      <template #resta="{ items }">
        <div style="padding: 1rem; border-radius: 10px">
          Profe, no puse restricción para cuando el sustraendo es mayor que el
          minuendo, así que si intenta hacer la resta le saldrán resultados
          extraños. PD: Por ahí lo arreglo.
        </div>
        <img class="img" src="/public/Resta-Binaria.png" />
      </template>

      <template #multiplicacion="{ items }">
        <img class="img" src="/public/Multiplicacion-Binaria.png" />
      </template>

      <template #division="{ items }">
        <img class="img" src="/public/Division-Binaria.png" />
      </template>
    </UTabs>
  </div>
</template>

<script setup>
const items = [
  {
    slot: "suma",
    label: "Suma",
  },
  {
    slot: "resta",
    label: "Resta",
  },
  {
    slot: "multiplicacion",
    label: "Multiplicación",
  },
  {
    slot: "division",
    label: "División",
  },
];
</script>

<style lang="scss">
.img {
  border-radius: 10px;
}
</style>
