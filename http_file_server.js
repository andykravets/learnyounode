var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var path = process.argv[3];

console.log(path);

var server = http.createServer(function (req, res) {
    var stream = fs.createReadStream(path);
    stream.pipe(res);
});
server.listen(port);

