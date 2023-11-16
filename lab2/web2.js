const http = require('http')
const fs = require('fs')        //fs: file system
const port = 5000
const server = http.createServer((req, res) => {
   fs.readFile('hello.html', (err, data) => {
      if (err)
         console.error(err)
      else {
         res.write(data)
         res.end()
      }
   })
})
server.listen(port, () => {
   console.log(`http://localhost:${port}`)
})