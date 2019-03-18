exports.up = function(knex) {
    return knex.schema.createTable('reviews', tbl => {
        tbl.increments();
        
        tbl
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users');
  

        tbl
        .string("name", 128);
        tbl
            .string("title")
        tbl
            .string("location")
        tbl
            .text("review")
        tbl
            .string("date", 128);

    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('reviews');
  };

