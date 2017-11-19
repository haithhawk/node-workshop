var http = require('http');

var message = 'I am so happy to be partof the workshop'
function handler(request , response){
  var method = request.method;
  console.log(method);
var endpoint = request.url;
console.log(endpoint);
response.writeHead(200 , {"Content-Type":"text/html"});
response.write(message);
response.end();
}
var server = http.createServer(handler);
server.listen(3000 , function(){
console.log("server is listening on port 3000 . ready to accept requests!");
} );
