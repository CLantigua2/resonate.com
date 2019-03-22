const {
  generateUser
} = require('../utils/generateData')

const users = []

for (let i = 0; i < 50; i++) {
  users.push(generateUser())
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        users
      ]);
    });
};
