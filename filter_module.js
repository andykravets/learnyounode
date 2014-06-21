var fs = require('fs');


module.exports = function (path, ext, calback) {
    var data = [];
    var error;
    files = fs.readdir(path, function (err, files) {
        if (err) {
            return calback(err);
        }
        for (i = 0; i < files.length; i++) {
            if (files[i].toString().indexOf(ext) > 0) {
                data.push(files[i]);
            }
        }
        calback(null, data);
    });
};

