const express = require('express');

const app = express(); //유용한 요청 핸들러

//모든 요청에서 실행하길 바라는 미들웨어를 만들려면 route를 '/'로 한다.
app.use('/', (req,res,next)=>{
    //이 미들웨어가 가장 먼저 실행될 것이다.
    console.log('this is always run')
    next();
})

//요청은 위에서 아래로 내려가는데, 미들웨어에서 next를 호출하지 않으면
//다음 미들웨어로 넘어가지 않는다.
app.use('/add-product', (req, res, next) => {
    console.log('In the middleware');
    res.send('<h1>add product</h1>');
    //res()실행 후 다른 responsesk next()등 하나 이상의 응답을 보내면 에러가 난다.
});

app.use('/', (req, res, next) => {
    console.log('In the middleware');
    res.send('<h1>hello express</h1>');
});


app.listen(3000);