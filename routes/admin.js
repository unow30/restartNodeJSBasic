const express = require('express');

const router = express.Router();

app.get('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="post"><input type="text" name="title"><button type="submit">Add Product</button></form>')
});

app.post('/product', (req, res)=>{
    console.log(req.body);

    res.redirect('/');
});

module.exports = router;