
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
        { location: "Abim" },
        { location: "Adjumani" },
        { location: "Alebtong" },
        { location: "Amolatar" },
        { location: "Amuria" },
        { location: "Amuru" },
        { location: "Apac" },
        { location: "Arua" },
        { location: "Bombo" },
        { location: "Budaka" },
        { location: "Bugiri " },
        { location: "Buikwe" },
        { location: "Bukedea" },
        { location: "Bugembe" },
        { location: "Bukomansimbi " },
        { location: "Bukungu" },
        { location: "Buliisa " },
        { location: "Bundibugyo " },
        { location: "Busembatya " },
        { location: "Dokolo " },
        { location: "Elegu " },
        { location: "Entebbe" },
        { location: "Gombe, Butambala" },
        { location: "Gulu " },
        {location: "Hima "},
       
      ]);
    });
};
