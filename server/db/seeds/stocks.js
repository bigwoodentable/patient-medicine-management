/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('stocks')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('stocks').insert([
        { id: 1, med_name: 'med1', total_quantity: 30 },
        { id: 2, med_name: 'med2', total_quantity: 13 },
        { id: 3, med_name: 'med3', total_quantity: 44 },
        { id: 5, med_name: 'med4', total_quantity: 21 },
        { id: 6, med_name: 'med5', total_quantity: 43 },
        { id: 7, med_name: 'med6', total_quantity: 77 },
      ])
    })
}
