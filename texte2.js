const http = require('http')
const { soma } = require('./texte')
const { subtracao } = require('./texte')
const url = require('url')
const PORT = 8000

//cria o server

const server = http.createServer((req, res) => {
    const urlcapturada = url.parse(req.url, true)
    const { query, pathname } = urlcapturada
    let resultado = 0
    if(pathname === './soma'){
        resultado = soma(Number(query.a), Number(query.b))
    }else if(pathname === './subtracao'){
        resultado = subtracao(Number(query.a), Number(query.b))
    }else{
        res.statusCode(404).end('pagina nao encontada')
    }  

    console.log(urlcapturada)
    res.end(`aqui vai um resultado ${resultado}`)
})
// fazer ele ouvir a porta 8000

server.listen(PORT, () => {
    console.log(`server iniciando na porta ${PORT}`)

})