const http = require('http')
const { soma } = require('./texte')

const PORT = 8000

//cria o server

const server = http.createServer((req,res)=>{
   let valores = req.url.replace('/', '').replace('?', '').split('&')
   let parametros = []

   for(item in valores){
        let chaveValor = valores[item].split('=')
        parametros[chaveValor[0]] = Number(chaveValor[1])
   }
   console.log(parametros)
    let resultado = soma(parametros.a, parametros.b)
    
    res.end(`aqui vai um resultado ${resultado}`) //soma serve para nada, so para texte mesmo
})
// fazer ele ouvir a porta 8000

server .listen(PORT, ()=>{
    console.log(`server iniciando na porta ${PORT}`)
    
})