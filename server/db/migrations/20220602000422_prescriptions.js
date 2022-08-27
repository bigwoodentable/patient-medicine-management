/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("prescriptions", (table) => {
    table.increments().primary()
    table.integer("prescribed_quantity")
    // table.string('med_name').references('med_name').inTable('stocks')
    // table.integer('report_id').references('reports.report_id')
    table.string("med_name").references("stocks.med_name")
    table.integer("report_id").references("reports.report_id")
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("prescriptions")
}
