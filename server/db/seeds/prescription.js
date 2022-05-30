/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('prescriptions')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('prescriptions').insert([
        { id: 1, prescribed_quantity: 35, stocks_id: 1, report_id: 1 },
        { id: 2, prescribed_quantity: 20, stocks_id: 3, report_id: 1 },
        { id: 3, prescribed_quantity: 15, stocks_id: 2, report_id: 2 },
        { id: 4, prescribed_quantity: 15, stocks_id: 3, report_id: 2 },
      ])
    })
}
