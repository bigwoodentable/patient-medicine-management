/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("prescriptions")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("prescriptions").insert([
        {
          id: 89,
          prescribed_quantity: 35,
          med_name: "Paracetamol",
          report_id: "1",
        },
        {
          id: 90,
          prescribed_quantity: 20,
          med_name: "Ibuprofen",
          report_id: "1",
        },
        {
          id: 91,
          prescribed_quantity: 15,
          med_name: "Amoxicillin",
          report_id: "2",
        },
        {
          id: 92,
          prescribed_quantity: 15,
          med_name: "Meropenem",
          report_id: "2",
        },
        {
          id: 93,
          prescribed_quantity: 5,
          med_name: "Insulin",
          report_id: "47",
        },
        {
          id: 94,
          prescribed_quantity: 10,
          med_name: "Ondansetron",
          report_id: "47",
        },
        {
          id: 95,
          prescribed_quantity: 15,
          med_name: "Metoclopramide",
          report_id: "47",
        },
        {
          id: 96,
          prescribed_quantity: 5,
          med_name: "Rivaroxaban",
          report_id: "48",
        },
        {
          id: 97,
          prescribed_quantity: 5,
          med_name: "Ondansetron",
          report_id: "48",
        },
        {
          id: 98,
          prescribed_quantity: 7,
          med_name: "Ibuprofen",
          report_id: "48",
        },
        {
          id: 99,
          prescribed_quantity: 6,
          med_name: "Paracetamol",
          report_id: "48",
        },
        {
          id: 100,
          prescribed_quantity: 16,
          med_name: "Clonazepam",
          report_id: "48",
        },
        {
          id: 101,
          prescribed_quantity: 4,
          med_name: "Bisoprolol",
          report_id: "49",
        },
        {
          id: 102,
          prescribed_quantity: 6,
          med_name: "Ramipril",
          report_id: "49",
        },
        {
          id: 103,
          prescribed_quantity: 12,
          med_name: "Candesartan",
          report_id: "49",
        },
        {
          id: 104,
          prescribed_quantity: 17,
          med_name: "Metoclopramide",
          report_id: "50",
        },
        {
          id: 105,
          prescribed_quantity: 89,
          med_name: "Ondansetron",
          report_id: "50",
        },
        {
          id: 106,
          prescribed_quantity: 18,
          med_name: "Insulin",
          report_id: "50",
        },
        {
          id: 107,
          prescribed_quantity: 22,
          med_name: "Gabapentin",
          report_id: "50",
        },
        {
          id: 108,
          prescribed_quantity: 10,
          med_name: "Digoxin",
          report_id: "51",
        },
        {
          id: 109,
          prescribed_quantity: 35,
          med_name: "Gabapentin",
          report_id: "51",
        },
        {
          id: 110,
          prescribed_quantity: 10,
          med_name: "Phenytoin",
          report_id: "51",
        },
        {
          id: 111,
          prescribed_quantity: 35,
          med_name: "Paracetamol",
          report_id: "51",
        },
        {
          id: 112,
          prescribed_quantity: 10,
          med_name: "Losartan",
          report_id: "52",
        },
        {
          id: 113,
          prescribed_quantity: 3,
          med_name: "Spironolactone",
          report_id: "52",
        },
        {
          id: 114,
          prescribed_quantity: 15,
          med_name: "Furosemide",
          report_id: "52",
        },
        {
          id: 115,
          prescribed_quantity: 6,
          med_name: "Gabapentin",
          report_id: "52",
        },
        {
          id: 116,
          prescribed_quantity: 15,
          med_name: "Amoxicillin",
          report_id: "52",
        },
        {
          id: 117,
          prescribed_quantity: 25,
          med_name: "Phenytoin",
          report_id: "52",
        },
        {
          id: 118,
          prescribed_quantity: 1,
          med_name: "Insulin",
          report_id: "53",
        },
        {
          id: 119,
          prescribed_quantity: 3,
          med_name: "Gliclazide",
          report_id: "53",
        },
        {
          id: 120,
          prescribed_quantity: 5,
          med_name: "Warfarin",
          report_id: "53",
        },
        {
          id: 121,
          prescribed_quantity: 10,
          med_name: "Enoxaparin",
          report_id: "53",
        },
        {
          id: 122,
          prescribed_quantity: 5,
          med_name: "Ondansetron",
          report_id: "54",
        },
        {
          id: 123,
          prescribed_quantity: 10,
          med_name: "Cyclizine",
          report_id: "54",
        },
        {
          id: 124,
          prescribed_quantity: 15,
          med_name: "Salbutamol",
          report_id: "54",
        },
        {
          id: 125,
          prescribed_quantity: 55,
          med_name: "Phenytoin",
          report_id: "54",
        },
        {
          id: 126,
          prescribed_quantity: 5,
          med_name: "Ondansetron",
          report_id: "55",
        },
        {
          id: 127,
          prescribed_quantity: 10,
          med_name: "Rivaroxaban",
          report_id: "55",
        },
        {
          id: 128,
          prescribed_quantity: 15,
          med_name: "Apixaban",
          report_id: "55",
        },
        {
          id: 129,
          prescribed_quantity: 5,
          med_name: "Apixaban",
          report_id: "56",
        },
        {
          id: 130,
          prescribed_quantity: 15,
          med_name: "Enoxaparin",
          report_id: "56",
        },
        {
          id: 131,
          prescribed_quantity: 20,
          med_name: "Bisoprolol",
          report_id: "56",
        },
        {
          id: 132,
          prescribed_quantity: 3,
          med_name: "Metoclopramide",
          report_id: "57",
        },
        {
          id: 133,
          prescribed_quantity: 5,
          med_name: "Atenolol",
          report_id: "57",
        },
        {
          id: 134,
          prescribed_quantity: 10,
          med_name: "Paracetamol",
          report_id: "57",
        },
        {
          id: 135,
          prescribed_quantity: 15,
          med_name: "Clonazepam",
          report_id: "57",
        },
        {
          id: 136,
          prescribed_quantity: 2,
          med_name: "Levetiracetam",
          report_id: "57",
        },
        {
          id: 137,
          prescribed_quantity: 3,
          med_name: "Meropenem",
          report_id: "57",
        },
        {
          id: 138,
          prescribed_quantity: 5,
          med_name: "Ondansetron",
          report_id: "58",
        },
        {
          id: 139,
          prescribed_quantity: 2,
          med_name: "Metoclopramide",
          report_id: "58",
        },
        {
          id: 140,
          prescribed_quantity: 5,
          med_name: "Rivaroxaban",
          report_id: "59",
        },
        {
          id: 141,
          prescribed_quantity: 5,
          med_name: "Warfarin",
          report_id: "59",
        },
        {
          id: 142,
          prescribed_quantity: 5,
          med_name: "Digoxin",
          report_id: "59",
        },
        {
          id: 143,
          prescribed_quantity: 1,
          med_name: "Rivaroxaban",
          report_id: "60",
        },
        {
          id: 144,
          prescribed_quantity: 2,
          med_name: "Warfarin",
          report_id: "60",
        },
      ])
    })
}
