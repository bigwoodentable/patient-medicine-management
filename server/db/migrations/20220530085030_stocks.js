/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("stocks", (table) => {
    table.string("code")
    table.string("med_name")
    table.decimal("cost", 8, 2)
    table.integer("total_quantity")
    // table.string('med_name').references('med_name').inTable('medicines')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("stocks")
}
