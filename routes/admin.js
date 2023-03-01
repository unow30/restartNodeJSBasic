const express = require('express');

const findRoute = require('../util/rootDir')

const router = express.Router();

//__dirname대신 path모듈을 활용한 util/path.js를 만들어 활용한다.
router.get('/add-product', (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));//rootDir에도 path를 사용하고 있어 낭비
    res.sendFile(findRoute('views','add-product.html'));
});

//이제 {주소}/admin/add-product post 요청시 아래의 라우트가 실행하게 된다.
router.post('/add-product', (req, res)=>{
    console.log(req.body);
    res.redirect('/shop');
});

module.exports = router;