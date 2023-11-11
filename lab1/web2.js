const http = require('http')
http.createServer((req, res) => {
   //res.end('<h1>Cloud computing</h1>')
   res.setHeader('Content-Type', 'application/json')
   res.write('[{ "country": "vietnam", "capital": "hanoi" }, { "name": "ronaldo", "nationality": "portugal" }]')
   res.end()
}).listen(3000)