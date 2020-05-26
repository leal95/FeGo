
exports.up = function(knex) {
    return knex.schema.createTable('caronas', function(table){ 
        table.increments();

        table.string('origem').notNullable();
        table.string('destino').notNullable();
        table.decimal('hora').notNullable();
        table.decimal('minuto').notNullable();
        table.decimal('dia').notNullable();
        table.decimal('mes').nullable();
        table.decimal('ano').nullable();

        table.string('usuario_email').nullable();

        table.foreign('usuario_email').references('email').inTable('usuarios');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('caronas');
};
