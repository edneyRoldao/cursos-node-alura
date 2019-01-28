let conn;

function ProdutoRepository(connection) {
    conn = connection;
}

ProdutoRepository.prototype.listarProdutos = (callback) => {
    conn.query('SELECT * FROM livro', callback);
};

module.exports = () => ProdutoRepository;