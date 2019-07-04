const express = require('express');
const fs = require('fs');
const cart = require('./cartRouter');
const app = express();

app.use(express.json());
app.use('/', express.static('dist'));
app.use('/category', express.static('dist/category.html'));
app.use('/cart', express.static('dist/cart.html'));
app.use('/checkout', express.static('dist/checkout.html'));
app.use('/product', express.static('dist/single.html'));
app.use('/api/cart', cart);

app.get('/api/catalog', (req, res) => {
    fs.readFile('server/db/products.json', 'utf-8', (err, data) => {
        if(err){
            res.sendStatus(404, JSON.stringify({result: 0, text: err}));
        } else {
            res.send(data)
        }
    })
});

app.listen(3000, () => console.log('Listen on port 3000...'));