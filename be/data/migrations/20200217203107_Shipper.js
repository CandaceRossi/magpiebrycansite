
exports.up = function (knex) {
    return knex.schema.createTable('shipper', col => {
        col.increments('shipper_id');
        col.varchar('company_name', 255)
        col.integer('phone')
        col.timestamp('create_at').defaultTo(knex.fn.now())
        col.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('shipper');
};
