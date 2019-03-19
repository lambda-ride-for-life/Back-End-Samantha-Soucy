
exports.up = function(knex) {
    return knex.schema.createTable('locations', tbl => {
        tbl.increments();

        tbl
        .string("location", 200);
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('locations');
  };
