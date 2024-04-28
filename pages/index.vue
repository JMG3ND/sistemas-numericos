<template>
  <div>
    <div class="gaping">
      <h1 style="font-size: x-large">Sistemas Numéricos</h1>
      <UTabs :items="items">
        <template #sistemaBinario="{ items }">
          <UCard>
            <template #header>
              <h2>
                Sistema Binario
                <div>
                  <UKbd v-for="index in [0, 1]">{{ index }}</UKbd>
                </div>
              </h2>
            </template>
            <div class="card_content">
              <ContentDoc path="/binario/p1" />
              <Box>Ejemplos de números Binarios</Box>
              <Contador variacion="256" base="2" />
              <ContentDoc path="/binario/p2" />
            </div>
          </UCard>
        </template>

        <template #sistemaOctal="{ items }">
          <UCard>
            <template #header>
              <h2>
                Sistema Octal
                <div>
                  <UKbd v-for="index in [0, 1, 2, 3, 4, 5, 6, 7]">{{
                    index
                  }}</UKbd>
                </div>
              </h2>
            </template>
            <div class="card_content">
              <ContentDoc path="/octal/p1" />
              <Box>Ejemplos de números Octales</Box>
              <Contador variacion="16777215" base="8" />
              <ContentDoc path="/octal/p2" />
            </div>
          </UCard>
        </template>

        <template #sistemaDecimal="{ items }">
          <UCard>
            <template #header>
              <h2>
                Sistema Decimal
                <div>
                  <UKbd v-for="index in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]">{{
                    index
                  }}</UKbd>
                </div>
              </h2>
            </template>
            <div class="card_content">
              <ContentDoc path="/decimal/p1" />
              <Box>Ejemplos de números Decimales</Box>
              <Contador variacion="99999999" base="10" />
              <ContentDoc path="/decimal/p2" />
            </div>
          </UCard>
        </template>

        <template #sistemaHexadecimal="{ items }">
          <UCard>
            <template #header>
              <h2>
                Sistema Hexadecimal
                <div>
                  <UKbd v-for="index in '0123456789ABCDEF'">{{ index }}</UKbd>
                </div>
              </h2>
            </template>
            <div class="card_content">
              <ContentDoc path="/hexadecimal/p1" />
              <Box>Ejemplos de números Hexadecimales</Box>
              <Contador variacion="4294967295" base="16" />
              <ContentDoc path="/hexadecimal/p2" />
            </div>
          </UCard>
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

.sombra {
  -webkit-box-shadow: 11px 12px 33px -17px rgba(12, 150, 37, 1);
  -moz-box-shadow: 11px 12px 33px -17px rgba(12, 150, 37, 1);
  box-shadow: 11px 12px 33px -17px rgba(12, 150, 37, 1);
}
</style>
