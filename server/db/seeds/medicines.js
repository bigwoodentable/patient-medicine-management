/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('medicines')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('medicines').insert([
        { name: 'med1', code: '111' },
        { name: 'med2', code: '222' },
        { name: 'med3', code: '333' },
        { name: 'med4', code: '444' },
        { name: 'med5', code: '555' },
        { name: 'med6', code: '666' },
      ])
    })
}
