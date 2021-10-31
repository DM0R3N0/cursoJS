//Receber uma quantidade de valores para avaliar
//Função exibe se cada valor é par ou impar

exibirTipo(12);

function exibirTipo(limite) {
    for (i = 0; i <= limite; i++) {
        if (i % 2 === 0)
            console.log(i, 'PAR');
        else
            console.log(i, 'IMPAR');
    }
}