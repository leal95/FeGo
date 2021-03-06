
exports.up = function(knex) {
  return knex.schema.createTable('usuarios', function(table){ //criando tabela com os dados necessários
      table.string('email').primary();
      table.string('senha').notNullable();
      table.string('ra').notNullable();
      table.string('nome').notNullable();
      table.string('sobrenome').notNullable();
      table.string('numTelefone').notNullable();
      table.string('apelido').nullable();
      table.string('fumante').nullable();
      table.string('curso').nullable();
      table.string('musica').nullable();
      table.string('modeloCarro').nullable();
      table.string('placaCarro').nullable();
      table.string('corCarro').nullable();
      table.string('avaliadores').nullable();
      table.string('notaDaAvaliacao').nullable();
  }); //criando a tabela de Usuários
};

exports.down = function(knex) { //  dropar tabela
 return knex.schema.dropTable('usuarios');
};