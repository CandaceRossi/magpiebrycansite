
exports.up = function (knex) {
    return knex.schema.createTable('product', col => {
        col.increments('product_id');
        col.varchar('product_name', 255)
        col.varchar('supplier_id', 255)
            .inTable('supplier')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        col.varchar('category_id', 255)
            .inTable('category')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        col.integer('quantity_per_unit')
            .notNullable()
        col.varchar('unit_price', 255)
            .notNullable()
        col.varchar('unit_in_stock', 255)
        col.varchar('units_on_order', 255)
        col.varchar('reorder_level', 255)
        col.varchar('discontinued', 255)
        col.timestamp('create_at').defaultTo(knex.fn.now())
        col.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('product');
};
