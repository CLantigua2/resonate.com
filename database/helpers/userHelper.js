const db = require('../dbConfig')
const uuid = require('uuid/v4')

// get list of all users
const getUsers = () => {
    return db('users')
}

// get single user by user id
const getUser = id => {
    return db('users').where({id}).first()
}

// add a single user
const addUser = async user => {
    const newUser = { id: uuid(), ...user}
    await db('users').insert(newUser)
    return newUser
}

// update a single user by id
const updateUser = (userId, updates ) => {
    return db('users as u').where({ 'u.id': userId}).update(updates)
}

// delete a single user by id
const deleteUser = userId => {
    return db('users as u').where({ 'u.id': userId }).del()
}