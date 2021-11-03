//JavaScript objeto endereço

//Criar um objeto endereço que contem:
//Rua
//Cidade
//CEP
//exibirEndereco(endereço)

const endereco1 = {
    Rua: 'Dona Alexandrina',
    Cidade: 'São Carlos',
    cep: 13560970
}
const endereco2 = {
    Rua: 'São Pedro',
    Cidade: 'São Carlos',
    cep: 13560980
}

exibirEndereco(endereco1);

function exibirEndereco(valor) {
    for (let chave in valor)
        console.log(chave, valor[chave]);
};