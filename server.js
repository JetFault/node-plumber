var http = require('http');
var fs = require('fs');
var hbs = require('handlebars');

var mario = new require('./plumbers/mario.js');

var headHTML = hbs.compile(fs.readFileSync('views/head.hbs.html', 'utf-8'));

var port = 6969;

http.createServer(function (req, res) {
    var header = {
        'Connection': 'Transfer-Encoding',
        'Content-Type': 'text/html;charset=utf-8',
        'Transfer-Encoding': 'chunked'
    };
    res.writeHead(200, header);

    res.write('<h1>My Name is flush</h1>');

    res.end('</body></html>');
}).listen(port);

console.log('Listening on ' + port);
