const http = require('http')
const port = 3000   //3000: default port of NodeJS
// http.createServer(function (request, respond) {
// })
const server = http.createServer((request, respond) => {
   respond.setHeader('Content-Type','text/html')
   respond.write('<h1 style="color: red;">Hello World</h1>')
   respond.write('<img src="https://www.techrepublic.com/wp-content/uploads/2022/08/learn-coding-automation-just-770x513.jpeg" width=80% height=80%>')
   respond.write('<h2>Demo web running on NodeJS server</h2>')
   respond.write('<h3>Auto reload web server with Nodemon</h3>')
   respond.write('<h4>Cloud Computing - 1644</h4>')
   respond.end()
})
server.listen(port, () => {
   console.log('Server is running at: http://localhost:' + port)
})
