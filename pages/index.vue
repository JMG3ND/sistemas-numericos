<template>
  <div>
    <div class="gaping">
      <h1 style="font-size: x-large">Sistemas Numéricos</h1>
      <UTabs :items="items">
        <template #sistemaBinario="{ items }">
          <CardIndex title="Sistema Binario" :array="[0, 1]">
            <ContentDoc path="/binario/p1" />
            <Box>Ejemplos de números Binarios</Box>
            <Contador variacion="256" base="2" />
            <ContentDoc path="/binario/p2" />
          </CardIndex>
        </template>

        <template #sistemaOctal="{ items }">
          <CardIndex title="Sistema Octal" :array="[0, 1, 2, 3, 4, 5, 6, 7]">
            <ContentDoc path="/octal/p1" />
            <Box>Ejemplos de números Octales</Box>
            <Contador variacion="16777215" base="8" />
            <ContentDoc path="/octal/p2" />
          </CardIndex>
        </template>

        <template #sistemaDecimal="{ items }">
          <CardIndex
            title="Sistema Decimal"
            :array="[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]"
          >
            <ContentDoc path="/decimal/p1" />
            <Box>Ejemplos de números Decimales</Box>
            <Contador variacion="99999999" base="10" />
            <ContentDoc path="/decimal/p2" />
          </CardIndex>
        </template>

        <template #sistemaHexadecimal="{ items }">
          <CardIndex title="Sistema Hexadecimal" 
          :array="['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']">
            <ContentDoc path="/hexadecimal/p1" />
            <Box>Ejemplos de números Hexadecimales</Box>
            <Contador variacion="4294967295" base="16" />
            <ContentDoc path="/hexadecimal/p2" />
          </CardIndex>
        </template>
      </UTabs>
    </div>
  </div>
</template>

<script setup>
const items = [
  {
    slot: "sistemaBinario",
    label: "Binario",
  },
  {
    slot: "sistemaOctal",
    label: "Octal",
  },
  {
    slot: "sistemaDecimal",
    label: "Decimal",
  },
  {
    slot: "sistemaHexadecimal",
    label: "Hexadecimal",
  },
];
</script>

<style scoped>
.card_content,
.gaping {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

h2 {
  width: 100%;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    gap: 0.5rem;
  }
}

h3 {
  text-align: center;
}
</style>
