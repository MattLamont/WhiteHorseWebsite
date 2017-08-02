
exports.up = function(knex, Promise) {
  return Promise.all([

      knex.schema.createTable('images', function(table){
          table.increments('id').primary();
          table.string('title').notNullable();
          table.string('image_url');
          table.timestamp('created_at').defaultTo(knex.fn.now());
      })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTable('images')
  ])
};
