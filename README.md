# CURSO ALURA DE NODEJS 01

Branch: criando_servidor <br>
- Exemplos de como criar servidores de app simples utilizando o modulo http do node.
- Utilizacao do require
<br><br>

Branch: npm <br>
- Iniciando o projeto criando o package.json
- Instalando o express: npm install express
<br><br>

Branch: isolando_config_express <br>
- retirando as configuracoes do express do arquivo app.js
<br><br>

Branch: ejs_engine <br>
- ejs e um modulo utilizado pelo express para renderizar paginas html via javascript
- ver: views/produtos.ejs, config/express.js e app.js na config das rotas
- instalando o ejs no como uma nova dependencia do projeto: npm install ejs -save
<br><br>

Branch: isolando_rotas <br>
- Vamos remover as configuracoes das nossas rotas(urls) do arquivo principal (app.js)
- ver: app/routes/produtos.js, config/express.js
- vamos criar a pasta app e colocar os arquivos do projeto nela.
- ensinar o express a encontrar a pasta views.
<br><br>

Branch: acessando_database <br>
- Vamos conectar o node com o banco de dados mySQL.
- precisamos instalar o driver do mySql via npm:
- npm install mysql -save
- vamos montar a lista dinamicamente e exibir na tela
<br><br>

Branch: isolando_banco <br>
- Vamos uma connection factory.
- ver: app/infra/connectionFactory.js, app/routes/...
<br><br>

Branch: carregamento_modulos <br>
- Vamos utilizar uma api que vai facilitar o importacao dos nossos modulos (express-load).
- npm install express-load --save
- ver: config/express.js, app.js, app/routes/prod...
<br><br>

Branch: isolando-acesso-db <br>
- Primeiramente, foi feito uma refatoracao na aplicacao (estrutura fora do padrao)
    -> app.js passou a se chamar index.js e os comentarios foram removidos
    -> o package.json foi atualizado (compara com as branches anteriores)
    -> foi removido o express-load pois agora vamos utilizar o consign
    -> a pasta node_modules foi removida para ajustar a troca das dependencias
    -> a pasta draft foi removida
    -> o ejs tbm foi removido
    -> o express.js foi totalmente refatorado
    -> npm install consign --save
    -> algumas pastas foram adicionadas e outras removidas
    -> produto.controller.js foi modificado
- Foi adicionado um novo end point (post)
- Foi instalado a dependencia body-parser que ensina o express a converter os dados no formato desejado (no caso json)
- npm install body-parser --save
- Foi adicionado o arquivo produto.repository.js que encapsula as operacoes de acesso ao banco. Com isso, o controller foi alterado tbm
<br><br>

Branch: salvado-produto-db <br>
- criacao do produto de ponta-a-ponta (do controller ao banco)
- ver produto.controller e ProdutoRepository
- url para testar:

  curl http://localhost:3000/novo/produto -X POST -v -H "Content-type: application/json" -d '{"titulo": "meu livro", "descricao": "meu primeiro livro", "preco": 10.5}' ; echo

<br><br>

Branch: validando-entrada <br>
- Vamos adicionar novo dependencia (lib de library) para validacao: npm install express-validator --save
- Vamos ensinar o express a usar esse cara (express.js)
- Vamos criar as validacoes para o endpoint que insere um produto (produto.controller.js)

Para testar com errors
curl http://localhost:3000/novo/produto -X POST -v -H "Content-type: application/json" -d '{"titulo": "", "descricao": "meu primeiro livro", "preco": "sdf"}' ; echo

<br><br>

Branch: alterando-produto <br>
- Vamos utilizar o conceito de pathParam
- Vamos criar o put no controller
- vamos implementar as queries de read e update no repository.
<br><br>


