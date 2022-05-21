const Videogame = require('../models/videogamesModel')
const { getPostedData } = require('../utils')

//@desc Find all videogames
async function getVideogames(req, res) {
    try {
        const videogames = await Videogame.findAll()

        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(videogames))
    } catch (error) {
        console.log(error)
    }
}
//@desc Find a specific videogame by id
async function getVideogame(req, res, id) {
    try {
        const videogame = await Videogame.findById(id)

        if (!videogame) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Videogame not found' }))
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(videogame))
        }
    } catch (error) {
        console.log(error)
    }
}

//@desc create new videogame
async function createVideogame(req, res) {
    try {
        const body = await getPostedData(req)
        const { name, description, price } = JSON.parse(body)

        const videogame = {
            name,
            description,
            price
        }
        const newVideogame = await Videogame.create(videogame)

        res.writeHead(201, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify(newVideogame))


    } catch (error) {
        console.log(error)
    }
}
//@ Update videogames
async function updateVideogame(req, res, id) {
    try {
        const videogame = await Videogame.findById(id)
        if (!videogame) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Videogame not found' }))
        } else {
            const body = await getPostedData(req)
            const { name, description, price } = JSON.parse(body)

            const videogameData = {
                name: name || videogame.name,
                description: description || videogame.description,
                price: price || videogame.price
            }
            const updVideogame = await Videogame.update(id, videogameData)

            res.writeHead(200, { 'Content-Type': 'application/json' })
            return res.end(JSON.stringify(updVideogame))
        }
    } catch (error) {
        console.log(error)
    }
}
//@ Delete videogames
async function deleteVideogame(req, res, id) {
    try {
        const videogame = Videogame.findById(id)
        if (!videogame) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Videogame not found' }))
        } else {
            await Videogame.remove(id)

            res.writeHead(200, { 'Content-Type': 'application/json' })
            return res.end(JSON.stringify({ message: `Videogame ${id} removed` }))
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    getVideogames,
    getVideogame,
    createVideogame,
    updateVideogame,
    deleteVideogame
}