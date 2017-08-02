
exports.up = function(knex, Promise) {

    return Promise.all([

        knex.schema.createTable('users', function(table) {
            table.increments('uid').primary();
            table.string('username').notNullable();
            table.string('password').notNullable();
            table.string('token').notNullable();
            table.timestamp('created_at').defaultTo(knex.fn.now());
        }),

        knex.schema.createTable('posts', function(table){
            table.increments('id').primary();
            table.text('title').notNullable();
            table.text('body').notNullable();
            table.string('author').notNullable();
            table.string('image_url');
            table.timestamp('created_at').defaultTo(knex.fn.now());
        })

    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('users'),
        knex.schema.dropTable('posts')
    ])
};
