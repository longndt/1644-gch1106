const http = require('http')
const port = 5000   //3000: default port of NodeJS
// http.createServer(function (request, respond) {
// })
const server = http.createServer((request, respond) => {
   respond.write('<h1>Web 1</h1>')
   respond.end()
})
server.listen(port)
