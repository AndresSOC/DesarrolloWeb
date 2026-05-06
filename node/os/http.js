const http = require('node:http')

const puerto = process.env.PORT ?? 3010

const server = http.createServer((req,res) =>{
    console.log("solicitud recibida")
    res.end('Hola Mundo')
})

server.listen(puerto,()=>{
    console.log(`Servidos escuchando en el puerto:${puerto}`)
})

