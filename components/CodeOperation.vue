<template>
  <div>
    <UTabs :items="items">
      <template #suma="{ items }">
        <img class="img" src="/public/Suma-Binaria.png" />
      </template>

      <template #resta="{ items }">
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
