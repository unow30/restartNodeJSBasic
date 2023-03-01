const path = require('path')

const express = require('express');

const router = express.Router();


router.get('/', (req, res, next) => {
    //sendFile()사용자에게 파일을 회신할 수 있다.
    //콘텐트 유형을 자유롭게 지정할 수 있다.
    
    //path.join으로 파일경로를 구축할 수 있다.
    //__dirname은 node.js 전역 변수로 절대 경로를 이 프로젝트 폴더로 고정해 주는 변수이다. 지금은 routes폴더를 가르키고 있다.
    //_dirname으로 윈도우, 리눅스 어느 체제에서도 작동하는 방식으로 경로를 생성해준다.
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html')); 
});

module.exports = router;