
const booksDatabase = [
    {
        id: 1,
        title: "A Metamorfose",
        author: "Franz Kafka",
        category: "Ficção Absurdista",
        cover: "imagens/metamorfose.jpg",
        edition: "Edição Português",
        year: "1915",
        synopsis: "Na metamorfose (Die Verwandlung, em alemão) é uma novela escrita por Franz Kafka, publicada pela primeira vez em 1915. Nessa obra, Kafka descreve o caixeiro viajante Gregor Samsa, que abandona as suas vontades e desejos para sustentar a família e pagar a dívida dos pais. Numa certa manhã, Gregor acorda metamorfoseado num inseto monstruoso.",
        buyLink: "https://a.co/d/7Se3pSw"
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        category: "Ficção Distópica",
        cover: "imagens/1984.jpg",
        edition: "Edição Português",
        year: "1949",
        synopsis: "Publicada originalmente em 1949, a distopia futurista 1984 é um dos romances mais influentes do século XX, um inquestionável clássico moderno. Lançada poucos meses antes da morte do autor, é uma obra magistral que ainda se impõe como uma poderosa reflexão ficcional sobre a essência nefasta de qualquer forma de poder totalitário.",
        buyLink: "https://a.co/d/dzmtaLa"
    },
    {
        id: 3,
        title: "Crime e Castigo",
        author: "Fiódor Dostoiévski",
        category: "Romance Psicológico",
        cover: "imagens/crimecastigo.jpg",
        edition: "Edição Português",
        year: "1866",
        synopsis: "Publicado em 1866, Crime e castigo é a obra mais célebre de Fiódor Dostoiévski. Neste livro, Raskólnikov, um jovem estudante, pobre e desesperado, perambula pelas ruas de São Petersburgo até cometer um crime que tentará justificar por uma teoria: grandes homens, como César ou Napoleão, foram assassinos absolvidos pela História.",
        buyLink: "https://a.co/d/aPqQ8RI"
    },
    {
        id: 4,
        title: "O mito de Sísifo",
        author: "Albert Camus",
        category: "Filosofia",
        cover: "imagens/sisifo.jpg",
        edition: "Edição Português",
        year: "1942",
        synopsis: "O autor faz um retrato do mundo em que vivemos e do dilema enfrentado pelo homem contemporâneo: “Ou não somos livres e o responsável pelo mal é Deus todo-poderoso, ou somos livres e responsáveis, mas Deus não é todo-poderoso.” Quando Camus publicou O mito de Sísifo, em 1942, em plena Segunda Guerra Mundial, o mundo parecia mesmo absurdo. A guerra, a ocupação da França, o triunfo aparente da violência e da injustiça, tudo se opunha de forma brutal e desmentida à ideia do universo racional. Os deuses que condenaram Sísifo a empurrar incessantemente uma pedra até o alto da montanha, de ela tornava a cair, caracterizaram um trabalho inútil e sem esperança que podia exprimir a situação contemporânea.",
        buyLink: "https://a.co/d/8i1eYIc"
    },
    {
        id: 5,
        title: "Guerra e paz",
        author: "Liev Tolstói",
        category: "Romance",
        cover: "imagens/guerraepaz.jpg",
        edition: "Edição Português",
        year: "1867",
        synopsis: "Guerra e paz é a obra-prima de Liev Tolstói e retrata a sociedade russa antes e durante a invasão de Napoleão Bonaparte e seu exército à Rússia. Os reflexos da guerra são aprofundados em duas famílias aristocratas: Rostov e Bolkónski. O medo e a miséria do povo se contrastam com bailes realizados pela nobreza. Em um cenário bélico, religioso e incerto, o enredo disseca as jogadas de poder e seus impactos na sociedade, enquanto deixa transparecer as fraquezas da humanidade.",
        buyLink: "https://a.co/d/asXu058"
    }
];

function loadBooks() {
    const bookContainer = document.getElementById('bookContainer');
    bookContainer.innerHTML = '';

    booksDatabase.forEach(book => {
        const bookCard = `
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img src="${book.cover}" class="card-img-top" alt="Capa de ${book.title}">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text"><strong>Autor:</strong> ${book.author}</p>
                        <p class="card-text"><strong>Categoria:</strong> ${book.category}</p>
                        <a href="detalhes-livro.html?id=${book.id}" class="btn btn-danger">Visualizar</a>
                    </div>
                </div>
            </div>
        `;
        bookContainer.innerHTML += bookCard;
    });
}


function getBookById(id) {
    return booksDatabase.find(book => book.id == id);
}


document.addEventListener('DOMContentLoaded', function() {

    if (document.getElementById('bookContainer')) {
        loadBooks();
        
        document.getElementById('searchInput').addEventListener('input', function() {
            const term = this.value.toLowerCase();
            const filteredBooks = booksDatabase.filter(book => 
                book.title.toLowerCase().includes(term) || 
                book.author.toLowerCase().includes(term)
            );
            renderFilteredBooks(filteredBooks);
        });
    }
});

function renderFilteredBooks(books) {
    const bookContainer = document.getElementById('bookContainer');
    bookContainer.innerHTML = '';

    if (books.length === 0) {
        bookContainer.innerHTML = `
            <div class="col-12">
                <div class="alert alert-warning">Nenhum livro encontrado.</div>
            </div>
        `;
        return;
    }

    books.forEach(book => {
        const bookCard = `
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img src="${book.cover}" class="card-img-top" alt="Capa de ${book.title}">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text"><strong>Autor:</strong> ${book.author}</p>
                        <a href="detalhes-livro.html?id=${book.id}" class="btn btn-danger">Visualizar</a>
                    </div>
                </div>
            </div>
        `;
        bookContainer.innerHTML += bookCard;
    });
}
