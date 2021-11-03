//Constructor function JS

//Criar objeto postagem
//titulo, mensagem, autor, visualizações, comentários, estaAoVivo

function Postagem(titulo, mensagem, autor, visualizacoes, comentarios, estaAoVivo) {
    this.titulo = titulo,
        this.mensagem = mensagem,
        this.autor = autor,
        this.visualizacoes = 0,
        this.comentarios = [],
        this.estaAoVivo = estaAoVivo
};

const post1 = new Postagem('Titulo 1', 'Postagem 1', 'Autor 1', 10);
const post2 = new Postagem('Titulo 2', 'Postagem 2', 'Autor 1', 20, 'Comentario 2', true);
const post3 = new Postagem('Titulo 3', 'Postagem 3', 'Autor 3', 19, 'Comentario 3', false);

console.log(post2);