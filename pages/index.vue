<template>
    <div class="gaping">
        <h1 style="font-size: x-large;">Sistemas Numéricos</h1>
        <UTabs :items="items">
            <template #sistemaBinario="{items}">
                <UCard>
                    <template #header>
                        <h2>
                            Sistema Binario 
                            <div>
                                <UKbd v-for="index in [0,1]" :value=index />
                            </div>
                        </h2>
                    </template>
                    <div class="card_content">
                        <p>
                            El código binario es un sistema numérico que utiliza solo dos dígitos: 0 y 1. 
                            Este sistema es fundamental en la computación y la electrónica digital, 
                            ya que las computadoras están diseñadas para procesar y almacenar información en 
                            forma binaria.
                        </p>
                        <p>
                            En el código binario, cada dígito se llama "bit" (abreviatura de "binary digit"). 
                            Los bits se agrupan en conjuntos de ocho, llamados "bytes". Cada byte puede 
                            representar un número o un carácter de texto, dependiendo de cómo se interprete.
                        </p>
                        <p>
                            El funcionamiento del código binario se basa en el sistema de numeración posicional, 
                            similar al sistema decimal que utilizamos en la vida cotidiana. En el sistema decimal,
                            cada posición en un número representa una potencia de 10. Por ejemplo, en el número 
                            123, el 3 está en la posición de las unidades (10^0), el 2 en la posición de las
                            decenas (10^1), y el 1 en la posición de las centenas (10^2).
                        </p>
                        <p>
                            En el código binario, cada posición representa una potencia de 2 en lugar de 10. 
                            Por ejemplo, en el número binario 101, el 1 está en la posición de las unidades 
                            (2^0), el 0 en la posición de las dos (2^1), y el 1 en la posición de las cuatros 
                            (2^2).
                        </p>
                        <p>
                            Así que, en resumen, el código binario funciona mediante la representación de 
                            cantidades utilizando solo dos símbolos (0 y 1), y el valor de cada posición 
                            dentro de un número binario se determina por las potencias de 2. Esto proporciona 
                            la base para el funcionamiento interno de las computadoras y otros dispositivos 
                            electrónicos digitales.
                        </p>
                    </div>
                </UCard>
            </template>

            <template #sistemaOctal="{items}">
                <UCard>
                    <template #header>
                        <h2>
                            Sistema Octal
                            <div>
                                <UKbd v-for="index in [0,1,2,3,4,5,6,7]" :value=index />
                            </div>
                        </h2>
                    </template>
                    <div class="card_content">
                        <p>El sistema octal, también conocido como base-8, es un sistema numérico que utiliza 8 dígitos diferentes para representar valores. Estos dígitos son 0, 1, 2, 3, 4, 5, 6 y 7. Funciona de manera similar al sistema decimal (base-10), pero en lugar de agrupar los dígitos en grupos de diez, los agrupa en grupos de ocho.</p>
                        <p>En el sistema octal, cada posición en un número tiene un valor que es una potencia de 8. Por ejemplo, en el número 347 en sistema octal, el dígito "7" está en la posición de las unidades, el dígito "4" está en la posición de los ochos (8), y el dígito "3" está en la posición de los 64 (8<sup>2</sup>). Entonces, el valor del número octal 347 en decimal sería:</p>

                        <p>3 &times; 8^2 + 4 &times; 8^1 + 7 &times; 8^0 = 3 &times; 64 + 4 &times; 8 + 7 &times; 1 = 192 + 32 + 7 = 231 </p>

                        <p>Por lo tanto, el número octal 347 equivale al número decimal 231.</p>

                        <p>El sistema octal es útil en computación, especialmente en sistemas informáticos antiguos, ya que es fácil de convertir a binario y viceversa. Cada dígito en el sistema octal representa exactamente 3 bits en binario. Esto hace que sea conveniente para la representación de datos binarios en un formato más compacto y fácil de manejar. Sin embargo, con el advenimiento de sistemas informáticos más avanzados, como los basados en binario y hexadecimal, el uso del sistema octal ha disminuido en cierta medida.</p>

                    </div>
                </UCard>
            </template>

            <template #sistemaDecimal="{items}">
                <UCard>
                    <template #header>
                        <h2>
                            Sistema Decimal 
                            <div>
                                <UKbd v-for="index in [0,1,2,3,4,5,6,7,8,9]" :value=index />
                            </div>
                        </h2>
                    </template>
                    <div class="card_content">
                        <p>
                            El sistema decimal es un sistema de numeración que utiliza diez símbolos diferentes para representar valores: 0, 1, 2, 3, 4, 5, 6, 7, 8 y 9. Es el sistema numérico más utilizado en el mundo, y su importancia radica en que se adapta naturalmente al número de dedos que tenemos en nuestras manos.
                        </p>
                        <p>
                            En el sistema decimal, los números se construyen combinando estos símbolos en diferentes posiciones dentro de un sistema de numeración posicional. Esto significa que el valor de cada dígito depende de su posición dentro del número. Por ejemplo, en el número 123, el "1" representa 100 (10 al cubo), el "2" representa 20 (10 al cuadrado) y el "3" representa 3 (10 elevado a la potencia cero), y al sumarlos obtenemos el valor total del número.
                        </p>
                        <p>
                            El sistema decimal sigue una convención donde los dígitos se colocan de derecha a izquierda en orden creciente de valor de posición. La posición más a la derecha representa las unidades, la siguiente posición a la izquierda representa las decenas, luego las centenas, y así sucesivamente, cada posición se multiplica por diez.
                        </p>
                        <p>
                            Por ejemplo, el número 456 en el sistema decimal se desglosa así:
                        </p>
                        <ul>
                            <li>El "6" está en la posición de las unidades, por lo que representa 6.</li>
                            <li>El "5" está en la posición de las decenas, por lo que representa 50 (5 veces 10).</li>
                            <li>El "4" está en la posición de las centenas, por lo que representa 400 (4 veces 100).</li>
                        </ul>
                        <p>
                            Entonces, sumando estos valores, obtenemos 400 + 50 + 6, que es igual a 456.
                        </p>
                        <p>
                            Este sistema es muy intuitivo y fácil de entender, lo que lo hace ideal para realizar cálculos aritméticos cotidianos y para la representación de cantidades en la vida diaria.
                        </p>
                    </div>
                </UCard>
            </template>

            <template #sistemaHexadecimal="{items}">
                <UCard>
                    <template #header>
                        <h2>
                            Sistema Hexadecimal 
                            <div>
                                <UKbd v-for="index in '123456789ABCDEF'" :value=index />
                            </div>
                        </h2>
                    </template>
                    <div class="card_content">
                        <p>El sistema hexadecimal es un sistema numérico que utiliza 16 símbolos para representar valores. Estos símbolos son los dígitos del 0 al 9 y las letras A, B, C, D, E, y F. Cada símbolo tiene un valor decimal asociado: del 0 al 9 representan los valores decimales normales, mientras que las letras representan los valores del 10 al 15. Por lo tanto, en el sistema hexadecimal, el valor de cada posición se calcula multiplicando el valor del símbolo por 16 elevado a la potencia de su posición.</p>
                        <p>Por ejemplo, el número hexadecimal "2A3" se calcula como:</p>
                        <p>(2 * 16<sup>2</sup>) + (A * 16<sup>1</sup>) + (3 * 16<sup>0</sup>)</p>
                        <p>Donde "A" tiene un valor de 10 en decimal.</p>
                        <p>El sistema hexadecimal es ampliamente utilizado en informática debido a su capacidad para representar fácilmente grandes valores binarios de manera más compacta y legible. En particular, cada dígito hexadecimal equivale a cuatro bits (un nibble), lo que hace que la conversión entre binario y hexadecimal sea bastante simple. Esto es especialmente útil en la programación y el diseño de hardware.</p>
                    </div>
                </UCard>
            </template>

        </UTabs>     
    </div>
</template>

<script setup>
const items = [{
    slot:"sistemaBinario",
    label:"Binario"
},{
    slot:"sistemaOctal",
    label:"Octal"
},{
    slot:"sistemaDecimal",
    label:"Decimal"
},{
    slot:"sistemaHexadecimal",
    label:"Hexadecimal"
}];
</script>

<style scoped>
.card_content,.gaping{
    display: flex;
    flex-direction: column;
    gap: 1rem
}

h2{
    width: 100%;
    display: flex;
    justify-content: space-between;

    div{
        display: flex;
        gap:0.5rem;
    }
}
</style>