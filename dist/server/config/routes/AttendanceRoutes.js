"use strict";
var express = require("express");
var AttendanceController = require("./../../controllers/AttendanceController");
var MultipleQueriesController = require("./../../controllers/MultipleQueriesController");
var passport = require('passport');
var router = express.Router();
var jwt2 = require('express-jwt');
var auth = jwt2({
    secret: 'my_secret',
    userProperty: 'payload'
});
var AttendanceRoutes = (function () {
    function AttendanceRoutes() {
        this._attendanceController = new AttendanceController();
        this._newController = new MultipleQueriesController();
    }
    Object.defineProperty(AttendanceRoutes.prototype, "routes", {
        get: function () {
            var controllerA = this._attendanceController;
            var controllerB = this._newController;
            router.get("/home", function (req, res) {
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
        },
        enumerable: true,
        configurable: true
    });
    return AttendanceRoutes;
}());
Object.seal(AttendanceRoutes);
module.exports = AttendanceRoutes;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9yb3V0ZXMvQXR0ZW5kYW5jZVJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTyxPQUFPLFdBQVcsU0FBUyxDQUFDLENBQUM7QUFDcEMsSUFBTyxvQkFBb0IsV0FBVywwQ0FBMEMsQ0FBQyxDQUFDO0FBQ2xGLElBQU8seUJBQXlCLFdBQVcsK0NBQStDLENBQUMsQ0FBQztBQUM1RixJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFHbkMsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQzlCLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUNsQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7SUFDZCxNQUFNLEVBQUUsV0FBVztJQUNuQixZQUFZLEVBQUUsU0FBUztDQUN4QixDQUFDLENBQUM7QUFFSDtJQUlJO1FBQ0ksSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksb0JBQW9CLEVBQUUsQ0FBQztRQUN4RCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUkseUJBQXlCLEVBQUUsQ0FBQztJQUMxRCxDQUFDO0lBQ0Qsc0JBQUksb0NBQU07YUFBVjtZQUNJLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztZQUM3QyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBRXRDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFVBQVMsR0FBb0IsRUFBRSxHQUFxQjtnQkFDcEUsaUVBQWlFO1lBQ3JFLENBQUMsQ0FBQyxDQUFDO1lBQ1gsZ0VBQWdFO1lBQ2hFLFlBQVk7WUFDWiwwQ0FBMEM7WUFDMUMsNkVBQTZFO1lBQzdFLDhEQUE4RDtZQUM5RCw2Q0FBNkM7WUFDN0MsOENBQThDO1lBQzlDLDREQUE0RDtZQUM1RCwrQ0FBK0M7WUFDL0Msc0JBQXNCO1lBRWQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdDLE1BQU07WUFDTiwrRkFBK0Y7WUFDL0YsWUFBWTtZQUNaLE1BQU0sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUUsV0FBVyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDekUsaURBQWlEO1lBQ2pELE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEQsZ0RBQWdEO1lBQ2hELGtEQUFrRDtZQUNsRCxtREFBbUQ7WUFFbkQsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNsQixDQUFDOzs7T0FBQTtJQUdMLHVCQUFDO0FBQUQsQ0F6Q0EsQUF5Q0MsSUFBQTtBQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUM5QixpQkFBUyxnQkFBZ0IsQ0FBQyIsImZpbGUiOiJjb25maWcvcm91dGVzL0F0dGVuZGFuY2VSb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xyXG5pbXBvcnQgQXR0ZW5kYW5jZUNvbnRyb2xsZXIgPSByZXF1aXJlKFwiLi8uLi8uLi9jb250cm9sbGVycy9BdHRlbmRhbmNlQ29udHJvbGxlclwiKTtcclxuaW1wb3J0IE11bHRpcGxlUXVlcmllc0NvbnRyb2xsZXIgPSByZXF1aXJlKFwiLi8uLi8uLi9jb250cm9sbGVycy9NdWx0aXBsZVF1ZXJpZXNDb250cm9sbGVyXCIpO1xyXG52YXIgcGFzc3BvcnQgPSByZXF1aXJlKCdwYXNzcG9ydCcpO1xyXG5pbXBvcnQgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxuXHJcbnZhciByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG52YXIgand0MiA9IHJlcXVpcmUoJ2V4cHJlc3Mtand0Jyk7XHJcbnZhciBhdXRoID0gand0Mih7XHJcbiAgc2VjcmV0OiAnbXlfc2VjcmV0JyxcclxuICB1c2VyUHJvcGVydHk6ICdwYXlsb2FkJ1xyXG59KTtcclxuXHJcbmNsYXNzIEF0dGVuZGFuY2VSb3V0ZXMge1xyXG5wcml2YXRlIF9hdHRlbmRhbmNlQ29udHJvbGxlcjogQXR0ZW5kYW5jZUNvbnRyb2xsZXI7XHJcbnByaXZhdGUgX25ld0NvbnRyb2xsZXIgOiBNdWx0aXBsZVF1ZXJpZXNDb250cm9sbGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLl9hdHRlbmRhbmNlQ29udHJvbGxlciA9IG5ldyBBdHRlbmRhbmNlQ29udHJvbGxlcigpO1xyXG4gICAgICAgIHRoaXMuX25ld0NvbnRyb2xsZXIgPSBuZXcgTXVsdGlwbGVRdWVyaWVzQ29udHJvbGxlcigpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHJvdXRlcyAoKSB7XHJcbiAgICAgICAgdmFyIGNvbnRyb2xsZXJBID0gdGhpcy5fYXR0ZW5kYW5jZUNvbnRyb2xsZXI7XHJcbiAgICAgICAgdmFyIGNvbnRyb2xsZXJCID0gdGhpcy5fbmV3Q29udHJvbGxlcjtcclxuXHJcbiAgICAgICAgcm91dGVyLmdldChcIi9ob21lXCIsIGZ1bmN0aW9uKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2Upe1xyXG4gICAgICAgICAgICAvLyByZXMuc2VuZEZpbGUocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL2NsaWVudC9pbmRleC5odG1sJykpO1xyXG4gICAgICAgIH0pO1xyXG4vLyAgICAgICAgIHJvdXRlci5wb3N0KFwiL2xvZ2luXCIsIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnbG9jYWwnLCBcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICAgICAgICBmYWlsdXJlRmxhc2ggOiBmYWxzZX0pLFxyXG4vLyAgICAgICAgICAgICAgICAgZnVuY3Rpb24ocmVxIDogZXhwcmVzcy5SZXF1ZXN0LCByZXMgOiBleHByZXNzLlJlc3BvbnNlKSB7IFxyXG4vLyAvLyAvLyAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBZnRlciBhdXRoZW50aWNhdGVcIik7XHJcbi8vIC8vIC8vICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXEpO1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgICAgIHZhciB1c2VyID0gcmVxLnVzZXI7XHJcbi8vIC8vICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBZnRlciBhdXRoZW50aWNhdGVcIik7XHJcbi8vIC8vICAgICAgICAgICAgICAgICAgICAgICByZXMuc2VuZChyZXEudXNlcik7XHJcbi8vICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcm91dGVyLmdldChcIi9hdHRlbmRhbmNlXCIsIGNvbnRyb2xsZXJBLnRyYWNrKTtcclxuICAgICAgICAvL3NpcjpcclxuICAgICAgICAvLyByb3V0ZXIuZ2V0KFwiL3NlbENvdXJzZUF0dGVuZGFuY2UvOl9pZFwiLCBuZXdmdW5jdGlvbiAuLi4kZm9yLmNvbnRyb2xsZXIuc2VsQ291cnNlQXR0ZW5kYW5jZSk7XHJcbiAgICAgICAgLy9vcmlnaW5hbDogXHJcbiAgICAgICAgcm91dGVyLmdldChcIi9zZWxDb3Vyc2VBdHRlbmRhbmNlLzpfaWRcIiwgY29udHJvbGxlckIuc2VsQ291cnNlQXR0ZW5kYW5jZSk7XHJcbiAgICAgICAgLy8gcm91dGVyLnBvc3QoXCIvYXR0ZW5kYW5jZVwiLCBjb250cm9sbGVyLmNyZWF0ZSk7XHJcbiAgICAgICAgcm91dGVyLnBvc3QoXCIvYXR0ZW5kYW5jZVwiLCBhdXRoLCBjb250cm9sbGVyQS50cmFjayk7XHJcbiAgICAgICAgLy8gcm91dGVyLnB1dChcIi91c2Vycy86X2lkXCIsIGNvbnRyb2xsZXIudXBkYXRlKTtcclxuICAgICAgICAvLyByb3V0ZXIuZ2V0KFwiL3VzZXJzLzpfaWRcIiwgY29udHJvbGxlci5maW5kQnlJZCk7XHJcbiAgICAgICAgLy8gcm91dGVyLmRlbGV0ZShcIi91c2Vycy86X2lkXCIsIGNvbnRyb2xsZXIuZGVsZXRlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJvdXRlcjtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5PYmplY3Quc2VhbChBdHRlbmRhbmNlUm91dGVzKTtcclxuZXhwb3J0ID0gQXR0ZW5kYW5jZVJvdXRlczsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
