var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var compression = require('compression');
var helmet = require('helmet');
app.use(helmet());
var session = require('express-session');
var FileStore = require('session-file-store')(session);

// public 디렉터리 안에서 파일을 찾겠다.
app.use(express.static('public'));
// response에 body가 생긴다.
app.use(bodyParser.urlencoded({extended: false}));
// 많은 데이터의 양을 gzip 방식으로 압축했다.
app.use(compression());

app.use(session({
    secret: 'asdfasdfadsfdsaf',
    resave: false,
    saveUninitialized: true,
    store:new FileStore()
}));

// 디렉터리 파일 붙러오는 것 중복 방지
app.get('*', (req, res, next) => {
    fs.readdir('./data', (error, filelist) => {
        req.list = filelist;
        // 다음 미들웨어 실행 여부
        next();
    });
});

var indexRouter = require('./routes/index');
var topicRouter = require('./routes/topic');
var authRouter = require('./routes/auth');

app.use('/', indexRouter);
app.use('/topic', topicRouter);
app.use('/auth', authRouter);

// 404 에러 처리 끝 쪽에 사용해야됨
app.use((req, res, next) => {
    res.status(404).send('Sorry cant find that!');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
