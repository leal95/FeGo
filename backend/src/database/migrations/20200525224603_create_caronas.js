
exports.up = function(knex) {
    return knex.schema.createTable('caronas', function(table){ 
        table.increments();

        table.string('origem').notNullable();
        table.string('destino').notNullable();
        table.decimal('hora',2).notNullable();
        table.decimal('minuto',2).notNullable();
        table.decimal('dia',2).notNullable();
        table.decimal('mes',2).notNullable();
        table.decimal('ano',4).notNullable();

        table.string('usuario_email').notNullable();

        table.foreign('usuario_email').references('email').inTable('usuarios');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('caronas');
};
