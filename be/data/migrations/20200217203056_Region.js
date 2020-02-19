
exports.up = function (knex) {
    return knex.schema.createTable('region', col => {
        col.increments('region_id');
        col.varchar('region_description', 255)
        col.timestamp('create_at').defaultTo(knex.fn.now())
        col.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('region');
};
