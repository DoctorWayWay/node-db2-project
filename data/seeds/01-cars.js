exports.seed = async function (knex) {
  // Truncating a table deletes ALL existing entries and resets the primary keys
  await knex('cars').truncate()
  await knex('cars').insert([
    { vin: "1GMDX03E8VD266902", make: "Toyota", model: "COROLLA CROSS", mileage: "20000", title: "clean", transmission: "automatic" },
    { vin: "1HGEM21292L047875", make: "Ford", model: "ESCORT", mileage: "34000", title: "clean", transmission: "automatic" },
    { vin: "JH4DB1650NS000627", make: "Nissan", model: "PATHFINDER", mileage: "12000", title: "clean", transmission: "automatic" }
  ]);
};
