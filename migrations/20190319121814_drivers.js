exports.up = function(knex) {
    return knex.schema.createTable('drivers', tbl => {
        tbl.increments();

        tbl
        .string("name", 128);
        tbl
        .integer("age");
        tbl
        .string("email", 200);
        tbl
        .string("location", 200);
        tbl
        .decimal("price");
        tbl
        .text('bio');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('drivers');
  };

