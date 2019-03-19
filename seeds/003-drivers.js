
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
        {
          name: "tony",
          age: 22,
          email: "a12@gmail.com",
          location: "Kampala",
          price: 15.00,
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique. Cursus sit amet dictum sit amet. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Odio eu feugiat pretium nibh ipsum."
        },
        {
          name: "Max",
          age: 26,
          email: "a12b@gmail.com",
          location: "Masulita",
          price: 12.00,
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique. Cursus sit amet dictum sit amet. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Odio eu feugiat pretium nibh ipsum."
        },
        {
          name: "Paul",
          age: 26,
          email: "a13bc@gmail.com",
          location: "Kumi",
          price: 15.00,
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique. Cursus sit amet dictum sit amet. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Odio eu feugiat pretium nibh ipsum."
        },
        {
          name: "Tim",
          age: 25,
          email: "a13bc@gmail.com",
          location: "Gulu",
          price: 14.00,
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique. Cursus sit amet dictum sit amet. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Odio eu feugiat pretium nibh ipsum."
        },
        {
          name: "Josh",
          age: 30,
          email: "a13bc@gmail.com",
          location: "Hima",
          price: 11.00,
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique. Cursus sit amet dictum sit amet. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Odio eu feugiat pretium nibh ipsum."
        },

      
      ]);
    });
};
