/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('frequencia', function(table){
        table.increments().primary()
        table.integer('id_participante')
        table.integer('id_projeto')
        table.integer('id_professor')
        table.string('nome_turma')
        table.string('turno_turma')
        table.string('mes')
        table.string('dia')
        table.string('ano')
        table.string('objetivo')
        table.string('descricao')
        table.boolean('status')

        table.foreign('id_projeto').references('id').inTable('projetos')
        table.foreign('id_participante').references('id').inTable('participantes')
        table.foreign('id_professor').references('id').inTable('professor')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
   return knex.schema.dropTable('frequencia')
};