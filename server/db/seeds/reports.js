/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('reports')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('reports').insert([
        {
          report_id: 1,
          date_added: '3/12/2019',
          diagnosis: 'stomach ache',
          patient_id: 1,
        },
        {
          report_id: 2,
          date_added: '2/04/2022',
          diagnosis: 'head ache',
          patient_id: 2,
        },
        {
          report_id: 3,
          date_added: '7/02/2008',
          diagnosis: 'heart ache',
          patient_id: 2,
        },
      ])
    })
}
