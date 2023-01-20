/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('turmas', function(table){
        table.increments('id').primary()
        table.string('nome')
        table.string('descricao')
        table.integer('id_professor')
        table.integer('id_coordenador')
        table.integer('id_participante')
        table.integer('id_projeto')
        table.string('turno')

        table.foreign('id_projeto').references('id').inTable('projetos')
        table.foreign('id_participante').references('id').inTable('participantes')
        table.foreign('id_professor').references('id').inTable('professor')
        table.foreign('id_coordenador').references('id').inTable('professor')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('turmas')
};
