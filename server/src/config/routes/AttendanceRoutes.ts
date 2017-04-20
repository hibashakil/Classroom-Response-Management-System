import express = require("express");
import AttendanceController = require("./../../controllers/AttendanceController");
import MultipleQueriesController = require("./../../controllers/MultipleQueriesController");
var passport = require('passport');
import path = require('path');

var router = express.Router();
var jwt2 = require('express-jwt');
var auth = jwt2({
  secret: 'my_secret',
  userProperty: 'payload'
});

class AttendanceRoutes {
private _attendanceController: AttendanceController;
private _newController : MultipleQueriesController;

    constructor () {
        this._attendanceController = new AttendanceController();
        this._newController = new MultipleQueriesController();
    }
    get routes () {
        var controllerA = this._attendanceController;
        var controllerB = this._newController;

        router.get("/home", function(req: express.Request, res: express.Response){
            // res.sendFile(path.resolve(__dirname, '../client/index.html'));
        });
//         router.post("/login", passport.authenticate('local', 
//         {
//                 failureFlash : false}),
//                 function(req : express.Request, res : express.Response) { 
// // //                    console.log("After authenticate");
// // //                    console.log(req);
// //                     var user = req.user;
// //                     console.log("After authenticate");
// //                       res.send(req.user);
//                 });

        router.get("/attendance", controllerA.track);
        //sir:
        // router.get("/selCourseAttendance/:_id", newfunction ...$for.controller.selCourseAttendance);
        //original: 
        router.get("/selCourseAttendance/:_id", controllerB.selCourseAttendance);
        // router.post("/attendance", controller.create);
        router.post("/attendance", auth, controllerA.track);
        // router.put("/users/:_id", controller.update);
        // router.get("/users/:_id", controller.findById);
        // router.delete("/users/:_id", controller.delete);

        return router;
    }


}

Object.seal(AttendanceRoutes);
export = AttendanceRoutes;