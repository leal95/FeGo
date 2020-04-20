
exports.up = function(knex) {
  return knex.schema.createTable('usuarios', function(table){
      table.string('id').primary();
      table.string('email').notNullable();
      table.string('senha').notNullable();
      table.string('ra').notNullable();
  }); //criando a tabela de Usuários
};

exports.down = function(knex) {
 return knex.schema.dropTable('usuarios');
};
