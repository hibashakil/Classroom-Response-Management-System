"use strict";
var express = require("express");
var CourseController = require("./../../controllers/CourseController");
var passport = require('passport');
var router = express.Router();
var jwt2 = require('express-jwt');
var auth = jwt2({
    secret: 'my_secret',
    userProperty: 'payload'
});
var CourseRoutes = (function () {
    function CourseRoutes() {
        this._courseController = new CourseController();
    }
    Object.defineProperty(CourseRoutes.prototype, "routes", {
        get: function () {
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
        },
        enumerable: true,
        configurable: true
    });
    return CourseRoutes;
}());
Object.seal(CourseRoutes);
module.exports = CourseRoutes;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9yb3V0ZXMvQ291cnNlUm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFPLE9BQU8sV0FBVyxTQUFTLENBQUMsQ0FBQztBQUNwQyxJQUFPLGdCQUFnQixXQUFXLHNDQUFzQyxDQUFDLENBQUM7QUFDMUUsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBR25DLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU5QixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDbEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2QsTUFBTSxFQUFFLFdBQVc7SUFDbkIsWUFBWSxFQUFFLFNBQVM7Q0FDeEIsQ0FBQyxDQUFDO0FBRUg7SUFHSTtRQUNJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7SUFDcEQsQ0FBQztJQUNELHNCQUFJLGdDQUFNO2FBQVY7WUFDSSxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDeEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUVsRCxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzFELE1BQU0sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3pELHFCQUFxQjtZQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUMsZ0RBQWdEO1lBQy9DLE1BQU0sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUUsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDeEUsa0RBQWtEO1lBQ2xELG9EQUFvRDtZQUVwRCxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2xCLENBQUM7OztPQUFBO0lBR0wsbUJBQUM7QUFBRCxDQXZCQSxBQXVCQyxJQUFBO0FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUMxQixpQkFBUyxZQUFZLENBQUMiLCJmaWxlIjoiY29uZmlnL3JvdXRlcy9Db3Vyc2VSb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xyXG5pbXBvcnQgQ291cnNlQ29udHJvbGxlciA9IHJlcXVpcmUoXCIuLy4uLy4uL2NvbnRyb2xsZXJzL0NvdXJzZUNvbnRyb2xsZXJcIik7XHJcbnZhciBwYXNzcG9ydCA9IHJlcXVpcmUoJ3Bhc3Nwb3J0Jyk7XHJcbmltcG9ydCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xyXG5cclxudmFyIHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcblxyXG52YXIgand0MiA9IHJlcXVpcmUoJ2V4cHJlc3Mtand0Jyk7XHJcbnZhciBhdXRoID0gand0Mih7XHJcbiAgc2VjcmV0OiAnbXlfc2VjcmV0JyxcclxuICB1c2VyUHJvcGVydHk6ICdwYXlsb2FkJ1xyXG59KTtcclxuXHJcbmNsYXNzIENvdXJzZVJvdXRlcyB7XHJcbiAgICBwcml2YXRlIF9jb3Vyc2VDb250cm9sbGVyOiBDb3Vyc2VDb250cm9sbGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLl9jb3Vyc2VDb250cm9sbGVyID0gbmV3IENvdXJzZUNvbnRyb2xsZXIoKTtcclxuICAgIH1cclxuICAgIGdldCByb3V0ZXMgKCkge1xyXG4gICAgICAgIHZhciBjb250cm9sbGVyID0gdGhpcy5fY291cnNlQ29udHJvbGxlcjtcclxuICAgICAgICByb3V0ZXIuZ2V0KFwiL2NvdXJzZXNcIiwgYXV0aCwgY29udHJvbGxlci5yZXRyaWV2ZSk7XHJcblxyXG4gICAgICAgIHJvdXRlci5nZXQoXCIvc3R1Q291cnNlc1wiLCBhdXRoLCBjb250cm9sbGVyLnJldFN0dUNvdXJzZXMpO1xyXG4gICAgICAgIHJvdXRlci5nZXQoXCIvaW5zY291cnNlcy86X2lkXCIsIGNvbnRyb2xsZXIucmV0SW5zQ291cnNlcyk7XHJcbiAgICAgICAgLy90cmFja2luZyBhdHRlbmRhbmNlXHJcbiAgICAgICAgcm91dGVyLnBvc3QoXCIvY291cnNlc1wiLCBjb250cm9sbGVyLnRyYWNrKTtcclxuICAgICAgICAvLyByb3V0ZXIucHV0KFwiL3VzZXJzLzpfaWRcIiwgY29udHJvbGxlci51cGRhdGUpO1xyXG4gICAgICAgICByb3V0ZXIucHV0KFwiL3NlbENvdXJzZUF0dGVuZGFuY2UvOl9pZFwiLCBjb250cm9sbGVyLnNhdmVBdHRlbmRhbmNlQ29kZSk7XHJcbiAgICAgICAgLy8gcm91dGVyLmdldChcIi91c2Vycy86X2lkXCIsIGNvbnRyb2xsZXIuZmluZEJ5SWQpO1xyXG4gICAgICAgIC8vIHJvdXRlci5kZWxldGUoXCIvY291cnNlLzpfaWRcIiwgY29udHJvbGxlci5kZWxldGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gcm91dGVyO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbk9iamVjdC5zZWFsKENvdXJzZVJvdXRlcyk7XHJcbmV4cG9ydCA9IENvdXJzZVJvdXRlczsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
