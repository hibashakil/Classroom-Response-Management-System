import express = require("express");
import CourseController = require("./../../controllers/CourseController");
var passport = require('passport');
import path = require('path');

var router = express.Router();

var jwt2 = require('express-jwt');
var auth = jwt2({
  secret: 'my_secret',
  userProperty: 'payload'
});

class CourseRoutes {
    private _courseController: CourseController;

    constructor () {
        this._courseController = new CourseController();
    }
    get routes () {
        var controller = this._courseController;
        router.get("/courses", auth, controller.retrieve);

        router.get("/stuCourses", auth, controller.retStuCourses);
        router.get("/inscourses/:_id", controller.retInsCourses);
        //tracking attendance
        router.post("/courses", controller.track);
        // router.put("/users/:_id", controller.update);
         router.put("/selCourseAttendance/:_id", controller.saveAttendanceCode);
        // router.get("/users/:_id", controller.findById);
        // router.delete("/course/:_id", controller.delete);

        return router;
    }


}

Object.seal(CourseRoutes);
export = CourseRoutes;