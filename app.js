require('dotenv').config();
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
const jwt = require('jsonwebtoken');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let cartsRouter = require('./routes/carts');
let ordersRouter = require('./routes/orders');
let vouchersRouter = require('./routes/vouchers');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/carts', cartsRouter);
app.use('/orders', ordersRouter);
app.use('/vouchers', vouchersRouter);

module.exports = app;
