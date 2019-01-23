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
