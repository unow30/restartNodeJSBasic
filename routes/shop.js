const express = require('express');

const router = express.Router();

//get 요청만 받는다.
app.get('/', (req, res, next) => {
    res.send('<h1>hello express</h1>');
});

module.exports = router;