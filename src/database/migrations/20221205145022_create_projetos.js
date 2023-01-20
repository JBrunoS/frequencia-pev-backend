/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('projetos', function(table){
        table.integer('id').primary()
        table.string('codigo_projeto')
        table.string('nome_projeto')
        table.string('email_projeto')
        table.string('senha_projeto')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
   return knex.schema.dropTable('projetos')
};