var http = require('http');
var bl = require('bl');

arr = process.argv.slice(2, 5);
var resultSet = {};
arr.forEach(function (url) {
    http.get(url, function (responce) {
        responce.setEncoding('utf8');
        responce.pipe(bl(function (err, data) {
            resultSet[url] = data.toString();
        }));
        responce.on('end', function (end) {
            if(Object.keys(resultSet).length == arr.length){
               arr.forEach(function (data) {
                   console.log(resultSet[data]);
               });
           }
        });
    });
});


