//app.js에서 위의 라우트를 require해와 연결할 것이다.

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//admin.js에서 exports한 route를 require로 가져온다.
const adminRoutes = require('./routes/admin')
//shop.js에서 exports한 route를 require로 가져온다.
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended:false}));

//분기 연결. routes안에 app.use()가 있다면 둘의 순서가 중요하다.
app.use(adminRoutes);
app.use(shopRoutes);


app.listen(3000);