/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('participantes', function(table){
      table.increments('id').primary()
      table.string('br')
      table.string('nome')
      table.string('dia_nascimento')
      table.string('mes_nascimento')
      table.string('ano_nascimento')
      table.boolean('status')
      table.string('faixa')
      table.integer('id_projeto')
  
      table.foreign('id_projeto').references('id').inTable('projetos')
  
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('participantes')
  };