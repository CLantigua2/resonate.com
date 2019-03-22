const faker = require('faker')
const uuid = require('uuid/v4')

// used to generated seeded users
const generateUser = () => {
    return {
        id: uuid(),
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        role: 'user',
        email: faker.internet.email(),
        userImg: faker.image.avatar()
    }
}

const accumulate = (cb, i) => {
    i > 0 ? [cb()].concat(accumulate(cb, i - 1)) : []
}

const users = accumulate(generateUser, 50)

module.exports = {
    users
}