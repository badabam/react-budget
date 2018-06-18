const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  const base = __dirname + '/build'
  if (req.method === 'GET') {
    const url = req.url === '/' ? '/index.html' : req.url
    const path = base + url
    console.log('path', path)
    fs.exists(path, exists => {
      if (exists) {
        fs.readFile(path, 'utf8', (err, data) => {
          res.end(data)
        })
      }
    })
  }
})

const port = 3001
server.listen(port, () => {
  console.log(`Listening at port ${port}`)
})
