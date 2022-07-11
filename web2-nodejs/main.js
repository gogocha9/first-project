var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer((request, response) => {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    var title = queryData.id;

    if(pathname === '/') {
        fs.readFile(`data/${queryData.id}`, 'utf8', (err, description) => {
            // response.end() 명령을 이용하면 웹 서버가 웹 브라우저의 요청에 응답할 수 있다
            var template = `
            <!doctype html>
            <html>
                <head>
                    <title>WEB1 - ${title}</title>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1><a href="index.html">WEB</a></h1>
                    <ol>
                        <li><a href="/?id=HTML">HTML</a></li>
                        <li><a href="/?id=CSS">CSS</a></li>
                        <li><a href="/?id=JavaScript">JavaScript</a></li>
                    </ol>
                    <h2>${title}</h2>
                    <p>${description}</p>
                </body>`;
            response.writeHead(200);
            response.end(template);
        });
    } else {
        response.writeHead(404);
        response.end('Not found');
    }
});
app.listen(3000);