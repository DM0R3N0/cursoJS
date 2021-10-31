const filme1 = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Dani',
    persondagem: 'Thor'
};

const filme2 = {
    titulo: 'Dick and Jane',
    ano: 2010,
    diretor: 'Dick',
    persondagem: 'Dick Harper'
};

const filme3 = {
    titulo: 'MI8',
    ano: 2015,
    diretor: 'Paul',
    persondagem: 'Tom Cruise'
};

exibirPopriedades(filme2);

function exibirPopriedades(obj) {
    for (prop in obj)
        if (typeof obj[prop] === 'string')
            console.log(prop, obj[prop])
};