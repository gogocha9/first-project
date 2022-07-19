var mysql = require('mysql');
var db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'opentutorials',
    // 여러개 sql문 한번에 실행 가능 여부
    // multipleStatements:true,
});
db.connect();
module.exports = db;