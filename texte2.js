const express = require('express')
const server = express()

const { soma, subtracao } = require('./texte')

const PORT = 8000

server.get('/soma', (req,res) => {
    let resultado =  soma(req.query.a, req.query.b)
    res.send(`aqui teu resutado -> ${resultado} ` )
})

server.listen(PORT, () => {
    console.log(`server iniciando na porta ${PORT}`)

})