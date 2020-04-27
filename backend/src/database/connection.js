const knex = require ('knex'); //importando knex
const configuration = require('../../knexfile'); //buscar informações no knexfile

const connection = knex(configuration.development); //ligação com banco de dados via knex

module.exports = connection;