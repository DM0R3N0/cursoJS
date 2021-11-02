//Função para ostrar s numeros primos
//Numeros primos sao numeros diviseis por 1 e por ele mesmo

exibirNumPrimos(10);

function exibirNumPrimos(limite) {
    for (let numero = 2; numero <= limite; numero++) {
        let ehPrimo = true;
        for (let divisor = 2; divisor < numero; divisor++) {
            if (numero % divisor === 0) {
                ehPrimo = false;
                break;
            }
        }
        if (ehPrimo) console.log(numero);
    }
}