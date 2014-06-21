var http = require('http');
var bl = require('bl')

var url = process.argv[2];

http.get(url, function (resp) {
    var all;
    resp.setEncoding('utf8');
    resp.pipe(bl(function (err, data) {
        if (err) throw err;
        all = data.toString();
    }));
    resp.on('end', function (end) {
        console.log(all.split('').length);
        console.log(all);
    });


});
