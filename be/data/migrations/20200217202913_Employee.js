
exports.up = function (knex) {
    return knex.schema.createTable('employee', col => {
        col.increments('employee_id');
        col.varchar('last_name', 45)
        col.varchar('first_name', 45)
            .notNullable();
        col.varchar('job_title', 45)
            .notNullable()
        col.date('birth_date', 45)
            .notNullable()
        col.date('hire_date', 45)
            .notNullable()
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
        col.varchar('reports_to', 45)
        col.timestamp('create_at').defaultTo(knex.fn.now())
        col.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("employee");
};
