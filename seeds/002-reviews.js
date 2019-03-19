
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        { driver_id: 14,
          name: 'Pat',
          title: 'Nice service',
          location: 'Kampala',
          review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique. Cursus sit amet dictum sit amet. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Odio eu feugiat pretium nibh ipsum.',
          date: 'March 19rd 2019'},
       
      ]);
    });
};
