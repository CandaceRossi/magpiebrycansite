
exports.up = function (knex) {
    return knex.schema.createTable('territory', col => {
        col.increments('territory_id');
        col.varchar('territory_description', 255)
        col.integer('region_id')
            .inTable('region')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        col.timestamp('create_at').defaultTo(knex.fn.now())
        col.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('territory');
};
