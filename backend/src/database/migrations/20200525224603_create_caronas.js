
exports.up = function(knex) {
    return knex.schema.createTable('caronas', function(table){ 
        table.increments();

        table.string('origem').notNullable();
        table.string('destino').notNullable();
        table.string('paradas').notNullable();
        table.integer('hora').notNullable();
        table.integer('minuto').notNullable();
        table.integer('dia').notNullable();
        table.integer('mes').notNullable();
        table.integer('ano').notNullable();
        table.string('modeloCarro').notNullable();
        table.string('placaCarro').notNullable();
        table.integer('preco').notNullable();
        table.integer('vagas').notNullable();
        table.string('obs').notNullable();//estruturando os dados de caronas
        //deixando cada componente do horário e da data separados, para facilitar a inserção de dados no front end

        table.string('usuario_email').notNullable();

        table.foreign('usuario_email').references('email').inTable('usuarios'); //relacionando com a chave primária do usuário
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('caronas');
};
