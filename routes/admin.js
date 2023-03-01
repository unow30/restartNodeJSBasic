const path = require('path');

const express = require('express');

const router = express.Router();

//app.js에서 admin/을 라우터 경로로 추가하였다.
//이제 {주소}/admin/add-product get 요청시 아래의 라우트가 실행하게 된다.
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

//이제 {주소}/admin/add-product post 요청시 아래의 라우트가 실행하게 된다.
router.post('/add-product', (req, res)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;