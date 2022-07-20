var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var sanitizeHtml = require('sanitize-html');
var template = require('../lib/template.js');

var authData = {
    email:'gogocha9@naver.com',
    password:'cha02099!',
    nickname:'egoing'
}

router.get('/login', (req, res) => {
    var title = 'WEB - login';
    var list = template.list(req.list);
    var html = template.HTML(title, list,`
        <form action="/auth/login_process" method="post">
            <p><input type="text" name="email" placeholder="email"></p>
            <p><input type="password" name="pwd" placeholder="password"></p>
            <p><input type="submit" value="login"></p>
        </form>
    `,``);
    res.send(html);
});

router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        res.redirect('/');
    });
});

router.post('/login_process', (req, res) => {
    var post = req.body;
    var email = post.email;
    var password = post.pwd;
    if(email === authData.email && password === authData.password) {
        req.session.is_logined = true;
        req.session.nickname = authData.nickname;
        res.redirect(`/`);
    } else {
        res.send('Who?');
    }
});

// router.get('/create', (req, res) => {
//     var title = 'WEB - create';
//     var list = template.list(req.list);
//     var html = template.HTML(title, list,`
//         <form action="/topic/create_process" method="post">
//             <p>
//                 <input type="text" name="title" placeholder="title">
//             </p>

//             <p>
//                 <textarea name="description" placeholder="description"></textarea>
//             </p>

//             <p>
//                 <input type="submit">
//             </p>
//         </form>
//     `,``);
//     res.send(html);
// });

// router.post('/create_process', (req, res) => {
//     var post = req.body;
//     var title = post.title;
//     var description = post.description;
//     fs.writeFile(`data/${title}`, description, 'utf8', (err) => {
//         res.redirect(`/topic/${title}`);
//     });
// });

// router.get('/update/:pageId', (req, res) => {
//     var filteredId = path.parse(req.params.pageId).base;
//     fs.readFile(`data/${filteredId}`, 'utf8', (err, description) => {
//         var title = req.params.pageId;
//         var list = template.list(req.list);
//         var html = template.HTML(title, list,
//             `
//             <form action="/topic/update_process" method="post">
//                 <input type="hidden" name="id" value="${title}">
//                 <p>
//                     <input type="text" name="title" placeholder="title" value="${title}">
//                 </p>

//                 <p>
//                     <textarea name="description" placeholder="description">${description}</textarea>
//                 </p>

//                 <p>
//                     <input type="submit">
//                 </p>
//             </form>
//             `,
//             `<a href="/topic/create">create</a> <a href="/topic/update/${title}">update</a>`
//         );
//         res.send(html);
//     });
// });

// router.post('/update_process', (req, res) => {
//     var post = req.body;
//     var id = post.id;
//     var title = post.title;
//     var description = post.description;
//     fs.rename(`data/${id}`, `data/${title}`, (error) => {
//         fs.writeFile(`data/${title}`, description, 'utf8', (err) => {
//             res.redirect(`/topic/${title}`);
//         });
//     });
// });

// router.post('/delete_process', (req, res) => {
//     var post = req.body;;
//     var id = post.id;
//     var filteredId = path.parse(id).base;
//     fs.unlink(`data/${filteredId}`, (error) =>{ 
//         res.redirect('/');
//     });
// });

// router.get('/:pageId', (req, res, next) => {
//     var filteredId = path.parse(req.params.pageId).base;
//     fs.readFile(`data/${filteredId}`, 'utf8', (err, description) => {
//         if(err) {
//             next(err);
//         } else {
//             var title = req.params.pageId;
//             var sanitizedTitle = sanitizeHtml(title);
//             var sanitizedDescription = sanitizeHtml(description, {
//                 allowedTags:['h1']
//             });
//             var list = template.list(req.list);
//             var html = template.HTML(sanitizedTitle, list,
//                 `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`,
//                 `<a href="/topic/create">create</a>
//                 <a href="/topic/update/${sanitizedTitle}">update</a>
//                 <form action="/topic/delete_process" method="post">
//                     <input type="hidden" name="id" value="${sanitizedTitle}">
//                     <input type="submit" value="delete">
//                 </form>`
//             );
//             res.send(html);
//         }
//     });
// });

module.exports = router;