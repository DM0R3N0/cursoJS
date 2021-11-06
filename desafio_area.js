//PI = 3,141592
//Area = PI * raio^2

function calcularCircunferencia(raio) {
    return (Math.PI * Math.pow(raio, 2));
}
console.log('A área da circunferencia é', calcularCircunferencia(10), 'm²');