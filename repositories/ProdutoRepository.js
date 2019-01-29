let conn;

function ProdutoRepository(connection) {
    conn = connection;
}

ProdutoRepository.prototype.listarProdutos = (callback) => {
    conn.query('SELECT * FROM livro', callback);
};

ProdutoRepository.prototype.create = (produto, callback) => {
    conn.query('INSERT INTO livro SET ?', produto, callback);
};

ProdutoRepository.prototype.update = (prod, callback) => {
    let query = 'UPDATE livro SET titulo = ?, descricao = ?, preco = ? WHERE id = ?';
    conn.query(query, [prod.titulo, prod.descricao, prod.preco, prod.id], callback);
};

ProdutoRepository.prototype.read = (id, callback) => {
    conn.query('SELECT * FROM livro WHERE id = ?', [id], callback);
};

module.exports = () => ProdutoRepository;
