
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: "Tina Conner",
          password: "pass",
          name: "Tina",
          age: 33,
          email: "1234@gmail.com",
          location: "Kampala",
          expectant_mother: true
        },
      ]);
    });
};
