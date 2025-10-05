import http from 'http'

const PORT = process.env.PORT || 4000

const server = http.createServer((req, res) => {
  if (req.url === '/events') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    })

    const send = () => {
     
      const payload = {
        revenue: Math.round(100000 + Math.random() * 50000),
        users: Math.round(900 + Math.random() * 500),
        churn: +(2 + Math.random() * 2).toFixed(2),
      }
      res.write(`data: ${JSON.stringify(payload)}\n\n`)
    }

    const id = setInterval(send, 1000)
    
    send()

    req.on('close', () => {
      clearInterval(id)
    })
  } else {
    res.writeHead(404)
    res.end()
  }
})

server.listen(PORT, () => {
  console.log(`SSE mock server running at http://localhost:${PORT}/events`)
})
