const path = require('path');
const express = require('express');
const compression = require('compression');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(compression());
app.use(express.static(path.join(__dirname, './build')));

app.listen(PORT, function () {
    console.log('Node app is running on port', PORT);
    console.log(__dirname);
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '/build/index.html'));
});

// // server.js
// const express = require('express');
// const app = express();
// // If an incoming request uses
// // a protocol other than HTTPS,
// // redirect that request to the
// // same url but with HTTPS
// const forceSSL = function() {
//   return function (req, res, next) {
//     if (req.headers['x-forwarded-proto'] !== 'https') {
//       return res.redirect(
//        ['https://', req.get('Host'), req.url].join('')
//       );
//     }
//     next();
//   }
// }
// // Instruct the app
// // to use the forceSSL
// // middleware
// app.use(forceSSL());
// // ...
