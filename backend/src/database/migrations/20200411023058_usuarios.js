
exports.up = function(knex) {
  return knex.schema.createTable('usuarios', function(table){ //criando tabela com os dados necessários
      table.string('id').primary();
      table.string('email').notNullable();
      table.string('senha').notNullable();
      table.string('ra').notNullable();
      table.string('nome').notNullable();
      table.string('sobrenome').notNullable();
      table.string('numTelefone').notNullable();
  }); //criando a tabela de Usuários
};

exports.down = function(knex) { //  dropar tabela
 return knex.schema.dropTable('usuarios');
};
