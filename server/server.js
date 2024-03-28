import http from 'http'

const server = http.createServer((req, res) => {
  // TODO - add functionality, this server does not yet do anything.
})

const PORT = 3000
const HOST = 'localhost'

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`)
})
