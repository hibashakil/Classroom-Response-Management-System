/// <reference path="../typings/index.d.ts" />
"use strict";
var express = require('express');
var BaseRoutes = require("./config/routes/Routes");
var bodyParser = require("body-parser");
var path = require('path');
var jwt = require('jsonwebtoken');
var port = process.env.PORT || 8000;
var env = process.env.NODE_ENV || 'developement';
var app = express();
exports.app = app;
app.set('port', port);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/app', express.static(path.resolve(__dirname, '../client/app')));
app.use('/libs', express.static(path.resolve(__dirname, '../client/libs')));
// for system.js to work. Can be removed if bundling.
app.use(express.static(path.resolve(__dirname, '../client')));
app.use(express.static(path.resolve(__dirname, '../../node_modules')));
//make websockets work here to connect to c# 
var WebSocket = require('ws');
var http = require('http');
var port1 = process.env.PORT || 1234;
var WebSocketServer = WebSocket.Server;
var server2 = new WebSocketServer({ port: port1 });
server2.on('connection', function (ws) {
    console.log('connection established');
    ws.on('message', function (message) {
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
        }
        catch (e) {
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
    function daily_att_function1() {
        ws.send(JSON.stringify([{ name: "Hiba", status: "P" }]));
    }
    function daily_att_function2() {
        ws.send(JSON.stringify([{ name: "Shiza", status: "P" }]));
        function daily_att_function3() {
            ws.send(JSON.stringify([{ name: "Jeehan", status: "P" }]));
        }
        function daily_att_function4() {
            ws.send(JSON.stringify([{ name: "Sara", status: "P" }]));
            function daily_att_function5() {
                ws.send(JSON.stringify([{ name: "Ahmed", status: "P" }]));
            }
            function daily_att_function6() {
                ws.send(JSON.stringify([{ name: "Mohammad", status: "P" }]));
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
var User = require('./app/dataAccess/schemas/UserSchema');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
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
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true // allows us to pass back the entire request t
}, function (req, username, password, done) {
    // find a user whose username is the same as the forms email
    // we are checking to see if the user trying to login already exists
    User.findOne({ 'username': username }, function (err, user) {
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
passport.serializeUser(function (user, done) {
    done(null, user.username);
});
passport.deserializeUser(function (id, done) {
    User.findOne({ 'username': id }, function (err, user) {
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
var renderIndex = function (req, res) {
    res.sendFile(path.resolve(__dirname, '../client/index.html'));
};
app.get('/*', renderIndex);
if (env === 'developement') {
    app.use(function (err, req, res, next) {
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
app.use(function (req, res, next) {
    var err = new Error("Not Found");
    next(err);
});
// production error handler
// no stacktrace leaked to user
app.use(function (err, req, res, next) {
    console.log(err);
    res.status(err.status || 500);
    res.json({
        error: {},
        message: err.message
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4Q0FBOEM7O0FBRTlDLElBQU8sT0FBTyxXQUFXLFNBQVMsQ0FBQyxDQUFDO0FBQ3BDLElBQU8sVUFBVSxXQUFXLHdCQUF3QixDQUFDLENBQUM7QUFDdEQsSUFBTyxVQUFVLFdBQVcsYUFBYSxDQUFDLENBQUM7QUFFM0MsSUFBTyxJQUFJLFdBQVcsTUFBTSxDQUFDLENBQUM7QUFDOUIsSUFBSSxHQUFHLEdBQU0sT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3JDLElBQUksSUFBSSxHQUFXLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztBQUM1QyxJQUFJLEdBQUcsR0FBVSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxjQUFjLENBQUM7QUFFeEQsSUFBSSxHQUFHLEdBQUcsT0FBTyxFQUFFO0FBb1BWLFdBQUcsT0FwUFE7QUFFcEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4RCxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxRSxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRTVFLHFEQUFxRDtBQUNyRCxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlELEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUV2RSw2Q0FBNkM7QUFDN0MsSUFBTyxTQUFTLFdBQVcsSUFBSSxDQUFDLENBQUM7QUFDakMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNCLElBQUksS0FBSyxHQUFZLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztBQUM5QyxJQUFJLGVBQWUsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO0FBRXZDLElBQUksT0FBTyxHQUFHLElBQUksZUFBZSxDQUFDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7QUFHakQsT0FBTyxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsVUFBQSxFQUFFO0lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUN0QyxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFBLE9BQU87UUFDcEIsSUFBSSxDQUFDO1lBQ0QsZ0RBQWdEO1lBQ2hELGtDQUFrQztZQUNsQyxrREFBa0Q7WUFDbEQsc0VBQXNFO1lBQ3RFLG1CQUFtQjtZQUNuQixnQ0FBZ0M7WUFDaEMsZUFBZTtZQUNmLGlEQUFpRDtZQUNqRCxRQUFRO1lBQ1IsTUFBTTtZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLENBQUU7UUFBQSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0gsV0FBVztJQUVmLDZCQUE2QjtJQUM3QixzREFBc0Q7SUFDdEQsb0RBQW9EO0lBQ3BELG9EQUFvRDtJQUNwRCxxREFBcUQ7SUFDckQsb0RBQW9EO0lBQ3BELG9EQUFvRDtJQUNwRCx3REFBd0Q7SUFFeEQsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QixzTkFBc047SUFDdE4sSUFBSTtJQUVKLDhCQUE4QjtJQUM5Qix1TkFBdU47SUFDdk4sa0NBQWtDO0lBQ2xDLDhOQUE4TjtJQUM5TixRQUFRO0lBRVIsa0NBQWtDO0lBQ2xDLDhOQUE4TjtJQUM5TixRQUFRO0lBRVIsd0JBQXdCO0lBQ3hCLHdDQUF3QztJQUN4QyxJQUFJO0lBRUosb0JBQW9CO0lBQ3BCLG9DQUFvQztJQUdwQywwQkFBMEI7SUFDMUI7UUFDSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRDtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEQ7WUFDSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdELENBQUM7UUFFRDtZQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkQ7Z0JBQ0ksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1RCxDQUFDO1lBRUQ7Z0JBQ0ksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvRCxDQUFDO1lBRUQsbUJBQW1CLEVBQUUsQ0FBQztZQUN0QixVQUFVLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUMsQ0FBQztRQUVELG1CQUFtQixFQUFFLENBQUM7UUFDdEIsVUFBVSxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxtQkFBbUIsRUFBRSxDQUFDO0lBQ3RCLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUdyQywyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLDRpQkFBNGlCO0lBQzVpQiw2aUJBQTZpQjtJQUM3aUIsNmlCQUE2aUI7SUFDN2lCLFNBQVM7SUFFVCx1Q0FBdUM7SUFFbkMsZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixvRkFBb0Y7SUFDdkYsK0NBQStDO0lBQzVDLGdDQUFnQztJQUNoQyxnREFBZ0Q7SUFDaEQsb0JBQW9CO0lBQ3BCLG9DQUFvQztJQUNwQyxRQUFRO0lBQ1IsTUFBTTtBQUNWLENBQUMsQ0FBQyxDQUFDO0FBQ0gsZ0RBQWdEO0FBQ2hELGlHQUFpRztBQUVqRywyQ0FBMkM7QUFDM0MsdUNBQXVDO0FBQ3ZDLHVCQUF1QjtBQUN2QixRQUFRO0FBQ1IsS0FBSztBQUVMLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFHM0QsOEJBQThCO0FBQzlCLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQ3pELElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQixJQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDNUMsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ25DLElBQUksYUFBYSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBRSxDQUFDLFFBQVEsQ0FBQztBQUN4RCxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFcEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0FBQ3hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQ3ZELEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDL0IsTUFBTSxFQUFFLGNBQWM7SUFDdEIsTUFBTSxFQUFFLEtBQUs7SUFDYixpQkFBaUIsRUFBRSxLQUFLO0NBQzNCLENBQUMsQ0FBQyxDQUFDO0FBRUosR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztBQUMvQixHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0FBQzVCLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFFdkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUMzQixHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBR3pDLHFCQUFxQjtBQUNyQixRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLGFBQWEsQ0FBQztJQUNoQyxhQUFhLEVBQUcsVUFBVTtJQUMxQixhQUFhLEVBQUcsVUFBVTtJQUMxQixpQkFBaUIsRUFBRyxJQUFJLENBQUMsOENBQThDO0NBQzFFLEVBQUUsVUFBUyxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJO0lBRXJDLDREQUE0RDtJQUM1RCxvRUFBb0U7SUFDcEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUMsRUFBRSxVQUFTLEdBQUcsRUFBRSxJQUFJO1FBQ25ELEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDUixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3QixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdCLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFUixRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVMsSUFBSSxFQUFFLElBQUk7SUFDdEMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDOUIsQ0FBQyxDQUFDLENBQUM7QUFFSCxRQUFRLENBQUMsZUFBZSxDQUFDLFVBQVMsRUFBRSxFQUFFLElBQUk7SUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUMsRUFBRSxVQUFTLEdBQUcsRUFBRSxJQUFJO1FBQzdDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDUixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3QixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdCLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDLENBQUMsQ0FBQztBQUNYLENBQUMsQ0FBQyxDQUFDO0FBR0gsT0FBTztBQUVQLElBQUksV0FBVyxHQUFHLFVBQUMsR0FBb0IsRUFBRSxHQUFxQjtJQUMxRCxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLHNCQUFzQixDQUFDLENBQUMsQ0FBQztBQUNsRSxDQUFDLENBQUE7QUFFRCxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztBQUUzQixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssY0FBYyxDQUFDLENBQUEsQ0FBQztJQUN4QixHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVMsR0FBRyxFQUFFLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjtRQUN6RixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQztRQUM5QixHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ0wsS0FBSyxFQUFFLEdBQUc7WUFDVixPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU87U0FDdkIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBRUQsaUNBQWlDO0FBQ2pDLE1BQU07QUFFTix5Q0FBeUM7QUFDekMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFTLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUFJO0lBQzlELElBQUksR0FBRyxHQUFHLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNkLENBQUMsQ0FBQyxDQUFDO0FBRUgsMkJBQTJCO0FBQzNCLCtCQUErQjtBQUMvQixHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVMsR0FBUSxFQUFFLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjtJQUM5RixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQztJQUM5QixHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ0wsS0FBSyxFQUFFLEVBQUU7UUFDVCxPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU87S0FDdkIsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUM7QUFFVyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xyXG5pbXBvcnQgQmFzZVJvdXRlcyA9IHJlcXVpcmUoXCIuL2NvbmZpZy9yb3V0ZXMvUm91dGVzXCIpO1xyXG5pbXBvcnQgYm9keVBhcnNlciA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTtcclxuXHJcbmltcG9ydCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xyXG52YXIgand0ICAgID0gcmVxdWlyZSgnanNvbndlYnRva2VuJyk7XHJcbnZhciBwb3J0OiBudW1iZXIgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDgwMDA7XHJcbnZhciBlbnY6c3RyaW5nID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BlbWVudCc7XHJcblxyXG52YXIgYXBwID0gZXhwcmVzcygpO1xyXG5cclxuYXBwLnNldCgncG9ydCcsIHBvcnQpO1xyXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICdwdWJsaWMnKSkpO1xyXG5hcHAudXNlKCcvYXBwJywgZXhwcmVzcy5zdGF0aWMocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL2NsaWVudC9hcHAnKSkpO1xyXG5hcHAudXNlKCcvbGlicycsIGV4cHJlc3Muc3RhdGljKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi9jbGllbnQvbGlicycpKSk7XHJcblxyXG4vLyBmb3Igc3lzdGVtLmpzIHRvIHdvcmsuIENhbiBiZSByZW1vdmVkIGlmIGJ1bmRsaW5nLlxyXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi9jbGllbnQnKSkpO1xyXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi9ub2RlX21vZHVsZXMnKSkpO1xyXG5cclxuLy9tYWtlIHdlYnNvY2tldHMgd29yayBoZXJlIHRvIGNvbm5lY3QgdG8gYyMgXHJcbmltcG9ydCBXZWJTb2NrZXQgPSByZXF1aXJlKCd3cycpO1xyXG52YXIgaHR0cCA9IHJlcXVpcmUoJ2h0dHAnKTtcclxudmFyIHBvcnQxIDogbnVtYmVyID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAxMjM0O1xyXG52YXIgV2ViU29ja2V0U2VydmVyID0gV2ViU29ja2V0LlNlcnZlcjtcclxuXHJcbnZhciBzZXJ2ZXIyID0gbmV3IFdlYlNvY2tldFNlcnZlcih7cG9ydDogcG9ydDF9KTtcclxuaW1wb3J0IENvdXJzZVJlcG9zaXRvcnkgPSByZXF1aXJlKFwiLi9hcHAvcmVwb3NpdG9yeS9Db3Vyc2VSZXBvc2l0b3J5XCIpO1xyXG5cclxuc2VydmVyMi5vbignY29ubmVjdGlvbicsIHdzID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdjb25uZWN0aW9uIGVzdGFibGlzaGVkJyk7XHJcbiAgICB3cy5vbignbWVzc2FnZScsIG1lc3NhZ2UgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIHZhciBjb3Vyc2VfaWQgPSAxMjM7IC8vTVVTVCBOT1QgQkUgSEFSRENPREVEP1xyXG4gICAgICAgICAgICAvLyB2YXIgYXR0ZW5kYW5jZUNvZGU6IE51bWJlciA9IDA7XHJcbiAgICAgICAgICAgIC8vIHZhciBfY291cnNlcmVwb3NpdG9yeSA9IG5ldyBDb3Vyc2VSZXBvc2l0b3J5KCk7XHJcbiAgICAgICAgICAgIC8vIF9jb3Vyc2VyZXBvc2l0b3J5LmdldEF0dGVuZGFuY2VDb2RlKGNvdXJzZV9pZCwgKGVycm9yLCByZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmVzdWx0IC4uLlwiICsgcmVzdWx0KTtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibWVzc2FnZSBpcyA6IFwiICsgbWVzc2FnZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBnd3MgPSB3c1xyXG5cclxuLy9BVFRFTkRBTkNFIEZPUiBNT05USCBPQkpFQ1RcclxuLy93cy5zZW5kKEpTT04uc3RyaW5naWZ5KFt7cHJlc2VudDogMjUsIGFic2VudDogNX1dKSk7XHJcbi8vIHdzLnNlbmQoSlNPTi5zdHJpbmdpZnkoW3twcmVzZW50OiAyNSwgYWJzZW50OiA1fSxcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAge3ByZXNlbnQ6IDIzLCBhYnNlbnQ6IDd9LFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB7cHJlc2VudDogMjAsIGFic2VudDogMTB9LFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB7cHJlc2VudDogMjEsIGFic2VudDogOX0sXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHtwcmVzZW50OiA1LCBhYnNlbnQ6IDI1fSxcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAge3ByZXNlbnQ6IDE1LCBhYnNlbnQ6IDE1fV0pKTtcclxuXHJcbi8vIC8vUE9MTCBPQkpFQ1RcclxuLy8gZnVuY3Rpb24gcG9sbF9mdW5jdGlvbjEoKSB7XHJcbi8vICAgICB3cy5zZW5kKEpTT04uc3RyaW5naWZ5KFt7cXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgYmVzdCBOb2RlLmpzIHRvb2wgdG8gYXNzdXJlIGNvbnNpc3RlbnQgc3R5bGU/XCIsIGE6IFwiSlNMaW50XCIsIGI6IFwiSlNIaW50XCIsIGM6IFwiRVNMaW50XCIsIGQ6IFwiSlNDU1wiLCBmcmVxX2E6IDUsIGZyZXFfYjogMywgZnJlcV9jOiA0LCBmcmVxX2Q6IDEsIGNvcnJlY3Q6IFwiQVwifV0pKTtcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gcG9sbF9mdW5jdGlvbjIoKSB7XHJcbi8vICAgICB3cy5zZW5kKEpTT04uc3RyaW5naWZ5KFt7cXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgYmVzdCBOb2RlLmpzIHRvb2wgdG8gYXNzdXJlIGNvbnNpc3RlbnQgc3R5bGU/XCIsIGE6IFwiSlNMaW50XCIsIGI6IFwiSlNIaW50XCIsIGM6IFwiRVNMaW50XCIsIGQ6IFwiSlNDU1wiLCBmcmVxX2E6IDksIGZyZXFfYjogNywgZnJlcV9jOiA3LCBmcmVxX2Q6IDEwLCBjb3JyZWN0OiBcIkFcIn1dKSk7XHJcbi8vICAgICBmdW5jdGlvbiBwb2xsX2Z1bmN0aW9uMygpIHtcclxuLy8gICAgICAgICB3cy5zZW5kKEpTT04uc3RyaW5naWZ5KFt7cXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgYmVzdCBOb2RlLmpzIHRvb2wgdG8gYXNzdXJlIGNvbnNpc3RlbnQgc3R5bGU/XCIsIGE6IFwiSlNMaW50XCIsIGI6IFwiSlNIaW50XCIsIGM6IFwiRVNMaW50XCIsIGQ6IFwiSlNDU1wiLCBmcmVxX2E6IDEzLCBmcmVxX2I6IDE0LCBmcmVxX2M6IDE3LCBmcmVxX2Q6IDExLCBjb3JyZWN0OiBcIkFcIn1dKSk7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgZnVuY3Rpb24gcG9sbF9mdW5jdGlvbjQoKSB7XHJcbi8vICAgICAgICAgd3Muc2VuZChKU09OLnN0cmluZ2lmeShbe3F1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIGJlc3QgTm9kZS5qcyB0b29sIHRvIGFzc3VyZSBjb25zaXN0ZW50IHN0eWxlP1wiLCBhOiBcIkpTTGludFwiLCBiOiBcIkpTSGludFwiLCBjOiBcIkVTTGludFwiLCBkOiBcIkpTQ1NcIiwgZnJlcV9hOiAxNSwgZnJlcV9iOiAxOSwgZnJlcV9jOiAyMCwgZnJlcV9kOiAxMywgY29ycmVjdDogXCJBXCJ9XSkpO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHBvbGxfZnVuY3Rpb24zKCk7XHJcbi8vICAgICBzZXRUaW1lb3V0KHBvbGxfZnVuY3Rpb240LCA0MDAwKTtcclxuLy8gfVxyXG5cclxuLy8gcG9sbF9mdW5jdGlvbjEoKTtcclxuLy8gc2V0VGltZW91dChwb2xsX2Z1bmN0aW9uMiwgNDAwMCk7XHJcblxyXG5cclxuLy8gREFJTFkgQVRURU5EQU5DRSBPQkpFQ1RcclxuZnVuY3Rpb24gZGFpbHlfYXR0X2Z1bmN0aW9uMSgpe1xyXG4gICAgd3Muc2VuZChKU09OLnN0cmluZ2lmeShbe25hbWU6IFwiSGliYVwiLCBzdGF0dXM6IFwiUFwifV0pKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGFpbHlfYXR0X2Z1bmN0aW9uMigpe1xyXG4gICAgd3Muc2VuZChKU09OLnN0cmluZ2lmeShbe25hbWU6IFwiU2hpemFcIiwgc3RhdHVzOiBcIlBcIn1dKSk7XHJcbiAgICBmdW5jdGlvbiBkYWlseV9hdHRfZnVuY3Rpb24zKCkge1xyXG4gICAgICAgIHdzLnNlbmQoSlNPTi5zdHJpbmdpZnkoW3tuYW1lOiBcIkplZWhhblwiLCBzdGF0dXM6IFwiUFwifV0pKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkYWlseV9hdHRfZnVuY3Rpb240KCkge1xyXG4gICAgICAgIHdzLnNlbmQoSlNPTi5zdHJpbmdpZnkoW3tuYW1lOiBcIlNhcmFcIiwgc3RhdHVzOiBcIlBcIn1dKSk7XHJcbiAgICAgICAgZnVuY3Rpb24gZGFpbHlfYXR0X2Z1bmN0aW9uNSgpIHtcclxuICAgICAgICAgICAgd3Muc2VuZChKU09OLnN0cmluZ2lmeShbe25hbWU6IFwiQWhtZWRcIiwgc3RhdHVzOiBcIlBcIn1dKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBkYWlseV9hdHRfZnVuY3Rpb242KCkge1xyXG4gICAgICAgICAgICB3cy5zZW5kKEpTT04uc3RyaW5naWZ5KFt7bmFtZTogXCJNb2hhbW1hZFwiLCBzdGF0dXM6IFwiUFwifV0pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRhaWx5X2F0dF9mdW5jdGlvbjUoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGRhaWx5X2F0dF9mdW5jdGlvbjYsIDQwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGRhaWx5X2F0dF9mdW5jdGlvbjMoKTtcclxuICAgIHNldFRpbWVvdXQoZGFpbHlfYXR0X2Z1bmN0aW9uNCwgNDAwMCk7XHJcbn1cclxuXHJcbmRhaWx5X2F0dF9mdW5jdGlvbjEoKTtcclxuc2V0VGltZW91dChkYWlseV9hdHRfZnVuY3Rpb24yLCA0MDApO1xyXG5cclxuXHJcbi8vIC8vIFNUVURFTlQgUkVDT1JEIE9CSkVDVFxyXG4vLyB2YXIgYXR0ZW5kYW5jZSA9IFtcclxuLy8gICAgIHtcIm5hbWVcIjogXCJIaWJhXCIsIFwiZmlyc3RcIjogXCJQXCIsIFwic2Vjb25kXCI6IFwiQVwiLCBcInRoaXJkXCI6IFwiQVwiLCBcImZvdXJ0aFwiOiBcIkFcIiwgXCJmaWZ0aFwiOiBcIkFcIiwgXCJzaXh0aFwiOiBcIkFcIiwgXCJzZXZlbnRoXCI6IFwiQVwiLCBcImVpZ2h0aFwiOiBcIkFcIiwgXCJuaW50aFwiOiBcIkFcIiwgXCJ0ZW50aFwiOiBcIkFcIiwgXCJlbGV2ZW50aFwiOiBcIkFcIiwgXCJ0d2VsZnRoXCI6IFwiQVwiLCBcInRoaXJ0ZWVudGhcIjogXCJBXCIsIFwiZm91cnRlZW50aFwiOiBcIkFcIiwgXCJmaWZ0ZWVudGhcIjogXCJBXCIsIFwic2l4dGVlbnRoXCI6IFwiQVwiLCBcInNldmVudGVlbnRoXCI6IFwiQVwiLCBcImVpZ2h0ZWVudGhcIjogXCJBXCIsIFwibmluZXRlZW50aFwiOiBcIkFcIiwgXCJ0d2VudGlldGhcIjogXCJBXCIsIFwidHdlbnR5Rmlyc3RcIjogXCJBXCIsIFwidHdlbnR5U2Vjb25kXCI6IFwiQVwiLCBcInR3ZW50eVRoaXJkXCI6IFwiQVwiLCBcInR3ZW50eUZvdXJ0aFwiOiBcIkFcIiwgXCJ0d2VudHlGaWZ0aFwiOiBcIkFcIiwgXCJ0d2VudHlTaXh0aFwiOiBcIkFcIiwgXCJ0d2VudHlTZXZlbnRoXCI6IFwiQVwiLCBcInR3ZW50eUVpZ2h0aFwiOiBcIkFcIiwgXCJ0d2VudHlOaW50aFwiOiBcIkFcIiwgXCJ0aGlydGlldGhcIjogXCJBXCIgfSxcclxuLy8gICAgIHtcIm5hbWVcIjogXCJTaGl6YVwiLCBcImZpcnN0XCI6IFwiUFwiLCBcInNlY29uZFwiOiBcIkFcIiwgXCJ0aGlyZFwiOiBcIlBcIiwgXCJmb3VydGhcIjogXCJQXCIsIFwiZmlmdGhcIjogXCJQXCIsIFwic2l4dGhcIjogXCJBXCIsIFwic2V2ZW50aFwiOiBcIkFcIiwgXCJlaWdodGhcIjogXCJBXCIsIFwibmludGhcIjogXCJBXCIsIFwidGVudGhcIjogXCJBXCIsIFwiZWxldmVudGhcIjogXCJBXCIsIFwidHdlbGZ0aFwiOiBcIkFcIiwgXCJ0aGlydGVlbnRoXCI6IFwiQVwiLCBcImZvdXJ0ZWVudGhcIjogXCJBXCIsIFwiZmlmdGVlbnRoXCI6IFwiQVwiLCBcInNpeHRlZW50aFwiOiBcIkFcIiwgXCJzZXZlbnRlZW50aFwiOiBcIkFcIiwgXCJlaWdodGVlbnRoXCI6IFwiUFwiLCBcIm5pbmV0ZWVudGhcIjogXCJQXCIsIFwidHdlbnRpZXRoXCI6IFwiUFwiLCBcInR3ZW50eUZpcnN0XCI6IFwiUFwiLCBcInR3ZW50eVNlY29uZFwiOiBcIlBcIiwgXCJ0d2VudHlUaGlyZFwiOiBcIlBcIiwgXCJ0d2VudHlGb3VydGhcIjogXCJQXCIsIFwidHdlbnR5RmlmdGhcIjogXCJQXCIsIFwidHdlbnR5U2l4dGhcIjogXCJQXCIsIFwidHdlbnR5U2V2ZW50aFwiOiBcIlBcIiwgXCJ0d2VudHlFaWdodGhcIjogXCJQXCIsIFwidHdlbnR5TmludGhcIjogXCJQXCIsIFwidGhpcnRpZXRoXCI6IFwiUFwiIH0sXHJcbi8vICAgICB7XCJuYW1lXCI6IFwiSmVlaGFuXCIsIFwiZmlyc3RcIjogXCJQXCIsIFwic2Vjb25kXCI6IFwiQVwiLCBcInRoaXJkXCI6IFwiQVwiLCBcImZvdXJ0aFwiOiBcIkFcIiwgXCJmaWZ0aFwiOiBcIkFcIiwgXCJzaXh0aFwiOiBcIkFcIiwgXCJzZXZlbnRoXCI6IFwiQVwiLCBcImVpZ2h0aFwiOiBcIkFcIiwgXCJuaW50aFwiOiBcIkFcIiwgXCJ0ZW50aFwiOiBcIkFcIiwgXCJlbGV2ZW50aFwiOiBcIkFcIiwgXCJ0d2VsZnRoXCI6IFwiQVwiLCBcInRoaXJ0ZWVudGhcIjogXCJBXCIsIFwiZm91cnRlZW50aFwiOiBcIkFcIiwgXCJmaWZ0ZWVudGhcIjogXCJBXCIsIFwic2l4dGVlbnRoXCI6IFwiQVwiLCBcInNldmVudGVlbnRoXCI6IFwiQVwiLCBcImVpZ2h0ZWVudGhcIjogXCJBXCIsIFwibmluZXRlZW50aFwiOiBcIkFcIiwgXCJ0d2VudGlldGhcIjogXCJBXCIsIFwidHdlbnR5Rmlyc3RcIjogXCJQXCIsIFwidHdlbnR5U2Vjb25kXCI6IFwiUFwiLCBcInR3ZW50eVRoaXJkXCI6IFwiUFwiLCBcInR3ZW50eUZvdXJ0aFwiOiBcIlBcIiwgXCJ0d2VudHlGaWZ0aFwiOiBcIlBcIiwgXCJ0d2VudHlTaXh0aFwiOiBcIlBcIiwgXCJ0d2VudHlTZXZlbnRoXCI6IFwiUFwiLCBcInR3ZW50eUVpZ2h0aFwiOiBcIlBcIiwgXCJ0d2VudHlOaW50aFwiOiBcIlBcIiwgXCJ0aGlydGlldGhcIjogXCJQXCIgfVxyXG4vLyAgICAgXTtcclxuXHJcbi8vIHdzLnNlbmQoSlNPTi5zdHJpbmdpZnkoYXR0ZW5kYW5jZSkpO1xyXG5cclxuICAgIC8vIHdzLm9uKCdtZXNzYWdlJywgbWVzc2FnZSA9PiB7XHJcbiAgICAvLyAgICAgdHJ5IHtcclxuICAgIC8vICAgICAgICAgLy8gdmFyIHVzZXJNZXNzYWdlOiBtb2RlbHMuVXNlck1lc3NhZ2UgPSBuZXcgbW9kZWxzLlVzZXJNZXNzYWdlKG1lc3NhZ2UpO1xyXG5cdC8vIFx0XHQvLyBicm9hZGNhc3QoSlNPTi5zdHJpbmdpZnkodXNlck1lc3NhZ2UpKTtcclxuICAgIC8vICAgICAgICAgd3Muc2VuZChcIkhleXl5eXl5eVwiKTtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xyXG4gICAgLy8gICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5lcnJvcihlLm1lc3NhZ2UpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0pO1xyXG59KTtcclxuLy9tb2RlbCBpbiBhbm90aGVyIGZpbGUuQ2hlY2sgdGhpcyBsaW5rIGppbmNhc2UuXHJcbi8vIGh0dHBzOi8vd3d3LmNvZGVwcm9qZWN0LmNvbS9BcnRpY2xlcy84NzE2MjIvV3JpdGluZy1hLUNoYXQtU2VydmVyLXVzaW5nLU5vZGUtanMtVHlwZVNjcmlwdC1hbmRcclxuXHJcbi8vIGZ1bmN0aW9uIGJyb2FkY2FzdChkYXRhOiBzdHJpbmcpOiB2b2lkIHtcclxuLy8gXHRzZXJ2ZXIyLmNsaWVudHMuZm9yRWFjaChjbGllbnQgPT4ge1xyXG4vLyBcdFx0Y2xpZW50LnNlbmQoZGF0YSk7XHJcbi8vIFx0fSk7XHRcclxuLy8gfTtcclxuXHJcbmNvbnNvbGUubG9nKCdQb3dlclBvaW50IFNlcnZlciBpcyBydW5uaW5nIG9uIHBvcnQnLCBwb3J0MSk7XHJcblxyXG5cclxuLy9uZXcgc3R1ZmYgZm9yIGF1dGhlbnRpY2F0aW9uXHJcbnZhciBVc2VyID0gcmVxdWlyZSgnLi9hcHAvZGF0YUFjY2Vzcy9zY2hlbWFzL1VzZXJTY2hlbWEnKVxyXG52YXIgbG9nZ2VyID0gcmVxdWlyZSgnbW9yZ2FuJyk7XHJcbnZhciBjb29raWVQYXJzZXIgPSByZXF1aXJlKCdjb29raWUtcGFyc2VyJyk7XHJcbnZhciBwYXNzcG9ydCA9IHJlcXVpcmUoJ3Bhc3Nwb3J0Jyk7XHJcbnZhciBsb2NhbFN0cmF0ZWd5ID0gcmVxdWlyZSgncGFzc3BvcnQtbG9jYWwnICkuU3RyYXRlZ3k7XHJcbnZhciBoYXNoID0gcmVxdWlyZSgnYmNyeXB0LW5vZGVqcycpO1xyXG5cclxuYXBwLnVzZShjb29raWVQYXJzZXIoKSk7XHJcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IGZhbHNlIH0pKTsgLy9cclxuYXBwLnVzZShyZXF1aXJlKCdleHByZXNzLXNlc3Npb24nKSh7XHJcbiAgICBzZWNyZXQ6ICdrZXlib2FyZCBjYXQnLFxyXG4gICAgcmVzYXZlOiBmYWxzZSxcclxuICAgIHNhdmVVbmluaXRpYWxpemVkOiBmYWxzZVxyXG59KSk7XHJcblxyXG5hcHAudXNlKHBhc3Nwb3J0LmluaXRpYWxpemUoKSk7XHJcbmFwcC51c2UocGFzc3BvcnQuc2Vzc2lvbigpKTtcclxuYXBwLnVzZShsb2dnZXIoJ2RldicpKTtcclxuXHJcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xyXG5hcHAudXNlKCcvYXBpJywgbmV3IEJhc2VSb3V0ZXMoKS5yb3V0ZXMpO1xyXG5cclxuXHJcbi8vIGNvbmZpZ3VyZSBwYXNzcG9ydFxyXG5wYXNzcG9ydC51c2UoJ2xvY2FsJywgbmV3IGxvY2FsU3RyYXRlZ3koe1xyXG4gICAgICAgIHVzZXJuYW1lRmllbGQgOiAndXNlcm5hbWUnLFxyXG4gICAgICAgIHBhc3N3b3JkRmllbGQgOiAncGFzc3dvcmQnLFxyXG4gICAgICAgIHBhc3NSZXFUb0NhbGxiYWNrIDogdHJ1ZSAvLyBhbGxvd3MgdXMgdG8gcGFzcyBiYWNrIHRoZSBlbnRpcmUgcmVxdWVzdCB0XHJcbiAgICB9LCBmdW5jdGlvbihyZXEsIHVzZXJuYW1lLCBwYXNzd29yZCwgZG9uZSkgeyAvLyBjYWxsYmFjayB3aXRoIGVtYWlsIGFuZCBwYXNzd29yZCBmcm9tIG91ciBmb3JtXHJcblxyXG4gICAgICAgIC8vIGZpbmQgYSB1c2VyIHdob3NlIHVzZXJuYW1lIGlzIHRoZSBzYW1lIGFzIHRoZSBmb3JtcyBlbWFpbFxyXG4gICAgICAgIC8vIHdlIGFyZSBjaGVja2luZyB0byBzZWUgaWYgdGhlIHVzZXIgdHJ5aW5nIHRvIGxvZ2luIGFscmVhZHkgZXhpc3RzXHJcbiAgICAgICAgVXNlci5maW5kT25lKHsndXNlcm5hbWUnOiB1c2VybmFtZX0sIGZ1bmN0aW9uKGVyciwgdXNlcikge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9uZShlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvbmUobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh1c2VyLnBhc3N3b3JkICE9PSBwYXNzd29yZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvbmUobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkb25lKG51bGwsIHVzZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSkpO1xyXG5cclxucGFzc3BvcnQuc2VyaWFsaXplVXNlcihmdW5jdGlvbih1c2VyLCBkb25lKXtcclxuICAgIGRvbmUobnVsbCwgdXNlci51c2VybmFtZSk7XHJcbn0pO1xyXG5cclxucGFzc3BvcnQuZGVzZXJpYWxpemVVc2VyKGZ1bmN0aW9uKGlkLCBkb25lKSB7XHJcbiAgICAgICAgVXNlci5maW5kT25lKHsndXNlcm5hbWUnOiBpZH0sIGZ1bmN0aW9uKGVyciwgdXNlcikge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9uZShlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvbmUobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh1c2VyLnBhc3N3b3JkICE9PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvbmUobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkb25lKG51bGwsIHVzZXIpO1xyXG4gICAgICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG4vLy9lbmRzXHJcblxyXG52YXIgcmVuZGVySW5kZXggPSAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSkgPT4ge1xyXG4gICAgcmVzLnNlbmRGaWxlKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi9jbGllbnQvaW5kZXguaHRtbCcpKTtcclxufVxyXG5cclxuYXBwLmdldCgnLyonLCByZW5kZXJJbmRleCk7XHJcblxyXG5pZiAoZW52ID09PSAnZGV2ZWxvcGVtZW50Jyl7XHJcbiAgICBhcHAudXNlKGZ1bmN0aW9uKGVyciwgcmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoZXJyLnN0YXR1cyB8fCA1MDApO1xyXG4gICAgICAgIHJlcy5qc29uKHtcclxuICAgICAgICAgICAgZXJyb3I6IGVycixcclxuICAgICAgICAgICAgbWVzc2FnZTogZXJyLm1lc3NhZ2VcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vL21ha2UgdXNlcnMgYW5kIGFkZCB0byBkYXRhYmFzZS5cclxuLy9lbmRzXHJcblxyXG4vLyBjYXRjaCA0MDQgYW5kIGZvcndhcmQgdG8gZXJyb3IgaGFuZGxlclxyXG5hcHAudXNlKGZ1bmN0aW9uKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQpIHtcclxuICAgIGxldCBlcnIgPSBuZXcgRXJyb3IoXCJOb3QgRm91bmRcIik7XHJcbiAgICBuZXh0KGVycik7XHJcbn0pO1xyXG5cclxuLy8gcHJvZHVjdGlvbiBlcnJvciBoYW5kbGVyXHJcbi8vIG5vIHN0YWNrdHJhY2UgbGVha2VkIHRvIHVzZXJcclxuYXBwLnVzZShmdW5jdGlvbihlcnI6IGFueSwgcmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICByZXMuc3RhdHVzKGVyci5zdGF0dXMgfHwgNTAwKTtcclxuICAgIHJlcy5qc29uKHtcclxuICAgICAgICBlcnJvcjoge30sXHJcbiAgICAgICAgbWVzc2FnZTogZXJyLm1lc3NhZ2VcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbmV4cG9ydCB7IGFwcCB9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
