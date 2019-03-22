exports.up = knex =>
    knex.schema.createTable('users', table => {
        table.string('id', 50)
        .primary()
        .notNullable()
        table.string('first_name').notNullable()
        table.string('last_name').notNullable()
        table.string('role').notNullable()
        table.string('email')
    })


exports.down = knex => knex.schema.dropTableIfExists('users')