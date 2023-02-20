const express = require('express');
const bodyParser = require('body-parser');

const app = express(); //유용한 요청 핸들러
//이 미들웨어는 next()를 호출하여 다음 미들웨어데 도달하게 한다.
//form으로 보내는 본문을 분석해준다.
app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product', (req, res, next) => {
    //post로 form 요청 보내기 연습
    res.send('<form action="/product" method="post"><input type="text" name="title"><button type="submit">Add Product</button></form>')
});

//next 안쓸거면 생략 가능
app.use('/product', (req, res)=>{
    //리다이렉트하고 들어오는 request 데이터를 콘솔로 표시할 것이다.
    console.log(req.body);

    // '/'로 재요청이 될 것이다.
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('<h1>hello express</h1>');
});


app.listen(3000);