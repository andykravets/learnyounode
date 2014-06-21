var fs = require('fs');

path = process.argv[2];
filter = process.argv[3];

fs.readdir(path, function(err, files){
    if (err) throw err;
    for(i=0; i<files.length; i++){
        if(files[i].toString().indexOf(filter)>0)
            console.log(files[i]);
    }
});
