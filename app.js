// var config= require('./config');

// import * as MongoClient from "mongodb";
var MongoClient = require('mongodb');

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aboutRoute = require('./routes/about');
var basicRoute = require('./routes/basic');

var app = express();

app.locals.points = "8713";
app.locals.videodata = require('./videodata');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', basicRoute);
// app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about', aboutRoute);
app.use('/basic', basicRoute);

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





var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/animals', function (err, client) {
    if (err) {
      console.log('error!! inside if');
        throw err;
    }

    var db = client.db('animals')

    db.collection('mammals').find().toArray(function (err, result) {
        if (err) {
            console.log('error inside db collection !! inside if');
            throw err;
        }
        console.log("connected to database....");
        console.log(result)
    })
})