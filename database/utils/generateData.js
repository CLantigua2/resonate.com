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
    }
}

function accumulate(cb, iteration) {
	if (iteration > 0) {
		return [cb()].concat(accumulate(cb, iteration - 1));
	} else {
		return [];
	}
}

const users = accumulate(generateUser, 50)

module.exports = {
    users
}