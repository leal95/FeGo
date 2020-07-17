
exports.up = function(knex) {
    return knex.schema.createTable('caronas', function(table){ 
        table.increments();

        table.string('origem').notNullable();
        table.string('destino').notNullable();
        table.string('hora').notNullable();
        table.string('minuto').notNullable();
        table.string('dia').notNullable();
        table.string('mes').notNullable();
        table.string('ano').notNullable();
        table.string('preco').notNullable();
        table.string('vagas').notNullable();
        table.string('passageiros').nullable();
        table.string('listaEspera').nullable();
        table.string('obs').nullable();
        //estruturando os dados de caronas
        //deixando cada componente do horário e da data separados, para facilitar a inserção de dados no front end

        table.string('email').notNullable();
        table.string('modeloCarro').notNullable();
        table.string('placaCarro').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('caronas');
};
