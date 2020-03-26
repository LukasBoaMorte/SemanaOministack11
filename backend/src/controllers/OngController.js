//importa a conexão com o BD 
const connection = require('../database/connection')
//pacote de criptografia; 
const crypto = require('crypto');

//exporta obj com os métodos
module.exports = {
//Lista os Dados das Ongs Casdastradas
//Usado para verificar se os registros estão funcionado 
    async index (request, response){
        const ongs = await connection('ongs').select('*');
       return response.json(ongs);
        },
//async define função assíncrona por conta do tempo de inserção

async create (request, response){

    //return response.send('Olá, Mundo !');
    //const params= request.query;
    //const params = request.params;
    const {name,email,whatsapp,city,uf}= request.body;

    //método para gerar string aleatório para o id
    const id= crypto.randomBytes(4).toString('HEX');
  
    //insere dado em uma table
    //await espera o insert finalizar
   await connection('ongs').insert({
       id,
       name,
       email,
       whatsapp,
       city,
       uf
   });
   
   
    return response.json({
    //evento: "Semana Oministack",
    //aluno: "Lukas Bôa Morte"
    id //retorna o id que a Ong vai utilizar como login
    });
}


};