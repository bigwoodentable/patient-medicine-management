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
        // {
        //   prescribed_quantity: 35,
        //   med_name: '百合',
        //   report_id: 1,
        // },
        // {
        //   prescribed_quantity: 20,
        //   med_name: '白花蛇舌草',
        //   report_id: 1,
        // },
        // {
        //   prescribed_quantity: 15,
        //   med_name: '白扁豆',
        //   report_id: 2,
        // },
        // {
        //   prescribed_quantity: 15,
        //   med_name: '敗醬草',
        //   report_id: 2,
        // },
      ])
    })
}
