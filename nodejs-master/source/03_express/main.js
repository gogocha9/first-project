// console.log('Hello no deamon');
// var http = require('http');
// var url = require('url');
// const { authorSelect } = require('./lib/template');
// var topic = require('./lib/topic');
// var author = require('./lib/author');

// var app = http.createServer(function(request, response) {
//     var _url = request.url;
//     var queryData = url.parse(_url, true).query;
//     var pathname = url.parse(_url, true).pathname;

//     if(pathname === '/') {
//         if(queryData.id === undefined) {
//             topic.home(request, response);
//         } else {
//             topic.page(request, response);
//         }
//     } else if(pathname === '/create') {
//         topic.create(request, response);
//     } else if(pathname === '/create_process') {
//         topic.create_process(request, response);
//     } else if(pathname === '/update') {
//         topic.update(request, response);
//     } else if(pathname === '/update_process') {
//         topic.update_process(request, response);
//     } else if(pathname === '/search') {
//         topic.search(request, response);
//     } else if(pathname === '/delete_process') {
//         topic.delete_process(request, response);
//     } else if(pathname === '/author') {
//         author.home(request, response);
//     } else if(pathname === '/author/create_process') {
//         author.create_process(request, response);
//     } else if(pathname === '/author/update') {
//         author.update(request, response);
//     } else if(pathname === '/author/update_process') {
//         author.update_process(request, response);
//     } else if(pathname === '/author/delete_process') {
//         author.delete_process(request, response);
//     } else {
//         response.writeHead(404);
//         response.end('Not found');
//     }
// });
// app.listen(3000);

// 점심시간에 난초에 물주기

var express = require('express');
var app = express();
var fs = require('fs');
var template = require('./lib/template.js');
var path = require('path');
var sanitizeHtml = require('sanitize-html');
var qs = require('querystring');
var bodyParser = require('body-parser');
var compression = require('compression');

// response에 body가 생긴다.
app.use(bodyParser.urlencoded({extended: false}));
// 많은 데이터의 양을 gzip 방식으로 압축했다.
app.use(compression());
// 디렉터리 파일 붙러오는 것 중복 방지
app.get('*', (req, res, next) => {
    fs.readdir('./data', (error, filelist) => {
        req.list = filelist;
        // 다음 미들웨어 실행 여부
        next();
    });
});

app.get('/', (req, res) => {
    var title = 'Welcome';
    var description = 'Hello, Node.js';
    var list = template.list(req.list);
    var html = template.HTML(title, list,
        `<h2>${title}</h2>${description}`,
        `<a href="/create">create</a>`
    );
    res.send(html);
});

app.get('/page/:pageId', (req, res) => {
    var filteredId = path.parse(req.params.pageId).base;
    fs.readFile(`data/${filteredId}`, 'utf8', (err, description) => {
        var title = req.params.pageId;
        var sanitizedTitle = sanitizeHtml(title);
        var sanitizedDescription = sanitizeHtml(description, {
            allowedTags:['h1']
        });
        var list = template.list(req.list);
        var html = template.HTML(sanitizedTitle, list,
            `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`,
            `<a href="/create">create</a>
            <a href="/update/${sanitizedTitle}">update</a>
            <form action="/delete_process" method="post">
                <input type="hidden" name="id" value="${sanitizedTitle}">
                <input type="submit" value="delete">
            </form>`
        );
        res.send(html);
    });
});

app.get('/create', (req, res) => {
    var title = 'WEB - create';
    var list = template.list(req.list);
    var html = template.HTML(title, list,`
        <form action="/create_process" method="post">
            <p>
                <input type="text" name="title" placeholder="title">
            </p>

            <p>
                <textarea name="description" placeholder="description"></textarea>
            </p>

            <p>
                <input type="submit">
            </p>
        </form>
    `,``);
    res.send(html);
});

app.post('/create_process', (req, res) => {
    var post = req.body;
    var title = post.title;
    var description = post.description;
    fs.writeFile(`data/${title}`, description, 'utf8', (err) => {
        res.redirect('/');
    });
});

app.get('/update/:pageId', (req, res) => {
    var filteredId = path.parse(req.params.pageId).base;
    fs.readFile(`data/${filteredId}`, 'utf8', (err, description) => {
        var title = req.params.pageId;
        var list = template.list(req.list);
        var html = template.HTML(title, list,
            `
            <form action="/update_process" method="post">
                <input type="hidden" name="id" value="${title}">
                <p>
                    <input type="text" name="title" placeholder="title" value="${title}">
                </p>

                <p>
                    <textarea name="description" placeholder="description">${description}</textarea>
                </p>

                <p>
                    <input type="submit">
                </p>
            </form>
            `,
            `<a href="/create">create</a> <a href="/update/${title}">update</a>`
        );
        res.send(html);
    });
});

app.post('/update_process', (req, res) => {
    var post = req.body;
    var id = post.id;
    var title = post.title;
    var description = post.description;
    fs.rename(`data/${id}`, `data/${title}`, (error) => {
        fs.writeFile(`data/${title}`, description, 'utf8', (err) => {
            res.redirect(`/?id=${title}`);
        });
    });
});

app.post('/delete_process', (req, res) => {
    var post = req.body;;
    var id = post.id;
    var filteredId = path.parse(id).base;
    fs.unlink(`data/${filteredId}`, (error) =>{ 
        res.redirect('/');
    });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
