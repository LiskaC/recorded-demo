import http from 'http'

const server = http.createServer((req, res) => {
  let requestBody = ''

  res.setHeader('Access-Control-Allow-Origin', '*')
  
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  req.on('data', (chunk) => {
    requestBody += chunk;
  });

  req.on('end', () => {
    res.writeHead(200, { 'Content-Type': 'application/json' })

    const response = {
        username: 'LISKA',
        password: 'lol Not Secure'
    }

    res.end(JSON.stringify(response))
  })
})

const PORT = 3000
const HOST = 'localhost'

server.listen(PORT, HOST, () => {
  console.info(`Server running at http://${HOST}:${PORT}/`)
})
