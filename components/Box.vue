<template>
  <div>
    <UCard :ui="ui" class="box">
      <slot />
    </UCard>
  </div>
</template>

<script lang="ts" setup>
const ui = {
  body : {
    padding: '',
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Jersey+10&display=swap');
.box{
  min-width: 80px;
  height: 80px;
  padding: 0 1rem;
  margin: 0 0.25rem;
  border-radius: 10px;
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Jersey 10", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>