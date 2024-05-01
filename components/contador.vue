<template>
  <div>
    <div class="container">
      <div class="box_container reverse">
          <Box v-for="n, i in result">
            {{ base }}<sup>{{ i }}</sup>
          </Box>
      </div>
      <div class="box_container">
          <Box v-for="n in result">
            {{ n }}
          </Box>
      </div>
      <div v-if="dec" class="box_container dec">
        <Box>
          Suma decimal =
          {{ dec }}
        </Box>
      </div>
    </div>
  </div>
</template>

<script setup>
import {convertirABase} from '~/composables/conversiones_numericas';
const props = defineProps(['variacion', 'base']);
const dec = ref();
const result = ref('');

function changeNumber() {
  setInterval(() => {
    const x = Math.round(Math.random() * props.variacion);
    dec.value = x;
    const array = new Array(8).fill('0');
    convertirABase(x, props.base).split('').forEach((v, i) => array[i] = v);
    if(props.base == 10){
      result.value = array;
    } else result.value = array.reverse();
  }, 1000);
}

onMounted(changeNumber);
</script>

<style lang="scss" scoped>
.box_container{
  display: flex;
  justify-content: center;
  align-items: center;
}

.reverse {
  flex-direction: row-reverse;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>