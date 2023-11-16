const http = require('http')
const port = 3000
const server = http.createServer((req, res) => {
   res.write('<h1>Create webpage with NodeJS server</h1>')
   res.write('<h1>Cloud Computing - 1644</h1>')
   res.write('<h1>GCH1106 - Fall 2023</h1>')
   res.end()
})
server.listen(port, () => {
   console.log('http://localhost:' + port)
})
