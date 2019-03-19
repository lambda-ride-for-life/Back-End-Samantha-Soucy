
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
        {
          username: "ErinSummers",
          password: "pass",
          name: "Erin Summers",
          age: 28,
          email: "12345@gmail.com",
          location: "Kampala",
          expectant_mother: true
        },
        {
          username: "LindaRobasco",
          password: "pass",
          name: "Linda Robasco",
          age: 30,
          email: "123@gmail.com",
          location: "Masulita",
          expectant_mother: true
        },
        {
          username: "SunnyDay",
          password: "pass",
          name: "Sunny Day",
          age: 30,
          email: "12@gmail.com",
          location: "Nansana",
          expectant_mother: true
        },
        {
          username: "RosalindMccarthy",
          password: "pass",
          name: "Rosalind McCarthy",
          age: 33,
          email: "abc@gmail.com",
          location: "Oyam",
          expectant_mother: true
        },
        {
          username: "RosaleenWalsh",
          password: "pass",
          name: "Rosaleen Walsh",
          age: 32,
          email: "abcd@gmail.com",
          location: "Kumi",
          expectant_mother: true
        },
        {
          username: "ChantalNielson",
          password: "pass",
          name: "Chantal Nielson",
          age: 35,
          email: "abcde@gmail.com",
          location: "Fort Portal",
          expectant_mother: true
        },
        {
          username: "PeggyMars",
          password: "pass",
          name: "Peggy Mars",
          age: 29,
          email: "ab21e@gmail.com",
          location: "Bushenyi",
          expectant_mother: true
        },
      ]);
    });
};
