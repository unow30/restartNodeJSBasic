// const http = require('http');

const express = require('express');

const app = express(); //유용한 요청 핸들러

app.use((req, res, next) => {
    console.log('In the middleware');
    next(); //next()를 통해 아래 app.use()미들웨어가 실행된다.
});

app.use((req, res, next) => {
    console.log('In other middleware');
    
    //유틸리티 함수 send
    res.send('<h1>hello express</h1>');
});

// const server = http.createServer(app);
// server.listen(3000);

//더 짧은 방법
//lib > application.js 확인
app.listen(3000);


//lib > application.js 확인
// app.listen = function listen(){
// 	var server = http.createServer(this);
// 	return server.listen.apply(server, arguments);
// }

//http를 이미 실행해주고 있다. 위에 임포트한 http는 필요없어졌다.