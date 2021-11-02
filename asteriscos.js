//Criar uma função que exibe a quantodade de *
//que aquela linha possui

exibirAsteriscos(10);

//for 
/*function exibirAsteriscos(linhas) {
    let padrao = '';
    for (let linha = 1; linha <= linhas; linha++) {
        padrao += '*';
        console.log(padrao);
    }*/


//nested loops
function exibirAsteriscos(linhas) {
    for (let linha = 1; linha <= linhas; linha++) {
        let padrao = '';
        for (let i = 0; i < linha; i++) {
            padrao += '*';
        }
        console.log(padrao);
    }
}