const express = require('express')
const routes = require('./routes')
const path = require('path')

const server = express()

/* Definir qual view engine será utilizada */
server.set('view engine', 'ejs')
/* Definir onde esta os arquivos estáticos */
server.use(express.static('public'))
/* Definir o caminho da pasta views */
server.set('views', path.join(__dirname, 'views'))

server.use(routes)

server.listen(3000, () => console.log('Running...'))