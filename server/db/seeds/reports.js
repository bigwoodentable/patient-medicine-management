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
          date_added: '2018-11-29T00:00:00.000Z',
          diagnosis: 'stomach ache',
          patient_id: 1,
        },
        {
          report_id: 2,
          date_added: '2018-11-29T00:00:00.000Z',
          diagnosis: 'head ache',
          patient_id: 2,
        },
        {
          report_id: 3,
          date_added: '2018-11-29T00:00:00.000Z',
          diagnosis: 'heart ache',
          patient_id: 2,
        },
      ])
    })
}
