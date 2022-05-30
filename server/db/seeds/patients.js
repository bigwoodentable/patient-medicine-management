/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('patients')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('patients').insert([
        { id: 1, patient_name: 'mike', age: 51, notes: 'male, architect' },
        { id: 2, patient_name: 'john', age: 31, notes: 'male, doctor' },
        { id: 3, patient_name: 'james', age: 55, notes: 'male, lawyer' },
      ])
    })
}
