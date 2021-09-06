const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", '*');
    next();
})

let contatos = [
    {id: 1, nome: "Edney", tipo: "email", valor: "edney@mail.com"},
    {id: 2, nome: "Giselle", tipo: "celular", valor: "11955554444"},
    {id: 3, nome: "Nadine", tipo: "residencial", valor: "residencial teste"},
    {id: 4, nome: "Marjorie", tipo: "linkedin", valor: "linkedin teste"},
    {id: 5, nome: "Draco", tipo: "endereco", valor: "rua teste"}
];

app.get("/api/contatos/:id", (req, res) => {
    const id = req.params.id; // obtem o pathParam    
    const contato = contatos.find(c => c.id == id);
    res.json(contato);
});

app.get("/api/contatos/", (req, res) => {
    const valornome = req.query.nome;
    const tipo = req.query.tipo;
    const valor = req.query.valor;
    let contatosFiltrado = JSON.parse(JSON.stringify(contatos));

    if (valornome) {
        contatosFiltrado = contatosFiltrado.filter(c => c.nome.toLowerCase().includes(nome.toLowerCase()));
    }

    if (tipo) {
        contatosFiltrado = contatosFiltrado.filter(c => c.tipo.toLowerCase().includes(tipo.toLowerCase()));
    }

    if (valor) {
        contatosFiltrado = contatosFiltrado.filter(c => c.valor.toLowerCase().includes(valor.toLowerCase()));
    }

    res.json(contatosFiltrado);
})

app.post("/api/contatos/", (req, res) => {
    const contato = req.body;

    if (!contato || !contato.nome || !contato.tipo || !contato.valor) {
        return res.status(400).json({message: 'o contato informado no body é inválido'});
    }

    const id = contatos.length + 1;
    contato.id = id;

    contatos.push(contato);

    res.json(contato);
})

app.put("/api/contatos/", (req, res) => {
    const contato = req.body;

    if (!contato || !contato.id) {
        return res.status(400).json({result: false, message: 'id contato nao informado'});
    }

    let contatoAtualizar = contatos.find(c => c.id == contato.id);

    if (!contatoAtualizar) {
        return res.status(400).json({result: false, message: 'o contato não existe'});
    }

    let result = false;

    if (contato.nome) {
        contatoAtualizar.nome = contato.nome;
        result = true;
    }

    if (contato.tipo) {
        contatoAtualizar.tipo = contato.tipo;
        result = true;
    }

    if (contato.valor) {
        contatoAtualizar.valor = contato.valor;
        result = true;
    }

    const message = result ? 'contato atualizado' : 'não existem dados para serem atualizados';

    res.json({result, message});
})


app.delete("/api/contatos/:id", (req, res) => {
    const id = req.params.id;

    const totalSizeBefore = contatos.length;

    if (id) {
        contatos = contatos.filter(c => c.id != id);
    }

    const totalSizeAfter = contatos.length;
    const result = totalSizeBefore > totalSizeAfter;
    const message = result ? 'contato removido com sucesso' : 'contato não existe';

    res.json({result, message});
});


app.post("/api/token/", (req, res) => {
    res.status(400).json("fsag");
    // console.log(req.body);   
    // res.status(200).json('sdfgsdfgsddghdfghdfgfg');
});

app.get("/api/order/:orderID", (req, res) => {
    const orderID = req.params.orderID;
    const token = req.header("Authorization");
    console.log(orderID, token);
    
    const order = {
        codigoPedido: 1234,
        idParceiro: 4545455,
        descricaoSite: 'www.souice.com.br',
        dataPedido: '10/05/2021',
        valorPedido: 125.00
    }
    
    res.status(200).json(order);
});

app.get("/api/teste/", (req, res) => {
    res.status(200).json('acorda aí - filho da P...');
});


app.post("/api/test-post-restfy/", (req, res) => {
    console.log(req.body);    
    console.log(req.headers);

    req.body.received = 'request received sucessfully';

    res.status(201).json(req.body);
});

app.listen(3000, () => {
    console.log('crud contaBancaria is working');   
});
