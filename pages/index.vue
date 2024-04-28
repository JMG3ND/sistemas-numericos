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
              <Box>Ejemplos de números Hexadecimales</Box>
              <Contador variacion="4294967295" base="16" />
              <p>
                El sistema hexadecimal es un sistema numérico que utiliza 16
                símbolos para representar valores. Estos símbolos son los
                dígitos del 0 al 9 y las letras A, B, C, D, E, y F. Cada símbolo
                tiene un valor decimal asociado: del 0 al 9 representan los
                valores decimales normales, mientras que las letras representan
                los valores del 10 al 15. Por lo tanto, en el sistema
                hexadecimal, el valor de cada posición se calcula multiplicando
                el valor del símbolo por 16 elevado a la potencia de su
                posición.
              </p>
              <p>Por ejemplo, el número hexadecimal "2A3" se calcula como:</p>
              <p>
                (2 * 16<sup>2</sup>) + (A * 16<sup>1</sup>) + (3 *
                16<sup>0</sup>)
              </p>
              <p>Donde "A" tiene un valor de 10 en decimal.</p>
              <p>
                El sistema hexadecimal es ampliamente utilizado en informática
                debido a su capacidad para representar fácilmente grandes
                valores binarios de manera más compacta y legible. En
                particular, cada dígito hexadecimal equivale a cuatro bits (un
                nibble), lo que hace que la conversión entre binario y
                hexadecimal sea bastante simple. Esto es especialmente útil en
                la programación y el diseño de hardware.
              </p>
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
