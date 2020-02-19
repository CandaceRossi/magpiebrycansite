
exports.up = function (knex) {
    return knex.schema.createTable('category', col => {
        col.increments('category_id')
        col.varchar('category_name', 255)
            .notNullable()
        col.text('description')
            .notNullable()
        col.timestamp('create_at').defaultTo(knex.fn.now())
        col.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("category");
};
