<template>
    <div class="gaping">
        <h1 style="font-size: x-large;">Conversión entre Sistemas</h1>

        <UCard class="card">
            <template #header>
                <h2>
                    Convertir de
                    <USelectMenu/> a <USelectMenu/>
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