var http = require('http')

var server=http.createServer(function (req,res) {
  res.setHeader("content-type","text/html")
  res.write('hello')
  res.end('hello world')
})
server.listen(8081)

console.log('hi')
