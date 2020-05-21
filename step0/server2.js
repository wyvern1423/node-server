var http = require('http')
var fs = require('fs')

var server = http.createServer(function(req,res){
	console.log(__dirname +'/static' + req.url)
	try{
		var fileContent = fs.readFileSync(__dirname +'/static' + req.url)
		res.write(fileContent)
		console.log('success')
	}catch(e){
		res.writeHead(404,'not found')
		console.log('not found')
	}
	res.end()
})

server.listen(8081)
console.log('8081')
