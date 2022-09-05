/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("stocks")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("stocks").insert([
        { total_quantity: 13, med_name: "白扁豆", code: "B0030", cost: 13.9 },
        { total_quantity: 45, med_name: "百合", code: "B0080", cost: 8.14 },
        {
          total_quantity: 66,
          med_name: "白花蛇舌草",
          code: "B0100",
          cost: 7.83,
        },
        { total_quantity: 111, med_name: "敗醬草", code: "B0120", cost: 10.42 },
      ])
    })
}
