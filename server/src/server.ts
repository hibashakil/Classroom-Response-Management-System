/// <reference path="../typings/index.d.ts" />

import express = require('express');
import BaseRoutes = require("./config/routes/Routes");
import bodyParser = require("body-parser");

import path = require('path');
var jwt    = require('jsonwebtoken');
var port: number = process.env.PORT || 8000;
var env:string = process.env.NODE_ENV || 'developement';

var app = express();

app.set('port', port);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/app', express.static(path.resolve(__dirname, '../client/app')));
app.use('/libs', express.static(path.resolve(__dirname, '../client/libs')));

// for system.js to work. Can be removed if bundling.
app.use(express.static(path.resolve(__dirname, '../client')));
app.use(express.static(path.resolve(__dirname, '../../node_modules')));

//make websockets work here to connect to c# 
import WebSocket = require('ws');
var http = require('http');
var port1 : number = process.env.PORT || 1234;
var WebSocketServer = WebSocket.Server;

var server2 = new WebSocketServer({port: port1});
import CourseRepository = require("./app/repository/CourseRepository");

server2.on('connection', ws => {
    console.log('connection established');
    ws.on('message', message => {
        try {
            // var course_id = 123; //MUST NOT BE HARDCODED?
            // var attendanceCode: Number = 0;
            // var _courserepository = new CourseRepository();
            // _courserepository.getAttendanceCode(course_id, (error, result) => {
            //     if (error) {
            //         console.log("error");
            //     } else {
            //         // console.log("result ..." + result);
            //     }
            // });
            console.log("message is : " + message);
        } catch (e) {
            console.error(e.message);
        }
    });
    // gws = ws

//ATTENDANCE FOR MONTH OBJECT
//ws.send(JSON.stringify([{present: 25, absent: 5}]));
// ws.send(JSON.stringify([{present: 25, absent: 5},
//                         {present: 23, absent: 7},
//                         {present: 20, absent: 10},
//                         {present: 21, absent: 9},
//                         {present: 5, absent: 25},
//                         {present: 15, absent: 15}]));

// //POLL OBJECT
// function poll_function1() {
//     ws.send(JSON.stringify([{question: "What is the best Node.js tool to assure consistent style?", a: "JSLint", b: "JSHint", c: "ESLint", d: "JSCS", freq_a: 5, freq_b: 3, freq_c: 4, freq_d: 1, correct: "A"}]));
// }

// function poll_function2() {
//     ws.send(JSON.stringify([{question: "What is the best Node.js tool to assure consistent style?", a: "JSLint", b: "JSHint", c: "ESLint", d: "JSCS", freq_a: 9, freq_b: 7, freq_c: 7, freq_d: 10, correct: "A"}]));
//     function poll_function3() {
//         ws.send(JSON.stringify([{question: "What is the best Node.js tool to assure consistent style?", a: "JSLint", b: "JSHint", c: "ESLint", d: "JSCS", freq_a: 13, freq_b: 14, freq_c: 17, freq_d: 11, correct: "A"}]));
//     }

//     function poll_function4() {
//         ws.send(JSON.stringify([{question: "What is the best Node.js tool to assure consistent style?", a: "JSLint", b: "JSHint", c: "ESLint", d: "JSCS", freq_a: 15, freq_b: 19, freq_c: 20, freq_d: 13, correct: "A"}]));
//     }

//     poll_function3();
//     setTimeout(poll_function4, 4000);
// }

// poll_function1();
// setTimeout(poll_function2, 4000);


// DAILY ATTENDANCE OBJECT
function daily_att_function1(){
    ws.send(JSON.stringify([{name: "Hiba", status: "P"}]));
}

function daily_att_function2(){
    ws.send(JSON.stringify([{name: "Shiza", status: "P"}]));
    function daily_att_function3() {
        ws.send(JSON.stringify([{name: "Jeehan", status: "P"}]));
    }

    function daily_att_function4() {
        ws.send(JSON.stringify([{name: "Sara", status: "P"}]));
        function daily_att_function5() {
            ws.send(JSON.stringify([{name: "Ahmed", status: "P"}]));
        }

        function daily_att_function6() {
            ws.send(JSON.stringify([{name: "Mohammad", status: "P"}]));
        }

        daily_att_function5();
        setTimeout(daily_att_function6, 4000);
    }

    daily_att_function3();
    setTimeout(daily_att_function4, 4000);
}

daily_att_function1();
setTimeout(daily_att_function2, 400);


// // STUDENT RECORD OBJECT
// var attendance = [
//     {"name": "Hiba", "first": "P", "second": "A", "third": "A", "fourth": "A", "fifth": "A", "sixth": "A", "seventh": "A", "eighth": "A", "ninth": "A", "tenth": "A", "eleventh": "A", "twelfth": "A", "thirteenth": "A", "fourteenth": "A", "fifteenth": "A", "sixteenth": "A", "seventeenth": "A", "eighteenth": "A", "nineteenth": "A", "twentieth": "A", "twentyFirst": "A", "twentySecond": "A", "twentyThird": "A", "twentyFourth": "A", "twentyFifth": "A", "twentySixth": "A", "twentySeventh": "A", "twentyEighth": "A", "twentyNinth": "A", "thirtieth": "A" },
//     {"name": "Shiza", "first": "P", "second": "A", "third": "P", "fourth": "P", "fifth": "P", "sixth": "A", "seventh": "A", "eighth": "A", "ninth": "A", "tenth": "A", "eleventh": "A", "twelfth": "A", "thirteenth": "A", "fourteenth": "A", "fifteenth": "A", "sixteenth": "A", "seventeenth": "A", "eighteenth": "P", "nineteenth": "P", "twentieth": "P", "twentyFirst": "P", "twentySecond": "P", "twentyThird": "P", "twentyFourth": "P", "twentyFifth": "P", "twentySixth": "P", "twentySeventh": "P", "twentyEighth": "P", "twentyNinth": "P", "thirtieth": "P" },
//     {"name": "Jeehan", "first": "P", "second": "A", "third": "A", "fourth": "A", "fifth": "A", "sixth": "A", "seventh": "A", "eighth": "A", "ninth": "A", "tenth": "A", "eleventh": "A", "twelfth": "A", "thirteenth": "A", "fourteenth": "A", "fifteenth": "A", "sixteenth": "A", "seventeenth": "A", "eighteenth": "A", "nineteenth": "A", "twentieth": "A", "twentyFirst": "P", "twentySecond": "P", "twentyThird": "P", "twentyFourth": "P", "twentyFifth": "P", "twentySixth": "P", "twentySeventh": "P", "twentyEighth": "P", "twentyNinth": "P", "thirtieth": "P" }
//     ];

// ws.send(JSON.stringify(attendance));

    // ws.on('message', message => {
    //     try {
    //         // var userMessage: models.UserMessage = new models.UserMessage(message);
	// 		// broadcast(JSON.stringify(userMessage));
    //         ws.send("Heyyyyyyy");
    //         console.log(JSON.stringify(message));
    //     } catch (e) {
    //         console.error(e.message);
    //     }
    // });
});
//model in another file.Check this link jincase.
// https://www.codeproject.com/Articles/871622/Writing-a-Chat-Server-using-Node-js-TypeScript-and

// function broadcast(data: string): void {
// 	server2.clients.forEach(client => {
// 		client.send(data);
// 	});	
// };

console.log('PowerPoint Server is running on port', port1);


//new stuff for authentication
var User = require('./app/dataAccess/schemas/UserSchema')
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var localStrategy = require('passport-local' ).Strategy;
var hash = require('bcrypt-nodejs');

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false })); //
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(logger('dev'));

app.use(bodyParser.json());
app.use('/api', new BaseRoutes().routes);


// configure passport
passport.use('local', new localStrategy({
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request t
    }, function(req, username, password, done) { // callback with email and password from our form

        // find a user whose username is the same as the forms email
        // we are checking to see if the user trying to login already exists
        User.findOne({'username': username}, function(err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false);
            }
            if (user.password !== password) {
                return done(null, false);
            }
            return done(null, user);
        });
    }));

passport.serializeUser(function(user, done){
    done(null, user.username);
});

passport.deserializeUser(function(id, done) {
        User.findOne({'username': id}, function(err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false);
            }
            if (user.password !== id) {
                return done(null, false);
            }
            return done(null, user);
        });
});


///ends

var renderIndex = (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname, '../client/index.html'));
}

app.get('/*', renderIndex);

if (env === 'developement'){
    app.use(function(err, req: express.Request, res: express.Response, next: express.NextFunction) {
        console.log(err);
        res.status(err.status || 500);
        res.json({
            error: err,
            message: err.message
        });
    });
}

//make users and add to database.
//ends

// catch 404 and forward to error handler
app.use(function(req: express.Request, res: express.Response, next) {
    let err = new Error("Not Found");
    next(err);
});

// production error handler
// no stacktrace leaked to user
app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
    console.log(err);
    res.status(err.status || 500);
    res.json({
        error: {},
        message: err.message
    });
});

export { app }