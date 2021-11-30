const express = require('express');
const app = express();

const server = app.listen(3000, () => {
    console.log('start server : localhost:3000');
});

const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'example.org',
    user            : 'bob',
    password        : 'secret',
    database        : 'my_db',
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); 
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
    res.render('index.html')
})

app.get('/about', function(req, res) {
    res.render('about.html')
})

app.get('/db', function(req, res) {
    pool.getConnection(function(err, connection) {
        if(err) throw err;
        connection.query('SELECT * FROM Test', function(error, results, flelds) {
            res.send(JSON.stringify(results));
            console.log('results', results);
            connection.release();
            if(error) throw error;
        });
    });
})