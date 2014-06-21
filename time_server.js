var net = require('net');

var server = net.createServer(function (socket) {
    var date = new Date();
    var resp = date.getFullYear() + '-' + '0'+Number(date.getMonth()+1) + '-'+date.getDate()+' '+date.getHours()+":"+date.getMinutes();
    socket.write(resp);
    socket.write("\n");
    socket.end();
});
server.listen(process.argv[2]);

