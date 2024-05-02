# Parcial 1 - Circuito Lógico
---

[Link del sitio web](https://sistemas-numericos.netlify.app/)

---

## Conversiones entre sistemas numéricos.
Funciones que alternan entre un valor decimal a los diferentes sistemas numéricos según la base con la que se trabaje.

```js
//Función que recibe un número como cadena de texto y lo transforma a decimal según
//la base que se le otorgue
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

//Función que convierte un número decimal a cualquier sistema numérico según la base
//que se le otorgue por parámetro
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
```

---

## Código de operaciones binarias.
### Método sumador binario de dos números.
Utiliza lógica binaria de circuitos para realizar las operaciones.

```js
const XOR = (A, B) => (A && !B) || (!A && B);
function sumaBinaria(array1, array2) {
  const resSum = [];
  let carry = 0;

  for (let i = array1.length - 1; i >= 0; i--) {
    const A = array1[i];
    const B = array2[i];
    const F = XOR(XOR(A, B), carry); // F = (AB' + A'B) + C
    carry = (XOR(A, B) && carry) || (A && B); // carry = (AB' + A'B)C + AB
    resSum.push(F * 1);
  }
  resSum.push(carry);
  return resSum.reverse();
}
```

### Método restador binario.
Utilza lógica binaria de circuitos para realizar las operacioes.

```js
function restaBinaria(array1, array2) {
  const resRes = [];
  let C = 0;
  let a1 = [...array1];
  let a2 = [...array2];
  const index = a1.findIndex((v) => v != 0);
  a1 = a1.slice(index);
  a2 = a2.slice(index);

  for (let i = a1.length - 1; i >= 0; i--) {
    const A = a1[i];
    const B = a2[i];

    const D = XOR(XOR(A, B), C);
    C = (!XOR(A, B) && C) || (!A && B);

    resRes.unshift(D * 1);
  }
  return resRes;
}
```

### Método multiplcador binario.
Utiliza lógica biaria y hace referencia al métdo sumador binario para realizar la suma luego de la multiplcación.

```js
function multiplicacionBinaria(array1, array2) {
  let a1 = [...array1];
  a1 = a1.slice(a1.findIndex((v) => v != 0));
  let a2 = [...array2];
  a2 = a2.slice(a2.findIndex((v) => v != 0));

  let multRes = new Array(a2.length).fill(0);
  let column = [];
  a1.forEach((v1) => column.push(a2.map((v2) => v2 * v1)));
  column.reverse();
  multRes = sumaBinaria(multRes, column[0]);

  for (let i = 1; i < column.length; i++) {
    column = column.map((v) => {
      v.push(0);
      return v;
    });
    multRes = sumaBinaria(multRes, column[i]);
  }
  return multRes;
}
```

### Código de división binaria
Utiliza un método de conversión binaria para hacer las operaiciones de división con los números decimales.

```js
const dec1 = convertirADecimal(array1.join(""), 2);
const dec2 = convertirADecimal(array2.join(""), 2);
if (dec2 == 0) {
num2.value[num2.value.length - 1] = 1;
break;
}
const decres = Math.floor(dec1 / dec2);
respuesta = convertirABase(decres, 2).split("");
```

---

## Código Gray.
Código que calcula el código gray de un número biario que se lo otorgue por parámetro.

```js
const XOR = (A, B) => (A && !B) || (!A && B);
function cgray (array) {
  let res = [array[0]];
  
  for (let i = 1; i < array.length - 1; i++) {
    res.push(XOR(array[i], array[i+1]) * 1);
  }
  
  res = res.slice(res.findIndex(v=> v!=0));
  return res.join('');
}
```

---

## Código Hamming (7,4)
Código que calcula el códio Hamming de una información enviada con cuatro bits.

```js
function calcular(array) {
  let res = new Array(7).fill(1);
  res[0] = 0;
  res[1] = 0;
  res[3] = 0;

  let x = 0;
  res.forEach((v, i) => (v ? (res[i] = array[x++]) : 0));
  let p1 = 0,
    p2 = 0,
    p3 = 0;
  res.forEach((v, i) => (!(i % 2) ? (p1 += v) : 0));

  for (let i = 1; i < res.length; i += 4) {
    p2 += res[i] + res[i + 1];
  }

  for (let i = 3; i < res.length; i += 8) {
    p2 += res[i] + res[i + 1] + res[i + 2] + res[i + 3];
  }

  res[0] = p1 % 2;
  res[1] = p2 % 2;
  res[3] = p3 % 2;

  return res.join("");
}
```