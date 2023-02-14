const http = require('http');

const express = require('express');

const app = express(); //유용한 요청 핸들러

app.use((req, res, next) => {
    console.log('In the middleware');
    next(); //next()를 통해 아래 app.use()미들웨어가 실행된다.
});

app.use((req, res, next) => {
    console.log('In other middleware');
});

const server = http.createServer(app);

server.listen(3000);