var http = require('http');
var url = require('url');

var port = process.argv[2];

var server = http.createServer(function (req, res) {
    var parsed = url.parse(req.url, true);
    var query = parsed.query.iso;
    var date = new Date(query);
    var respObject = {}

    if (parsed.pathname === '/api/parsetime') {
        respObject['hour'] = date.getHours();
        respObject['minute'] = date.getMinutes();
        respObject['second'] = date.getSeconds();
    }

    if (parsed.pathname === '/api/unixtime') {
        respObject['unixtime'] = date.getTime();
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(respObject))

});
server.listen(port);