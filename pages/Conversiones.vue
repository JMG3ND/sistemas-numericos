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
            <div class="ress">
                <UInput size="xl" v-model="value" placeholder="Valor..." />
                <h1 style="font-size: xx-large;">{{ res }}</h1>
            </div>
        </UCard>
    </div>
</template>

<script setup>

const value = ref('');
const res = ref('0');

const options = ["Binario","Octal","Decimal","Hexadecimal"];
const selectedI = ref(options[0]);
const selectedF = ref(options[1]);

const convertirADecimal = (str, base) => {
    const array = [];
    const char = '0123456789ABCDEF';
    let decimal = 0;
    str.split('').forEach(val => array.push(char.split('').findIndex(i => i==val)));
    array.reverse().forEach((val, index) => {
        decimal += Math.pow(base,index) * val;
    })
    return decimal;
}
const convertirABase = (decimal, base) => {
    const array = [];
    const valores = '0123456789ABCDEF';
    array.push(valores.at(decimal%base));
    while(Math.floor(decimal/base) > 0){
        decimal = Math.floor(decimal/base);
        array.push(valores.at(decimal%base));
    }
    return array.reverse().join('');
}
const conversion = (newQ = value.value) => {
    switch (selectedI.value) {
        case options[0]:
            if (/^[01]*$/.test(newQ)){
                const binariodecimal = convertirADecimal(newQ, 2);
                switch (selectedF.value) {
                    case options[1]:
                        res.value = convertirABase(binariodecimal, 8);
                        break;
                    case options[2]:
                        res.value = binariodecimal;
                        break;
                    case options[3]:
                        res.value = convertirABase(binariodecimal, 16);
                        break;
                    default:
                        res.value = newQ;
                }
            } else {
                res.value = "LA ENTRADA DEBE SER UN VALOR BINARIO";
            }
            break;
        case options[1]:
            if (/^[01234567]*$/.test(newQ)){
                const octaldecimal = convertirADecimal(newQ, 8);
                switch (selectedF.value) {
                    case options[0]:
                        res.value = convertirABase(octaldecimal, 8);
                        break;
                    case options[2]:
                        res.value = octaldecimal;
                        break;
                    case options[3]:
                        res.value = convertirABase(octaldecimal, 16);
                        break;
                    default:
                        res.value = newQ;
                }
            } else {
                res.value = "LA ENTRADA DEBE SER UN VALOR OCTAL";
            }
            break;
        case options[2]:
            if(/^[0123456789]*$/.test(newQ)){
                switch(selectedF.value){
                    case options[0]:
                        res.value = convertirABase(newQ, 2);
                        break;
                    case options[1]:
                        res.value = convertirABase(newQ, 8);
                        break;
                    case options[3]:
                        res.value = convertirABase(newQ, 16);
                        break;
                    default:
                        res.value = newQ;
                }
            } else {
                res.value = "LA ENTRADA TIEN QUE SER UN VALOR DECIMAL";
            }
            break;
        case options[3]:
            if(/^[0123456789ABCDEF]*$/.test(newQ)){
                const hexdec = convertirADecimal(newQ, 16);
                switch(selectedF.value){
                    case options[0]:
                        res.value = convertirABase(hexdec,2);
                        break;
                    case options[1]:
                        res.value = convertirABase(hexdec,8);
                        break;
                    case options[2]:
                        res.value = hexdec;
                        break;
                    default:
                        res.value = newQ;
                }
            } else {
                res.value = "LA ENTRADA TIEN QUE SER UN VALOR HEXADECIMAL";
            }
            break;
    }
}

watch(value, async (newQ) => conversion(newQ));
watch(selectedI, async () => conversion());
watch(selectedF, async () => conversion());
</script>

<style lang="scss" scoped>
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

.ress {
    height: 100%;
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
</style>