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
        { id: 1, prescribed_quantity: 35, med_name: 'med2', report_id: 1 },
        { id: 2, prescribed_quantity: 20, med_name: 'med3', report_id: 1 },
        { id: 3, prescribed_quantity: 15, med_name: 'med2', report_id: 2 },
        { id: 4, prescribed_quantity: 15, med_name: 'med4', report_id: 2 },
      ])
    })
}
