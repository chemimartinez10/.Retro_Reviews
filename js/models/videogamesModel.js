let videogames = require('../data/videogames.json')
const { writeDataToFile } = require('../utils')
const { v4: uuidv4 } = require('uuid')

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(videogames)
    })
}
function findById(id) {
    return new Promise((resolve, reject) => {
        const videogame = videogames.find(p => p.id === id)
        resolve(videogame)
    })
}
function create(videogame) {
    return new Promise((resolve, reject) => {
        newVideogame = { id: uuidv4(), ...videogame }
        videogames.push(newVideogame)
        writeDataToFile('./js/data/videogames.json', videogames)
        resolve(newVideogame)

    })
}
function update(id, videogame) {
    return new Promise((resolve, reject) => {
        const index = videogames.findIndex((p) => p.id === id)
        videogames[index] = { id, ...videogame }
        writeDataToFile('./js/data/videogames.json', videogames)
        resolve(videogames[index])

    })
}
function remove(id) {
    return new Promise((resolve, reject) => {
        videogames = videogames.filter((p) => p.id !== id)
        writeDataToFile('./js/data/videogames.json', videogames)
        resolve()

    })
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
}