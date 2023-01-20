/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('professor', function (table) {
        table.increments('id').primary().index()
        table.string('nome')
        table.string('email')
        table.string('senha')
        table.string('telefone')
        table.string('funcao')
        table.boolean('status')
        table.integer('id_projeto').unsigned()

        table.foreign('id_projeto').references('id').inTable('projetos')

    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('professor')
};
