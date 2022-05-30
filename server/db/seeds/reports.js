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
          id: 1,
          date: '2018-11-29T00:00:00.000Z',
          diagnosis: 'stomach ache',
          patient_id: 1,
        },
        {
          id: 2,
          date: '2018-11-29T00:00:00.000Z',
          diagnosis: 'head ache',
          patient_id: 2,
        },
      ])
    })
}
