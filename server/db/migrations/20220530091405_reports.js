/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('reports', (table) => {
    table.increments('report_id').primary()
    table.date('date_added')
    table.decimal('prescription_price', 8, 2)
    table.decimal('prescription_number', 8, 2)
    table.string('diagnosis')
    table.decimal('total_costs', 8, 2)
    table.decimal('total_profit', 8, 2)
    table.integer('patient_id')
    // table.integer('patient_id').references('patients.id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('reports')
}
