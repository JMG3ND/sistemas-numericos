# Parcial 1 - Circuito Lógico
---

[Link del sitio web](https://sistemas-numericos.netlify.app/)

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
Utiliza lógica biaria y hace referencia al métdo sumador binario para realizar la suma luego de la multiplcación
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
Utiliza un método de conversión binaria para hacer las operaiciones de división con los números decimales
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