
exports.up = function (knex) {
    return knex.schema.createTable('supplier', col => {
        col.increments('supplier_id');
        col.varchar('company_name', 255)
        col.varchar('contact_name', 255)
            .notNullable();
        col.varchar('contact_title', 255)
        col.varchar('address', 255)
            .notNullable()
        col.varchar('city', 45)
            .notNullable()
        col.varchar('region', 45)
            .notNullable()
        col.integer('postal_code')
            .notNullable()
        col.varchar('country', 45)
            .notNullable()
        col.integer('phone')
            .notNullable()
        col.integer('fax')
        col.varchar('notes', 255)
        col.timestamp('create_at').defaultTo(knex.fn.now())
        col.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('supplier');
};
