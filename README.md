Documentação do Projeto de API em Node.js
(tentativa de por em prática a construção de documentação aushsausha)

Descrição do Projeto

Este projeto é uma API RESTful desenvolvida em Node.js, utilizando o modelo MVC (Model-View-Controller) para gerenciar informações armazenadas em um banco de dados MySQL. A API permite operações CRUD (Create, Read, Update, Delete) na tabela pessoas.


Endpoints da API

GET /pessoas: Retorna todas as pessoas.
http://localhost:3000/pessoas

GET /pessoas/: Retorna uma pessoa pelo ID.
http://localhost:3000/pessoas/1

POST /pessoas: Adiciona uma nova pessoa.
http://localhost:3000/pessoas

PUT /pessoas/: Atualiza os dados de uma pessoa pelo ID.
http://localhost:3000/pessoas/1

DELETE /pessoas/: Deleta uma pessoa pelo ID.
http://localhost:3000/pessoas/1


Estrutura do Projeto

nodeapp/
├── app.js
├── routes.js
├── server.js
├── app/
│   ├── controllers/
│   │   └── PessoaController.js
│   ├── database/
│   │   └── connection.js
│   └── repositories/
│       └── PessoasRepository.js


Descrição dos Arquivos

app.js: Arquivo principal da aplicação que configura o express e define os middlewares.
routes.js: Define as rotas da aplicação.
server.js: Inicializa o servidor e o coloca para escutar em uma porta.
controllers/PessoaController.js: Controlador que contém os métodos para manipulação das requisições HTTP.
database/connection.js: Configuração da conexão com o banco de dados MySQL.
repositories/PessoasRepository.js: Repositório que contém as operações SQL para manipulação dos dados na tabela pessoas.


Dependências

express: Framework web para Node.js.
mysql: Cliente MySQL para Node.js.

Para instalar as dependências, execute:

npm install express mysql

informações sobre o Banco de Dados

    "host": "localhost",
    "port": "3306",
    "user": "root",
    "password": "root",
    "database": "testdb";


Exemplos de Requisições

GET /pessoas
curl -X GET http://localhost:3000/pessoas

GET /pessoas/
curl -X GET http://localhost:3000/pessoas/1

POST /pessoas
curl -X POST http://localhost:3000/pessoas -H "Content-Type: application/json" -d '{"nome": "João", "idade": 30, "email": "joao@example.com"}'

PUT /pessoas/
curl -X PUT http://localhost:3000/pessoas/1 -H "Content-Type: application/json" -d '{"nome": "João", "idade": 31, "email": "joao@example.com"}'

DELETE /pessoas/
curl -X DELETE http://localhost:3000/pessoas/1