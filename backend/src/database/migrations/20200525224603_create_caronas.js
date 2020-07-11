
exports.up = function(knex) {
    return knex.schema.createTable('caronas', function(table){ 
        table.increments();

        table.string('origem').notNullable();
        table.string('destino').notNullable();
        table.integer('hora').notNullable();
        table.integer('minuto').notNullable();
        table.integer('dia').notNullable();
        table.integer('mes').notNullable();
        table.integer('ano').notNullable();
        table.integer('preco').notNullable();
        table.integer('vagas').notNullable();
        table.integer('passageiros').notNullable();
        table.string('obs').notNullable();
        //estruturando os dados de caronas
        //deixando cada componente do horário e da data separados, para facilitar a inserção de dados no front end

        table.string('usuario_email').notNullable();

        table.foreign('usuario_email').references('email').inTable('usuarios'); 
        
        table.string('carro').notNullable();

        table.foreign('carro').references('modeloCarro').inTable('usuarios');
        
        table.string('placa').notNullable();

        table.foreign('placa').references('placaCarro').inTable('usuarios');//relacionando com a chave primária do usuário
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('caronas');
};
