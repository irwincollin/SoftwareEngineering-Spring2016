var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);
  if(parsedUrl.path === "/listings") {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(listingData);
  } else {
    response.writeHead(404, {"Content-Type": "text/html"});
    response.write("Bad gateway error");
  }

  response.end();
};

fs.readFile('listings.json', 'utf8', (err, data) => {
  if (err) throw err;

  var server = http.createServer(requestHandler);
  server.listen(port, function() {
    console.log('Server listening on: http://127.0.0.1:' + port);
  });

  listingData = data;
});
