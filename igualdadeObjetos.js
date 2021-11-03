//Igualdade entre objetos

//Criar 2 obletos e comparar se tem proporiedades 
//iguais e se a referencia dele apontam para o mesmo local de memoria

function Endereco(rua, cidade, cep) {
    this.rua = rua,
        this.cidade = cidade,
        this.cep = cep
};

const end1 = new Endereco('São Paulo', 'São Carlos', 13560970);
const end2 = new Endereco('São Paulo', 'São Carlos', 13560971);
const end3 = end1;

function saoIguais(end1, end2) {
    //comparar se propriedades são iguais
    return end1.rua === end2.rua &&
        end1.cidade === end2.cidade &&
        end1.cep === end2.cep

};
console.log(saoIguais(end1, end2));



function enderecoMemoriaIguais(end1, end2) {
    //comparar se a referencia do objeto aponta para o mesmo local de memoria
    return end1 === end2;

};
console.log(enderecoMemoriaIguais(end1, end3));