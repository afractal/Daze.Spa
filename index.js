var path = require('path');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

// ...
// For all GET requests, send back index.html
// so that PathLocationStrategy can be used

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
    console.log('__dirname');
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});