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
        {
          patient_id: 1,
          fname: 'mike',
          lname: 'lee',
          age: 51,
          notes: 'male, architect',
          status: 'active',
          date_added: '2018-11-30',
        },
        {
          patient_id: 2,
          fname: 'john',
          lname: 'chan',
          age: 31,
          notes: 'male, doctor',
          status: 'deleted',
          date_added: '2018-11-30',
        },
        {
          patient_id: 3,
          fname: 'james',
          lname: 'wong',
          age: 55,
          notes: 'male, lawyer',
          status: 'active',
          date_added: '2018-11-30',
        },
      ])
    })
}
