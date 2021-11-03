//Faixa de preços (Tooltip)
//Array de objetos com faixa de preço


//Primeira opção
let faixa1 = [
    { tooltip: 'até R$700', minimo: 0, maximo: 700 },
    { tooltip: 'de R$700 a R$1000', minimo: 700, maximo: 1000 },
    { tooltip: 'R$1000 ou mais', minimo: 1000, maximo: 10000 },
];
console.log(faixa1);



//Segunda opção (Factory Function)
function criarFaixaPreco(tooltip, minimo, maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixa2 = [
    criarFaixaPreco('até R$700', 0, 700),
    criarFaixaPreco('de R$700 a R$1000', 700, 1000),
    criarFaixaPreco('R$1000 ou mais', 1000, 10000)
]
console.log(faixa2);




//Terceira opção (Constructor Function)
function FaixaPreco(tooltip, minimo, maximo) {
    this.tooltip = tooltip,
        this.minimo = minimo,
        this.maximo = maximo
}

let faixa3 = [
    new FaixaPreco('até R$700', 0, 700),
    new FaixaPreco('de R$700 a R$1000', 700, 1000),
    new FaixaPreco('R$1000 ou mais', 1000, 10000)
]
console.log(faixa3);