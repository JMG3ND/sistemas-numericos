<template>
    <div class="gaping">
        <h1 style="font-size: x-large;">Conversión entre Sistemas</h1>

        <UCard class="card">
            <template #header>
                <h2>
                    Convertir de
                    <USelectMenu v-model="selectedI" :options="options"/> 
                    a 
                    <USelectMenu v-model="selectedF" :options="options"/>
                </h2>
            </template>
            <div>
                <UInput v-model="value" placeholder="Valor..."  />
            </div>
        </UCard>
    </div>
</template>

<script setup>
const value = ref('');

const options = ["Binario","Octal","Decimal","Hexadecimal"];
const selectedI = ref(options[0]);
const selectedF = ref(options[1]);

watch(value, async (newQ, oldQ) => {
    //Escribir aquí la lógica para hacer cada una de las conversiones
})
</script>

<style scoped>
.gaping{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
}

.card {
    height:80%;
    h2{
        display: flex;
        gap: 1rem;
    }
}
</style>