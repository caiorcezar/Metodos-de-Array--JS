/* const btnFiltrarLivros = document.getElementById('btnFiltrarLivrosFront');
btnFiltrarLivros.addEventListener('click', filtrarLivros); */

const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value 
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria);
    exibirLivrosNaTela(livrosFiltrados)
}