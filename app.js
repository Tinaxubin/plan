var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan')

const loggerStream = require('./utils/log')

console.log('服务已经启动')
console.log('当前分支：', process.env.NODE_ENV)

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

morgan.token('time', function(req, res) {
  let date = new Date()
  return date.toLocaleString()
})
morgan.format('logFormat', ':time :method :url :status :res[content-length] - :response-time ms')
app.use(morgan('logFormat', {stream: loggerStream}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
  res.send(false);
});

module.exports = app;
