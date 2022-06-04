/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('patients', (table) => {
    table.string('patient_id').primary()
    table.string('fname')
    table.string('lname')
    table.integer('age')
    table.string('notes')
    table.string('status')
    table.date('date_added')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('patients')
}
