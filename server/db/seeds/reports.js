/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("reports")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("reports").insert([
        {
          report_id: 1,
          date_added: "3/12/2019",
          diagnosis: "stomach ache",
          prescription_price: 10,
          prescription_number: 7,
          total_costs: 10,
          total_profit: 7,
          patient_id: 4,
        },
        {
          report_id: 2,
          date_added: "2/04/2022",
          diagnosis: "head ache",
          prescription_price: 15.5,
          prescription_number: 3,
          total_costs: 10,
          total_profit: 7,
          patient_id: 4,
        },
        {
          report_id: 3,
          date_added: "7/02/2019",
          diagnosis: "heart ache",
          prescription_price: 12,
          prescription_number: 5,
          total_costs: 10,
          total_profit: 7,
          patient_id: 4,
        },
        {
          report_id: 47,
          date_added: "9/4/2022",
          diagnosis:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          prescription_price: 80,
          prescription_number: 8,
          total_costs: 152.8,
          total_profit: 487.2,
          patient_id: 4,
        },
        {
          report_id: 48,
          date_added: "9/4/2022",
          diagnosis:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          prescription_price: 90,
          prescription_number: 4,
          total_costs: 59.76,
          total_profit: 300.24,
          patient_id: 1,
        },
        {
          report_id: 49,
          date_added: "9/4/2022",
          diagnosis:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
          prescription_price: 15,
          prescription_number: 3,
          total_costs: 41.82,
          total_profit: 3.18,
          patient_id: 2,
        },
        {
          report_id: 50,
          date_added: "9/4/2022",
          diagnosis:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
          prescription_price: 110,
          prescription_number: 10,
          total_costs: 989.9,
          total_profit: 110.10000000000002,
          patient_id: 3,
        },
        {
          report_id: 51,
          date_added: "9/4/2022",
          diagnosis: "",
          prescription_price: 200,
          prescription_number: 5,
          total_costs: 252,
          total_profit: 748,
          patient_id: 5,
        },
        {
          report_id: 52,
          date_added: "9/4/2022",
          diagnosis:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
          prescription_price: 100,
          prescription_number: 3,
          total_costs: 236.55,
          total_profit: 63.44999999999999,
          patient_id: 6,
        },
        {
          report_id: 53,
          date_added: "9/4/2022",
          diagnosis: "",
          prescription_price: 10,
          prescription_number: 5,
          total_costs: 57.3,
          total_profit: -7.3,
          patient_id: 7,
        },
        {
          report_id: 54,
          date_added: "9/4/2022",
          diagnosis: "",
          prescription_price: 250,
          prescription_number: 3,
          total_costs: 224.25,
          total_profit: 525.75,
          patient_id: 8,
        },
        {
          report_id: 55,
          date_added: "9/4/2022",
          diagnosis: "",
          prescription_price: 20,
          prescription_number: 4,
          total_costs: 61.4,
          total_profit: 18.6,
          patient_id: 7,
        },
        {
          report_id: 56,
          date_added: "9/4/2022",
          diagnosis:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
          prescription_price: 100,
          prescription_number: 5,
          total_costs: 114.5,
          total_profit: 385.5,
          patient_id: 7,
        },
        {
          report_id: 57,
          date_added: "9/4/2022",
          diagnosis:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
          prescription_price: 30,
          prescription_number: 20,
          total_costs: 239,
          total_profit: 361,
          patient_id: 7,
        },
        {
          report_id: 59,
          date_added: "9/4/2022",
          diagnosis:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
          prescription_price: 40,
          prescription_number: 10,
          total_costs: 56,
          total_profit: 344,
          patient_id: 2,
        },
        {
          report_id: 60,
          date_added: "9/4/2022",
          diagnosis:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
          prescription_price: 30,
          prescription_number: 7,
          total_costs: 4.97,
          total_profit: 205.03,
          patient_id: 2,
        },
      ])
    })
}
