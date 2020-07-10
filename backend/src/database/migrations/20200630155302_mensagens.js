
exports.up = function(knex) {
    return knex.schema.createTable('mensagens', function(table){ 
        table.increments();

        table.string('mensagem').notNullable();
        
        table.string('destinatarioEmail').notNullable();
        table.string('destinatarioNome').notNullable();

        table.string('emissarioEmail').notNullable();
        table.string('emissarioNome').notNullable();

        table.foreign('emissarioEmail').references('email').inTable('usuarios');
        table.foreign('destinatarioEmail').references('email').inTable('usuarios'); //relacionando com a chave primária do usuário
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('mensagem');
};
