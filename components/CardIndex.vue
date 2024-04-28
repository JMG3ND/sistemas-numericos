<template>
  <div>
    <UCard>
      <template #header>
        <h2 class="title">
          {{ title }}
          <div class="title__ukbd_container">
            <UKbd v-for="index in array">{{ index }}</UKbd>
          </div>
        </h2>
      </template>
      <div class="card_content">
        <slot/>
      </div>
    </UCard>
  </div>
</template>

<script setup>
defineProps(['title', 'array']);
</script>

<style lang="scss" scoped>
.card_content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.title {
  width: 100%;
  display: flex;
  justify-content: space-between;

  &__ukbd_container {
    display: flex;
    gap: 0.5rem;
  }
}
</style>
