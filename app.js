const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended:false}));

//url안에 경로에 적힌 구문이 있다면 해당 라우트를 필터하여 실행한다.
app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);

//잘못된 요청이 발생하면 에러표시 호출
//위 모든 routes를 확인하고 일치하는 경로가 없으면 아래 app.use를 사용할 것이다.
//'/'경로를 추가해도 된다. 기본값으로 실행한다.
app.use((req, res, next)=>{
    //status()는 어디든 사용할 수 있다.
    res.status(404).send('<h1>page no found</h1>')
})

app.listen(3000);