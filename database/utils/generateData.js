const faker = require('faker')
const uuid = require('uuid/v4')


const generateUser = ({
    user_id = uuid(),
    user_role = 'buyer'
}) => ({
    id: user_id,
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    role: user_role,
    email: faker.internet.email()
})

module.exports = {
    generateUser
}