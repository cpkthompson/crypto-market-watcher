// import bodyParser from 'body-parser';
// import cookieParser from 'cookie-parser';
// import Debug from 'debug';
// import express from 'express';
// import logger from 'morgan';
// import path from 'path';
// import socket from 'socket.io'
// // import favicon from 'serve-favicon';
//
// import index from './routes/index';
//
// const app = express();
//
// const debug = Debug('crypto-martket-watcher:app');
// app.set('views', path.join(__dirname, 'views'));
// // view engine setup
// app.set('view engine', 'ejs');
// // uncomment after placing your favicon in /public
// // app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: false
// }));
//
// app.use(cookieParser());
//
// app.use(express.static(path.join(__dirname, 'public')));
//
// app.use('/', index);
//
// // catch 404 and forward to error handler
// app.use((req, res, next) => {
//   const err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
//
// // error handler
// /* eslint no-unused-vars: 0 */
// app.use((err, req, res, next) => {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
//
// // Handle uncaughtException
// process.on('uncaughtException', (err) => {
//   debug('Caught exception: %j', err);
//   process.exit(1);
// });
//
// export default app;

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/node_modules'));

app.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/views/index.html');
});

io.on('connection', function (client) {
    console.log('Client connected...');

    client.on('m', function (data) {
            console.log(data);
        }
    );
});

server.listen(8000);
