//Trocar valores entre duas variaveis

let a = 7
let b = 94
let c
console.log('Valores originais= ', 'a =', a, ',', 'b =', b);

//Modo simples
//c = a;
//a = b;
//b = c;
//console.log('Valores trocados= ', 'a =', a, ',', 'b = ', b);

//Modo curto ECMAScript 6
[a, b] = [b, a];
console.log('Valores trocados= ', 'a =', a, ',', 'b = ', b)