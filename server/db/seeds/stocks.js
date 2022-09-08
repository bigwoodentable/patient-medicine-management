const { randomNum, randomCost } = require("../helper.js")
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
        {
          total_quantity: 15,
          med_name: "Paracetamol",
          code: "N02BE01",
          cost: randomCost(),
        },
        {
          total_quantity: 23,
          med_name: "Ibuprofen",
          code: "M01AE01",
          cost: randomCost(),
        },
        {
          total_quantity: randomNum(),
          med_name: "Codeine",
          code: "R05DA04",
          cost: randomCost(),
        },
        {
          total_quantity: 11,
          med_name: "Asprin",
          code: "N02BA01",
          cost: randomCost(),
        },
        {
          total_quantity: randomNum(),
          med_name: "Bisoprolol",
          code: "C07AB07",
          cost: randomCost(),
        },
        {
          total_quantity: randomNum(),
          med_name: "Atenolol",
          code: "C07AB03",
          cost: randomCost(),
        },
        {
          total_quantity: randomNum(),
          med_name: "Digoxin",
          code: "C01AA05",
          cost: randomCost(),
        },
        {
          total_quantity: randomNum(),
          med_name: "Amiodarone",
          code: "C01BD01",
          cost: randomCost(),
        },
        {
          total_quantity: randomNum(),
          med_name: "Amoxicillin",
          code: "J01CA04",
          cost: randomCost(),
        },
        {
          total_quantity: randomNum(),
          med_name: "Meropenem",
          code: "J01DH02",
          cost: randomCost(),
        },
        {
          total_quantity: randomNum(),
          med_name: "Vancomycin",
          code: "J01XA01",
          cost: randomCost(),
        },
        {
          total_quantity: randomNum(),
          med_name: "Warfarin",
          code: "B01AA03",
          cost: randomCost(),
        },
        {
          total_quantity: randomNum(),
          med_name: "Rivaroxaban",
          code: "B01AF01",
          cost: randomCost(),
        },
        {
          total_quantity: randomNum(),
          med_name: "Apixaban",
          code: "B01AF02",
          cost: randomCost(),
        },
        {
          total_quantity: randomNum(),
          med_name: "Enoxaparin",
          code: "B01AB05",
          cost: randomCost(),
        },
        {
          total_quantity: randomNum(),
          med_name: "Phenytoin",
          code: "N03AB02",
          cost: randomCost(),
        },
        {
          total_quantity: randomNum(),
          med_name: "Levetiracetam",
          code: "N03AX14",
          cost: randomCost(),
        },
        {
          total_quantity: randomNum(),
          med_name: "Gabapentin",
          code: "N03AX12",
          cost: randomCost(),
        },
        {
          total_quantity: randomNum(),
          med_name: "Clonazepam",
          code: "N03AE01",
          cost: randomCost(),
        },
        {
          total_quantity: randomNum(),
          med_name: "Cyclizine",
          code: "R06AE03",
          cost: randomCost(),
        },
        {
          total_quantity: randomNum(),
          med_name: "Ondansetron",
          code: "A04AA01",
          cost: randomCost(),
        },
        {
          total_quantity: randomNum(),
          med_name: "Metoclopramide",
          code: "A03FA01",
          cost: randomCost(),
        },
        {
          total_quantity: randomNum(),
          med_name: "Prochlorperazine",
          code: "N05AB04",
          cost: randomCost(),
        },
        {
          total_quantity: randomNum(),
          med_name: "Ramipril",
          code: "C09BX03",
          cost: randomCost(),
        },
        {
          total_quantity: randomNum(),
          med_name: "Doxazosin",
          code: "C02CA04",
          cost: randomCost(),
        },
        {
          total_quantity: randomNum(),
          med_name: "Candesartan",
          code: "C09CA06",
          cost: randomCost(),
        },
        {
          total_quantity: randomNum(),
          med_name: "Losartan",
          code: "C09CA01",
          cost: randomCost(),
        },
        {
          total_quantity: randomNum(),
          med_name: "Metformin",
          code: "A10BA02",
          cost: randomCost(),
        },
        {
          total_quantity: randomNum(),
          med_name: "Insulin",
          code: "A10AD01",
          cost: randomCost(),
        },
        {
          total_quantity: randomNum(),
          med_name: "Gliclazide",
          code: "A10BB09",
          cost: randomCost(),
        },
        {
          total_quantity: randomNum(),
          med_name: "Ipratropium",
          code: "R03BB01",
          cost: randomCost(),
        },
        {
          total_quantity: randomNum(),
          med_name: "Tiotropium",
          code: "R03BB04",
          cost: randomCost(),
        },
        {
          total_quantity: randomNum(),
          med_name: "Furosemide",
          code: "C03CA01",
          cost: randomCost(),
        },
        {
          total_quantity: randomNum(),
          med_name: "Salbutamol",
          code: "R03CC02",
          cost: randomCost(),
        },
        {
          total_quantity: randomNum(),
          med_name: "Bumetanide",
          code: "C03CA02",
          cost: randomCost(),
        },
        {
          total_quantity: randomNum(),
          med_name: "Spironolactone",
          code: "C03DA01",
          cost: randomCost(),
        },
      ])
    })
}
