const express= require('express');
//importa as rotas para o index.js
const routes = require('./routes');
const routes =require('cors')
const app=express();

/*informar que está usando json
antes de todas as requisiç~eos manda o express ir 
no corpo da requisição converter em js senão gera undefined
na saída*/
app.use(cors());
app.use(express.json());
app.use(routes);
/*
Rotas /Recursos
Metodos HTTP:
Get: Buscar/listar uma informação do back-end
Post: Criar uma informação no back-end
Put: Alterar uma informação no back-end
Delete: Deletar informação no back-end
*/ 
/*Tipos de parâmetros
Query params:parâmetros nomeados enviados na rota após o "?"
servem para filtros, paginação 
acessados através de request.query
Route params: utilizados para identificar recursos
através de resquest.params; não pode enviar parâmetros a mais
do que esperado
Request Body: Corpo da requisição utilizado para criar ou alterar recursos

*/
/* Comunicação com BD
Drive: Select * from users
Query Builder: table('users').select('*').where()

*/


app.listen(3333);