
exports.up = function (knex) {
    return knex.schema.createTable('order_detail', col => {
        col.increments('order_detail_id');
        col.integer('order_id')
            .inTable('order')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        col.integer('product_id')
            .inTable('product')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        col.date('order_date')
            .notNullable();
        col.varchar('unit_price', 255)
            .notNullable();
        col.integer('quantity')
            .notNullable();
        col.varchar('discount', 255)
        col.timestamp('create_at').defaultTo(knex.fn.now())
        col.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('order_detail');
};
