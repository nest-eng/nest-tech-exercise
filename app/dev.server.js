const { createServer } = require('https')
const { parse } = require('url')
const next = require('next')
const { readFileSync } = require('fs')
const { join } = require('path')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = process.env.PORT
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()
const opts = {
  cert: readFileSync(join(__dirname, 'certs', 'ssl.pem')),
  key: readFileSync(join(__dirname, 'certs', 'key.pem')),
}

app.prepare().then(() => {
  createServer(opts, async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)

      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  }).listen(port, (err) => {
    if (err) {
      throw err
    }

    console.log(`> Ready on https://${hostname}:${port}`)
  })
})
