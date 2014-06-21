var filter = require('./filter_module')

args = process.argv

filter(args[2], args[3], function (err, data) {
    if(err) throw err;
    data.forEach(function (elem) {
        console.log(elem);
    })
});