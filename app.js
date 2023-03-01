const path = require('path')

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false}));

//정적 파일 제공 미들웨어
//사용자가 public 경로에 엑세스할 수 있다.
//확장자를 살펴보고 .css나 .js를 찾는 요청이라면 자동으로 public폴더로 포워딩해준다.
//그러므로 경로를 입력할 때 public이 포함되면 안된다.
app.use(express.static(path.join(__dirname, 'public')));

//url안에 경로에 적힌 구문이 있다면 해당 라우트를 필터하여 실행한다.
app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);

//잘못된 요청이 발생하면 에러표시 호출
//위 모든 routes를 확인하고 일치하는 경로가 없으면 아래 app.use를 사용할 것이다.
//'/'경로를 추가해도 된다. 기본값으로 실행한다.
app.use((req, res, next)=>{
    //status()는 어디든 사용할 수 있다.
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000);