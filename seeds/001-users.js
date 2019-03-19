
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
        {
          username: "alarive0",
          password: "pass",
          name: "Angelina Larive",
          age: 29,
          email: "alarive0@merriam-webster.com",
          location: "Bushenyi",
          expectant_mother: true
        },
        {
          username: "tpiller3",
          password: "pass",
          name: "Tillie Piller",
          age: 30,
          email: "alarive0@merriam-webster.com",
          location: "Amuria",
          expectant_mother: true
        },
        {
          username: "adanilov5",
          password: "pass",
          name: "Angelika Danilov",
          age: 25,
          email: "adanilov5@trellian.com",
          location: "Busembatya",
          expectant_mother: true
        },
        {
          username: "rhatliffe9",
          password: "pass",
          name: "Rochell Hatliffe",
          age: 22,
          email: "rhatliffe9@columbia.edu	",
          location: "Elegu",
          expectant_mother: true
        },
      ]);
    });
};
