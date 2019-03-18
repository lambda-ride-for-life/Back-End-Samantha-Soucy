
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();
  
        tbl
        .string('username', 200)
        .notNullable()
        .unique();
        tbl
        .string('password', 200)
        .notNullable();
        
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
        tbl
        .boolean("expectant mother").defaultTo(false);
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
  };
