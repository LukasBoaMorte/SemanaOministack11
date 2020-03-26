//importa o knex
const knex = require('knex');
//importa os arquivos de config de bd do arquvio knexfile
const configuration = require('../../knexfile');

//cria a conexão passando o parâmetro de desenvolvimento
const connection = knex(configuration.development);
//exporta a conexão com o bd
module.exports = connection;