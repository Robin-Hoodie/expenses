var express = require('express'),
    app = express(),
    port = 8080;

app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/src/app'));
app.use('/*', express.static(__dirname + '/src/app/index.html'));

app.listen(port);
console.log('App is listening on port ' + port);

