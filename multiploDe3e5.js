//Criar função somar que retorna a 
//soma de todos os multiplos de 3 e 5

somar(100);

function somar(limite) {
    let multiploDe3 = 0;
    let multiploDe5 = 0;

    for (i = 0; i <= limite; i++) {
        if (i % 3 === 0)
            multiploDe3 += i;
        if (i % 5 === 0)
            multiploDe5 += i;
    }
    let soma = multiploDe3 + multiploDe5;
    console.log(soma);

};