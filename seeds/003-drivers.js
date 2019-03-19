
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('drivers').del()
    .then(function () {
      // Inserts seed entries
      return knex('drivers').insert([
        {
          name: "Pat",
          age: 25,
          email: "123@gmail.com",
          location: "Kampala",
          price: 10.00,
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique. Cursus sit amet dictum sit amet. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Odio eu feugiat pretium nibh ipsum."
        },
      
      ]);
    });
};
