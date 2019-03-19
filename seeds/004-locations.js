
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        { location: "Kampala" },
        { location: "Masulita" },
        { location: "Nansana" },
        { location: "Oyam" },
        { location: "Kumi" },
        { location: "Fort Portal" },
        { location: "Bushenyi" },
        { location: "Abim " },
        { location: "Adjumani" },
        { location: "Alebtong" },
        { location: "Amolatar" },
        { location: "Amuria " },
        { location: "Amuru" },
        { location: "Apac" },
        { location: "Arua " },
        { location: "Bombo" },
        { location: "Budaka " },
        {location: "Bugembe "},
       
      ]);
    });
};
