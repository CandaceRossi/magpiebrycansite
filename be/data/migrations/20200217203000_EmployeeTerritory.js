
exports.up = function (knex) {
    return knex.schema.createTable('employee_territory', col => {
        col.integer('employee_id')
            .unsigned()
            .notNullable()
            .references('employee_id')
            .inTable('employee')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        col.integer('territory_id')
            .unsigned()
            .notNullable()
            .references('territory_id')
            .inTable('territory')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        col.primary(['employee_id', 'territory_id']);
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('employee_territory');
};
