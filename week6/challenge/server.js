var express = require('express');
var port = process.env.PORT || 3000;

var app = express();


app.get('/', function(request, response) {
    response.end();
});

app.get('/:filename', function(request, response) {
    console.log(request.params.filename);
    response.send(request.send)
});

app.listen(port, function(){
    console.log('Server is up and running...' + port)
})