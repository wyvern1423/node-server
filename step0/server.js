var http = require('http')
var path = require('path')
var fs = require('fs')
var url = require('url')

function staticRoot(staticPath, req, res) {
  var pathObj = url.parse(req.url, true)

  if (pathObj.pathname === '/') {
    pathObj.pathname += 'index.html'
  } else if (pathObj.pathname === '/style') {
    pathObj.pathname = 'index.css'
  }

  var filePath = path.join(staticPath, pathObj.pathname)

  fs.readFile(filePath, 'binary', function (err, fileContent) {
    if (err) {
      console.log('404')
      console.log(err)
      res.writeHead(404, 'not found')
      res.end('<h1>404 not found</h1>')
    } else if (url.parse(req.url, true) === '/style') {
      res.writeHead(200, 'ok')
      res.setHeader('Content-Type', 'text/css')
      res.write(fileContent, 'binary')
      res.end()
    } else {
      console.log('ok')
      res.writeHead(200, 'ok')
      res.write(fileContent, 'binary')
      res.end()
    }
  })
}


var server = http.createServer(function (req, res) {
  staticRoot(path.join(__dirname, 'static'), req, res)
})

server.listen(8082)
