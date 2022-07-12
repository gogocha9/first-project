var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

// function templateHTML(title, list, body, control) {
//     return `<!doctype html>
//     <html>
//         <head>
//             <title>WEB1 - ${title}</title>
//             <meta charset="utf-8">
//         </head>
//         <body>
//             <h1><a href="/">WEB</a></h1>
//             ${list}
//             ${control}
//             ${body}
//         </body>
//     </html>`;
// }

// function templateList(filelist) {
//     var list = '<ul>';
//     var i = 0;
//     while(i < filelist.length) {
//         list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
//         i = i + 1;
//     }
//     list = list + '</ul>';
//     return list;
// }

var template = {
    HTML:(title, list, body, control) => {
        return `<!doctype html>
        <html>
            <head>
                <title>WEB1 - ${title}</title>
                <meta charset="utf-8">
            </head>
            <body>
                <h1><a href="/">WEB</a></h1>
                ${list}
                ${control}
                ${body}
            </body>
        </html>`;
    },
    list:(filelist) => {
        var list = '<ul>';
        var i = 0;
        while(i < filelist.length) {
            list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
            i = i + 1;
        }
        list = list + '</ul>';
        return list;
    }
}

var app = http.createServer((request, response) => {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    if(pathname === '/') {
        if(queryData.id === undefined) {
            fs.readdir('./data', (error, filelist) => {
                var title = 'Welcome';
                var description = 'Hello, Node.js';
                var list = template.list(filelist);
                var html = template.HTML(title, list,
                        `<h2>${title}</h2><p>${description}</p>`,
                        `<a href="/create">Create</a>`
                    );
                response.writeHead(200);
                response.end(html);
            });
        } else {
            fs.readdir('./data', (error, filelist) => {
                fs.readFile(`data/${queryData.id}`, 'utf8', (err, description) => {
                    var title = queryData.id;
                    var list = template.list(filelist);
                    var html = template.HTML(title, list,
                        `<h2>${title}</h2><P>${description}</p>`,
                        `<a href="/create">Create</a>
                        <a href="/update?id=${title}">Update</a>
                        <form action="delete_process" method="post" onsubmit="return confirm('정말로 삭제하시겠습니까?');">
                            <input type="hidden" name="id" value="${title}">
                            <input type="submit" value="delete">
                        </form>`
                    );
                    response.writeHead(200);
                    response.end(html);
                });
            });
        }
    } else if(pathname === '/create') {
        fs.readdir('./data', (error, filelist) => {
            var title = 'WEB - Create';
            var list = template.list(filelist);
            // input type hidden 수정하는 정보와 수정하고자 하는 정보를 구분해서 전송해야한다
            var html = template.HTML(title, list, `
                <form action="/create_process" method="post">
                    <p><input type="text" name="title" placeholder="title"></p>
                    <p>
                        <textarea name="description" placeholder="description"></textarea>
                    </p>
                    <p>
                        <input type="submit">
                    </p>
                </form>
            `);
            response.writeHead(200);
            response.end(html);
        });
    }  else if(pathname === '/create_process') {
        var body = '';
        request.on('data', (data) => {
            body += data;
        });
        request.on('end', () => {
            var post = qs.parse(body);
            var title = post.title;
            var description = post.description;
            fs.writeFile(`data/${title}`, description, 'utf8', function(err) {
                // 301(영구 이동)
                // 302(임시 이동)
                response.writeHead(302, {Location: `/?id=${title}`});
                response.end();
            });
        });
    } else if(pathname === '/update') {
        fs.readdir('./data', (error, filelist) => {
            fs.readFile(`data/${queryData.id}`, 'utf8', (err, description) => {
                var title = queryData.id;
                var list = template.list(filelist);
                var html = template.HTML(title, list,
                    `<form action="/update_process" method="post">
                        <input type="hidden" name="id" value="${title}">
                        <p><input type="text" name="title" placeholder="title" value="${title}"></p>
                        <p>
                            <textarea name="description" placeholder="description">${description}</textarea>
                        </p>
                        <p>
                            <input type="submit">
                        </p>
                    </form>`,
                    `<a href="/create">Create</a> <a href="/update?id=${title}">Update</a>`
                );
                response.writeHead(200);
                response.end(html);
            });
        });
    } else if(pathname === '/update_process') {
        var body = "";
        request.on('data', (data) => {
            body = body + data;
        });
        request.on('end', () => {
            var post = qs.parse(body);
            var id = post.id;
            var title = post.title;
            var description = post.description;
            fs.rename(`data/${id}`, `data/${title}`, (error) => {
                response.writeHead(302, {Location: `/?id=${title}`});
                response.end();
            });
        });
    } else if(pathname === '/delete_process') {
        var body = "";
        request.on('data', (data) => {
            body = body + data;
        });
        request.on('end', () => {
            var post = qs.parse(body);
            var id = post.id;
            fs.unlink(`data/${id}`, (error) => {
                response.writeHead(302, {Location: '/'});
                response.end();
            })
        });
    } else {
        response.writeHead(404);
        response.end('Not found');
    }
});
app.listen(3000);