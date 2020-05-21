var url = require('url')
var http = require('http')

var server = http.createServer(function (request, response) {
  var parsedUrl = url.parse(request.url, true)
  var path = request.url
  var query = ''
  if (path.indexOf('?') >= 0) {
    query = path.substring(path.indexOf('?'))
  }
  var pathNoQuery = parsedUrl.pathname
  var queryObject = parsedUrl.query
  var method = request.method

  console.log('HTTP路径为\n' + path)
  if (path === '/') {
    response.write('Hi\n')
    response.end()
  } else if (path === '/index') {
    response.setHeader('Content-Type', 'text/html')
    response.write('<!DOCTYPE>\n<html>' +
      '<head><link rel="stylesheet" href="/style">' +
      '</head><body>' +
      '<h1>hello</h1>' +
      '<script src="/script"></script>' +
      '</body></html>')
    response.end()
  } else if (path === '/style') {
    response.setHeader('Content-Type', 'text/css')
    response.write('h1{color:#ffffff;background-color:#000000;border: 20px solid rgb(254,154,0);}')
    response.end()
  } else if (path === '/script') {
    response.setHeader('Content-Type', 'text/javascript;charset=utf-8')
    response.write('alert("这是JS")')
    response.end()
  } else {
    response.statusCode = 404
    response.end()
  }
})

server.listen(8083)
