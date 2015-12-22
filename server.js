var app = require('./config/express')(app);

var http = require('http').Server(app);
var express = require('express');

require('./config/database')('mongodb://rodolfo:rodolfo@ds035485.mongolab.com:35485/car-parking');

http.listen(app.get('port'), function() {
    console.log('Servidor iniciado na porta ' + app.get('port'));
    
});
                