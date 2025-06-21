document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('id');
    const container = document.getElementById('book-details');
    const book = getBookById(bookId);

    if (book) {
        container.innerHTML = `
            <div class="row">
                <div class="col-md-4 text-center">
                    <img src="${book.cover}" alt="Capa de ${book.title}" class="img-fluid shadow mb-4">
                    <div class="d-grid gap-2">
                        <a href="${book.buyLink}" target="_blank" class="btn btn-danger">
                            <i class="fas fa-shopping-cart"></i> Link na Amazon
                        </a>
                        <a href="livros.html" class="btn btn-outline-danger">
                            <i class="fas fa-arrow-left"></i> Voltar
                        </a>
                    </div>
                </div>
                <div class="col-md-8">
                    <h1>${book.title}</h1>
                    <h4 class="text-muted mb-4">${book.author}</h4>
                    
                    <div class="book-meta mb-4">
                        <span class="badge badge-dark">${book.category}</span>
                        <span class="mx-2">|</span>
                        <span>${book.edition}</span>
                        <span class="mx-2">|</span>
                        <span>Publicado em ${book.year}</span>
                    </div>

                    <h3>Sinopse</h3>
                    <p class="lead">${book.synopsis}</p>

                    
                </div>
            </div>
        `;
    } else {
        container.innerHTML = `
            <div class="alert alert-danger">
                Livro não encontrado. <a href="livros.html">Voltar ao catálogo</a>.
            </div>
        `;
    }
});
