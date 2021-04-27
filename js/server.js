const http = require('http')
const { getVideogames, getVideogame, createVideogame, updateVideogame, deleteVideogame } = require('./controllers/videogamesController')

const server = http.createServer((req, res) => {
    if (req.url === '/api/videogames' && req.method === 'GET') {
        getVideogames(req, res)
    }
    else if (req.url.match(/\/api\/videogames\/([0-9]+)/) && req.method === 'GET') {
        const id = req.url.split('/')[3]
        getVideogame(req, res, id)
    }
    else if (req.url === '/api/videogames' && req.method === 'POST') {
        createVideogame(req, res)
    }
    else if (req.url.match(/\/api\/videogames\/([0-9A-Z\-]+)/i) && req.method === 'PUT') {
        const id = req.url.split('/')[3]
        updateVideogame(req, res, id)
    }
    else if (req.url.match(/\/api\/videogames\/([0-9A-Z\-]+)/i) && req.method === 'DELETE') {
        const id = req.url.split('/')[3]
        deleteVideogame(req, res, id)
    }

    else {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Not found' }))
    }

})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => { console.log(`Server running on port ${PORT}`) })