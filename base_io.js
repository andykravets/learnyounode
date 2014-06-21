var fs = require('fs')

var path = process.argv[2]

var buff = fs.readFileSync(path)

console.log(buff.toString().split('\n').length-1)
