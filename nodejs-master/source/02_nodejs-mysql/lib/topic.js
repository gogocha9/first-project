var gs = require('querystring');
var url = require('url');
var db = require('./db');
var template = require('./template.js');
exports.home = (request, response) => {
    db.query(`SELECT * FROM topic`, (error, topics) => {
        var title = 'Welcome';
        var description = 'Hello, Node.js';
        var list = template.list(topics);
        var html = template.HTML(title, list,
            `<h2>${title}</h2>${description}`,
            `<a href="/create">create</a>`
        );
        response.writeHead(200);
        response.end(html);
    });
}

exports.page = (request, response) => {
    var _url = request.url;
    var queryData = url.paarse(_url, true).query;
    db.query(`SELECT * FROM topic`, (error, topics) => {
        if(error) {
            throw error;
        }
        db.query(`SELECT * FROM topic LEFT JOIN author ON topic.author_id=author.id WHERE topic.id=?`, [queryData.id], (error2, topic) => {
            if(error2) {
                throw error2;
            }
            console.log(topic);
            var title = topic[0].title;
            var description = topic[0].description;
            var list = template.list(topics);
            var html = template.HTML(title, list, 
                `<h2>${title}</h2>
                ${description}
                <p>by ${topic[0].name}</p>`,
                `<a href="/create">create</a>
                <a href="/update?id=${queryData.id}">update</a>
                <form action="delete_process" method="post">
                    <input type="hidden" name="id" value="${queryData.id}">
                    <input type="submit" value="delete">
                </form>`
            );
            response.writeHead(200);
            response.end(html);
        });
    });
}

exports.create = (request, response) => {
    db.query(`SELECT * FROM topic`, (error, topics) => {
        db.query('SELECT * FROM author', (error2, authors) => {
            var title = 'Create';
            var list = template.list(topics);
            var html = template.HTML(title, list, `
            <form action="/create_process" method="post">
                <p>
                    <input type="text" name="title" placeholder="title">
                </p>

                <p>
                    <textarea name="description" placeholder="description"></textarea>
                </p>

                <p>
                    ${template.authorSelect(authors)}
                </p>

                <p>
                    <input type="submit">
                </p>
            </form>
            `,
            `<a href="/create">create</a>`
        );
        response.writeHead(200);
        response.end(html);
        });
    });
}

exports.create_process = (request, response) => {

}