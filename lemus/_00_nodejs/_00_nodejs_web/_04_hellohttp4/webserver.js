var http = require("http");
var port = 3000;
var serverUrl = "localhost";

var server = http.createServer(function(req, res) {

  console.log("Request: " + req.url);
  
  var now = new Date();
  var html = "<p>Hello World, the time is " + now + ".</p>";
  res.end(html);

});

console.log("Listening at " + serverUrl + ":" + port);
server.listen(process.env.PORT, process.env.IP);//.listen(8888, '127.0.0.1');