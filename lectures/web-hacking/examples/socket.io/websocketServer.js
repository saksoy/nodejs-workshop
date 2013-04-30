var io = require('socket.io').listen(3000);

io.sockets.on('connection', function (socket) {

    //event an den client emitten
    socket.emit('growl', { name : "godziii", growl : 'BOOOARR' });

    //auf events hören, die der client emitted
    socket.on('growlBack', function (data) {
        console.log(data.name + " growled back with " + data.growl);
    });
});