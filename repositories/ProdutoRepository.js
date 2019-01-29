let conn;

function ProdutoRepository(connection) {
    conn = connection;
}

ProdutoRepository.prototype.listarProdutos = (callback) => {
    conn.query('SELECT * FROM livro', callback);
};

// o driver do mysql para node ja infere que todas props do obj produto 
// devem ser incluidas no set.
ProdutoRepository.prototype.create = (produto, callback) => {
    conn.query('INSERT INTO livro SET ?', produto, callback);
};

module.exports = () => ProdutoRepository;