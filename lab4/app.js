var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mobileRouter = require('./routes/mobile');

var app = express();
// 1. import "mongoose" module (to access & manage mongodb)
var mongoose = require('mongoose');
// 2. define db connection string (URI)
var uri_local = "mongodb://localhost:27017/";
var uri_cloud = "mongodb+srv://longndt:rKqPKzCxONqJTlQC@cloud-db.73hpsfj.mongodb.net/gch1106";
//Note: declare database name at the end of uri (ex: gch1106)
// 3. connect to database
mongoose.connect(uri_cloud)
  .then(() => console.log('Connect to DB succeed !'))
  .catch((err) => console.log('Connect to DB failed. ' + err));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/mobile', mobileRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
