const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// initialize our express app
const app = express();

// Set up mongoose connection
let dev_db_url = 'mongodb://bhoechie:123456@localhost:23619/products_tokocrypto';
mongoose.connect(dev_db_url);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const product = require('./routes/product.route'); // Imports routes
const order = require('./routes/order.route'); // Imports routes

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//initialize routes
app.use('/products', product);
app.use('/order', order);

let port = 8000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});