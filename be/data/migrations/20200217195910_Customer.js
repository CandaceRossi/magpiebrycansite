
exports.up = function (knex) {
    return knex.schema.createTable('customer', col => {
        col.increments('customer_id');
        col.varchar('company_name', 255)
        col.varchar('contact_name', 255)
            .notNullable();
        col.varchar('contact_title', 255)
        col.varchar('address', 255)
            .notNullable()
        col.varchar('city', 255)
            .notNullable()
        col.varchar('region', 255)
            .notNullable()
        col.varchar('postal_code', 255)
            .notNullable()
        col.varchar('', 255)
            .notNullable()
        col.timestamp('create_at').defaultTo(knex.fn.now())
        col.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function (knex) {

};
