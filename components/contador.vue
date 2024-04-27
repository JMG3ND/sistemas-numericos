<template>
    <div class="box_container">
        <Box v-for="n in result">
          {{ n }}
        </Box>
    </div>
</template>

<script setup>
import {convertirABase} from '~/composables/conversiones_numericas';
const props = defineProps(['variacion', 'base']);

const result = ref('');

function changeNumber() {
  setInterval(() => {
    const x = Math.round(Math.random() * props.variacion);
    const array = new Array(8).fill('0');
    convertirABase(x, props.base).split('').forEach((v, i) => array[i] = v);
    result.value = array.reverse();
  }, 1000);
}

onMounted(changeNumber);
</script>

<style lang="scss">
.box_container{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>