
exports.up = function (knex) {
    return knex.schema.createTable('order', col => {
        col.increments('order_id');
        col.varchar('customer_id', 255)
            .inTable('customer')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        col.varchar('employee_id', 255)
            .inTable('employee')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        col.date('order_date')
            .notNullable();
        col.date('required_date')
        col.date('shipped_date')
            .notNullable();
        col.varchar('ship_via', 255)
            .notNullable();
        col.varchar('freight', 255)
        col.varchar('ship_name', 255)
            .notNullable();
        col.varchar('ship_address', 255)
            .notNullable();
        col.varchar('ship_city', 45)
            .notNullable();
        col.varchar('ship_region', 45)
            .notNullable();
        col.varchar('ship_postal_code', 45)
            .notNullable();
        col.varchar('ship_country', 45)
            .notNullable();
        col.timestamp('create_at').defaultTo(knex.fn.now())
        col.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('order');
};
