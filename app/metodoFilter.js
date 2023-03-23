/* const btnFiltrarLivros = document.getElementById('btnFiltrarLivrosFront');
btnFiltrarLivros.addEventListener('click', filtrarLivros); */

const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value 
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade(): filtrarPorCategoria(categoria);
    exibirLivrosNaTela(livrosFiltrados)
    if(categoria == 'disponivel'){
        const valorTotal = calcularValorTotalDisponiveis(livrosFiltrados)
        exibirValorTotalDisponiveis(valorTotal)
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDisponiveis(valorTotal){
    elementoComValorTotalDisponiveis.innerHTML = ` <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>`
}