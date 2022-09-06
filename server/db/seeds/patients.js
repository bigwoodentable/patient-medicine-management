/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("patients")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("patients").insert([
        {
          patient_id: "1",
          fname: "Orlando",
          lname: "Collins",
          age: 51,
          notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          status: "active",
          date_added: "2018-11-30",
        },
        {
          patient_id: "2",
          fname: "Diana",
          lname: "Watts",
          age: 31,
          notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          status: "deleted",
          date_added: "2018-11-30",
        },
        {
          patient_id: "3",
          fname: "Gretchen",
          lname: "Mills",
          age: 33,
          notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          status: "active",
          date_added: "2018-11-30",
        },
        {
          patient_id: "4",
          fname: "Brad",
          lname: "Fernandez",
          age: 25,
          notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          status: "active",
          date_added: "2018-11-30",
        },
        {
          patient_id: "5",
          fname: "Guadalupe",
          lname: "Stevenson",
          age: 19,
          notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          status: "active",
          date_added: "2018-11-30",
        },
        {
          patient_id: "6",
          fname: "Wang",
          lname: "Lee",
          age: 64,
          notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          status: "active",
          date_added: "2018-11-30",
        },
        {
          patient_id: "7",
          fname: "Brooke",
          lname: "Roberts",
          age: 71,
          notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          status: "active",
          date_added: "2018-11-30",
        },
        {
          patient_id: "8",
          fname: "Jamie",
          lname: "Greer",
          age: 42,
          notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          status: "active",
          date_added: "2018-11-30",
        },
        {
          patient_id: "9",
          fname: "Jessie",
          lname: "Robbins",
          age: 57,
          notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          status: "active",
          date_added: "2018-11-30",
        },
      ])
    })
}
