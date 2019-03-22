const { users } = require('../utils/generateData.js')

exports.seed = async (knex) => {
    const data = await knex('users')
        .truncate()
        .then(() => {
            // Inserts seed entries
            // list generates 25 fake users
            return knex('users').insert(users)
        })

    return data
}