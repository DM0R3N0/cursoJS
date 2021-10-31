//Velocidade ma 70km/h
//A cada 5km acima do limite perde 1 ponto na cnh
//Math.floor()
//Caso ponos maior que 12 "Carteira suspensa"

verificarVelocidade(180);

function verificarVelocidade(velocidade) {
    const velocidadeMax = 70;
    const kmPorPonto = 5;
    if (velocidade <= velocidadeMax)

        console.log('Velocidade OK')
    else {
        const pontos = Math.floor((velocidade - velocidadeMax) / kmPorPonto);
        if (pontos >= 12)
            console.log('Pontos ', pontos, 'CNH SUSPENSA');
        else
            console.log('Pontos ', pontos);
    }
}


/*
verificarVelocidade(140);

function verificarVelocidade(velocidade) {


    if (velocidade <= 70) {
        console.log('Velocidade ok');
    } else if (velocidade > 70 && velocidade <= 75) {
        console.log('1 pontos na CNH')
    } else if (velocidade > 75 && velocidade <= 80) {

        console.log('2 pontos na CNH')
    } else if (velocidade > 80 && velocidade <= 85) {

        console.log('3 pontos na CNH')
    } else if (velocidade > 85 && velocidade <= 90) {

        console.log('4 pontos na CNH')
    } else if (velocidade > 90 && velocidade <= 95) {

        console.log('5 pontos na CNH')
    } else if (velocidade > 95 && velocidade <= 100) {

        console.log('6 pontos na CNH')
    } else if (velocidade > 100 && velocidade <= 105) {

        console.log('7 pontos na CNH')
    } else if (velocidade > 105 && velocidade <= 110) {

        console.log('8 pontos na CNH')
    } else if (velocidade > 110 && velocidade <= 115) {

        console.log('9 pontos na CNH')
    } else if (velocidade > 115 && velocidade <= 120) {

        console.log('10 pontos na CNH')
    } else if (velocidade > 120 && velocidade <= 125) {

        console.log('11 pontos na CNH')
    } else if (velocidade > 125) {

        console.log('12 pontos na CNH ')
        alert('CNH SUSPENSA')
    }
}*/