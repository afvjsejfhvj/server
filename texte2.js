const http = require('http')
const { soma } = require('./texte')
const url = require('url')
const PORT = 8000

//cria o server

const server = http.createServer((req,res)=>{
    const urlcapturada = url.parse(req.url, true)
    const {query} = urlcapturada
    let resultado = soma(Number(query.a), Number(query.b))
    console.log(urlcapturada)
    res.end(`aqui vai um resultado ${resultado}`) //soma serve para nada, so para texte mesmo
})
// fazer ele ouvir a porta 8000

server .listen(PORT, ()=>{
    console.log(`server iniciando na porta ${PORT}`)
    
})