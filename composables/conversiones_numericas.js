const convertirADecimal = (str, base) => {
    const array = [];
    const char = '0123456789ABCDEF';
    let decimal = 0;
    str.split('').forEach(val => array.push(char.split('').findIndex(i => i == val)));
    array.reverse().forEach((val, index) => {
        decimal += Math.pow(base, index) * val;
    })
    return decimal;
}

const convertirABase = (decimal, base) => {
    const array = [];
    const valores = '0123456789ABCDEF';
    array.push(valores[decimal % base]);
    while(Math.floor(decimal / base) > 0){
        decimal = Math.floor(decimal / base);
        array.push(valores.at(decimal % base));
    }
    return array.reverse().join('');
}

export {convertirABase, convertirADecimal};