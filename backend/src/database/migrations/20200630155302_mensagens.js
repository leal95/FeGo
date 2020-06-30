
exports.up = function(knex) {
    return knex.schema.createTable('mensagens', function(table){ 
        table.increments();

        table.string('mensagem').notNullable();
        table.string('destinatario').notNullable();
        table.foreign('destinatario').references('email').inTable('usuarios'); //relacionando com a chave primária do usuário
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('mensagem');
};
