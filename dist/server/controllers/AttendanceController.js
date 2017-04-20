"use strict";
var AttendanceBusiness = require("./../app/business/AttendanceBusiness");
var passport = require('passport');
var AttendanceController = (function () {
    function AttendanceController() {
    }
    AttendanceController.prototype.login = function (req, res) {
        // try{
        //     var user: IUserModel = <IUserModel>req.body;
        //     var userBusiness = new UserBusiness();
        //     userBusiness.login(user, (error, result) => {
        //         if (error) res.send({"error": "could not login"});
        //         else res.send({"success": "login successful"});
        //     });
        // }
        // catch(e){
        //      console.log(e);
        //     res.send({"error": "error in your login"}); 
        // }
    };
    AttendanceController.prototype.register = function (req, res) {
        // try{
        //     var user: IUserModel = <IUserModel>req.body;
        //     var userBusiness = new UserBusiness();
        //     userBusiness.register(user, (error, result) => {
        //         if(error) res.send({"error": "error"});
        //         else res.send({"success": "success"});
        //     });
        // }
        // catch(e){
        //        console.log(e);
        //     res.send({"error": "error in your register"});           
        // }
    };
    AttendanceController.prototype.create = function (req, res) {
        try {
            var attendance = req.body;
            var attendanceBusiness = new AttendanceBusiness();
            attendanceBusiness.create(attendance, function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    AttendanceController.prototype.update = function (req, res) {
        // try {
        //     var user: IUserModel = <IUserModel>req.body;
        //     var _id: string = req.params._id;
        //     var userBusiness = new UserBusiness();
        //     userBusiness.update(_id, user, (error, result) => {
        //         if(error) res.send({"error": "error"});
        //         else res.send({"success": "success"});
        //     });
        // }
        // catch (e)  {
        //     console.log(e);
        //     res.send({"error": "error in your request"});
        // }
    };
    AttendanceController.prototype.delete = function (req, res) {
        // try {
        //     var _id: string = req.params._id;
        //     var userBusiness = new UserBusiness();
        //     userBusiness.delete(_id, (error, result) => {
        //         if(error) res.send({"error": "error"});
        //         else res.send({"success": "success"});
        //     });
        // }
        // catch (e)  {
        //     console.log(e);
        //     res.send({"error": "error in your request"});
        // }
    };
    AttendanceController.prototype.retrieve = function (req, res) {
        try {
            var attendanceBusiness = new AttendanceBusiness();
            attendanceBusiness.retrieve(function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    AttendanceController.prototype.findById = function (req, res) {
        try {
            var _id = req.params._id;
            var attendanceBusiness = new AttendanceBusiness();
            attendanceBusiness.findById(_id, function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    AttendanceController.prototype.track = function (req, res) {
        var sessionsPresent;
        var totalSessions;
        var absentDates;
        try {
            var _id = req.body.courseId;
            var rollNumber = req.body.rollNumber;
            var attendanceBusiness = new AttendanceBusiness();
            attendanceBusiness.track(_id, rollNumber, function (error, result) {
                if (error) {
                    console.log(error);
                }
                else {
                    sessionsPresent = result;
                    attendanceBusiness.countTotalSessions(_id, function (error, result) {
                        if (error) {
                            console.log(error);
                        }
                        else {
                            totalSessions = result;
                            attendanceBusiness.datesAbsent(_id, rollNumber, function (error, result) {
                                if (error) {
                                    console.log(error);
                                }
                                else {
                                    absentDates = result;
                                    res.send({ sessionsPresent: sessionsPresent, totalSessions: totalSessions, absentDates: absentDates });
                                }
                            });
                        }
                    });
                }
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    AttendanceController.prototype.selCourseAttendance = function (req, res) {
        try {
            var _id = req.params._id;
            var attendanceBusiness = new AttendanceBusiness();
            attendanceBusiness.selCourseAttendance(_id, function (error, result) {
                if (error) {
                    res.send({ "error": "error" });
                }
                else {
                    console.log("result of attendance controlller: " + result);
                    res.send(result);
                }
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    return AttendanceController;
}());
module.exports = AttendanceController;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL0F0dGVuZGFuY2VDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxJQUFPLGtCQUFrQixXQUFXLHNDQUFzQyxDQUFDLENBQUM7QUFJNUUsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRW5DO0lBQUE7SUF1S0EsQ0FBQztJQXRLRyxvQ0FBSyxHQUFMLFVBQU0sR0FBb0IsRUFBRSxHQUFxQjtRQUM3QyxPQUFPO1FBQ1AsbURBQW1EO1FBQ25ELDZDQUE2QztRQUM3QyxvREFBb0Q7UUFDcEQsNkRBQTZEO1FBQzdELDBEQUEwRDtRQUMxRCxVQUFVO1FBQ1YsSUFBSTtRQUNKLFlBQVk7UUFDWix1QkFBdUI7UUFDdkIsbURBQW1EO1FBQ25ELElBQUk7SUFDUixDQUFDO0lBQ0QsdUNBQVEsR0FBUixVQUFTLEdBQW9CLEVBQUUsR0FBcUI7UUFDaEQsT0FBTztRQUNQLG1EQUFtRDtRQUNuRCw2Q0FBNkM7UUFDN0MsdURBQXVEO1FBQ3ZELGtEQUFrRDtRQUNsRCxpREFBaUQ7UUFDakQsVUFBVTtRQUdWLElBQUk7UUFDSixZQUFZO1FBQ1oseUJBQXlCO1FBQ3pCLGdFQUFnRTtRQUNoRSxJQUFJO0lBRVIsQ0FBQztJQUVELHFDQUFNLEdBQU4sVUFBTyxHQUFvQixFQUFFLEdBQXFCO1FBQzlDLElBQUksQ0FBQztZQUVELElBQUksVUFBVSxHQUF1QyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQzlELElBQUksa0JBQWtCLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1lBQ2xELGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsVUFBQyxLQUFLLEVBQUUsTUFBTTtnQkFDaEQsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDO29CQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQztnQkFDeEMsSUFBSTtvQkFBQyxHQUFHLENBQUMsSUFBSSxD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O0FBQ0QsaUJBQVMsb0JBQW9CLENBQUMiLCJmaWxlIjoiY29udHJvbGxlcnMvQXR0ZW5kYW5jZUNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xyXG5pbXBvcnQgQXR0ZW5kYW5jZUJ1c2luZXNzID0gcmVxdWlyZShcIi4vLi4vYXBwL2J1c2luZXNzL0F0dGVuZGFuY2VCdXNpbmVzc1wiKTtcclxuaW1wb3J0IElCYXNlQ29udHJvbGxlciA9IHJlcXVpcmUoXCIuL0Jhc2VDb250cm9sbGVyXCIpO1xyXG5pbXBvcnQgSUF0dGVuZGFuY2VNb2RlbCA9IHJlcXVpcmUoXCIuLy4uL2FwcC9tb2RlbC9pbnRlcmZhY2VzL0F0dGVuZGFuY2VNb2RlbFwiKTtcclxuaW1wb3J0IElDb3Vyc2VNb2RlbCA9IHJlcXVpcmUoXCIuLy4uL2FwcC9tb2RlbC9pbnRlcmZhY2VzL0NvdXJzZU1vZGVsXCIpO1xyXG52YXIgcGFzc3BvcnQgPSByZXF1aXJlKCdwYXNzcG9ydCcpO1xyXG5cclxuY2xhc3MgQXR0ZW5kYW5jZUNvbnRyb2xsZXIgaW1wbGVtZW50cyBJQmFzZUNvbnRyb2xsZXIgPEF0dGVuZGFuY2VCdXNpbmVzcz4ge1xyXG4gICAgbG9naW4ocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSkgOiB2b2lkIHtcclxuICAgICAgICAvLyB0cnl7XHJcbiAgICAgICAgLy8gICAgIHZhciB1c2VyOiBJVXNlck1vZGVsID0gPElVc2VyTW9kZWw+cmVxLmJvZHk7XHJcbiAgICAgICAgLy8gICAgIHZhciB1c2VyQnVzaW5lc3MgPSBuZXcgVXNlckJ1c2luZXNzKCk7XHJcbiAgICAgICAgLy8gICAgIHVzZXJCdXNpbmVzcy5sb2dpbih1c2VyLCAoZXJyb3IsIHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgaWYgKGVycm9yKSByZXMuc2VuZCh7XCJlcnJvclwiOiBcImNvdWxkIG5vdCBsb2dpblwifSk7XHJcbiAgICAgICAgLy8gICAgICAgICBlbHNlIHJlcy5zZW5kKHtcInN1Y2Nlc3NcIjogXCJsb2dpbiBzdWNjZXNzZnVsXCJ9KTtcclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGNhdGNoKGUpe1xyXG4gICAgICAgIC8vICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgLy8gICAgIHJlcy5zZW5kKHtcImVycm9yXCI6IFwiZXJyb3IgaW4geW91ciBsb2dpblwifSk7IFxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuICAgIHJlZ2lzdGVyKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpIDogdm9pZCB7XHJcbiAgICAgICAgLy8gdHJ5e1xyXG4gICAgICAgIC8vICAgICB2YXIgdXNlcjogSVVzZXJNb2RlbCA9IDxJVXNlck1vZGVsPnJlcS5ib2R5O1xyXG4gICAgICAgIC8vICAgICB2YXIgdXNlckJ1c2luZXNzID0gbmV3IFVzZXJCdXNpbmVzcygpO1xyXG4gICAgICAgIC8vICAgICB1c2VyQnVzaW5lc3MucmVnaXN0ZXIodXNlciwgKGVycm9yLCByZXN1bHQpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGlmKGVycm9yKSByZXMuc2VuZCh7XCJlcnJvclwiOiBcImVycm9yXCJ9KTtcclxuICAgICAgICAvLyAgICAgICAgIGVsc2UgcmVzLnNlbmQoe1wic3VjY2Vzc1wiOiBcInN1Y2Nlc3NcIn0pO1xyXG4gICAgICAgIC8vICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBjYXRjaChlKXtcclxuICAgICAgICAvLyAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgLy8gICAgIHJlcy5zZW5kKHtcImVycm9yXCI6IFwiZXJyb3IgaW4geW91ciByZWdpc3RlclwifSk7ICAgICAgICAgICBcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZShyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogdm9pZCB7XHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIHZhciBhdHRlbmRhbmNlOiBJQXR0ZW5kYW5jZU1vZGVsID0gPElBdHRlbmRhbmNlTW9kZWw+cmVxLmJvZHk7XHJcbiAgICAgICAgICAgIHZhciBhdHRlbmRhbmNlQnVzaW5lc3MgPSBuZXcgQXR0ZW5kYW5jZUJ1c2luZXNzKCk7XHJcbiAgICAgICAgICAgIGF0dGVuZGFuY2VCdXNpbmVzcy5jcmVhdGUoYXR0ZW5kYW5jZSwgKGVycm9yLCByZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvcikgcmVzLnNlbmQoe1wiZXJyb3JcIjogXCJlcnJvclwifSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHJlcy5zZW5kKHtcInN1Y2Nlc3NcIjogXCJzdWNjZXNzXCJ9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgcmVzLnNlbmQoe1wiZXJyb3JcIjogXCJlcnJvciBpbiB5b3VyIHJlcXVlc3RcIn0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1cGRhdGUocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRyeSB7XHJcbiAgICAgICAgLy8gICAgIHZhciB1c2VyOiBJVXNlck1vZGVsID0gPElVc2VyTW9kZWw+cmVxLmJvZHk7XHJcbiAgICAgICAgLy8gICAgIHZhciBfaWQ6IHN0cmluZyA9IHJlcS5wYXJhbXMuX2lkO1xyXG4gICAgICAgIC8vICAgICB2YXIgdXNlckJ1c2luZXNzID0gbmV3IFVzZXJCdXNpbmVzcygpO1xyXG4gICAgICAgIC8vICAgICB1c2VyQnVzaW5lc3MudXBkYXRlKF9pZCwgdXNlciwgKGVycm9yLCByZXN1bHQpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGlmKGVycm9yKSByZXMuc2VuZCh7XCJlcnJvclwiOiBcImVycm9yXCJ9KTtcclxuICAgICAgICAvLyAgICAgICAgIGVsc2UgcmVzLnNlbmQoe1wic3VjY2Vzc1wiOiBcInN1Y2Nlc3NcIn0pO1xyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gY2F0Y2ggKGUpICB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIC8vICAgICByZXMuc2VuZCh7XCJlcnJvclwiOiBcImVycm9yIGluIHlvdXIgcmVxdWVzdFwifSk7XHJcblxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuICAgIGRlbGV0ZShyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogdm9pZCB7XHJcbiAgICAgICAgLy8gdHJ5IHtcclxuXHJcbiAgICAgICAgLy8gICAgIHZhciBfaWQ6IHN0cmluZyA9IHJlcS5wYXJhbXMuX2lkO1xyXG4gICAgICAgIC8vICAgICB2YXIgdXNlckJ1c2luZXNzID0gbmV3IFVzZXJCdXNpbmVzcygpO1xyXG4gICAgICAgIC8vICAgICB1c2VyQnVzaW5lc3MuZGVsZXRlKF9pZCwgKGVycm9yLCByZXN1bHQpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGlmKGVycm9yKSByZXMuc2VuZCh7XCJlcnJvclwiOiBcImVycm9yXCJ9KTtcclxuICAgICAgICAvLyAgICAgICAgIGVsc2UgcmVzLnNlbmQoe1wic3VjY2Vzc1wiOiBcInN1Y2Nlc3NcIn0pO1xyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gY2F0Y2ggKGUpICB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIC8vICAgICByZXMuc2VuZCh7XCJlcnJvclwiOiBcImVycm9yIGluIHlvdXIgcmVxdWVzdFwifSk7XHJcblxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuICAgIHJldHJpZXZlKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiB2b2lkIHtcclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGF0dGVuZGFuY2VCdXNpbmVzcyA9IG5ldyBBdHRlbmRhbmNlQnVzaW5lc3MoKTtcclxuICAgICAgICAgICAgYXR0ZW5kYW5jZUJ1c2luZXNzLnJldHJpZXZlKChlcnJvciwgcmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHJlcy5zZW5kKHtcImVycm9yXCI6IFwiZXJyb3JcIn0pO1xyXG4gICAgICAgICAgICAgICAgZWxzZSByZXMuc2VuZChyZXN1bHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9Y2F0Y2ggKGUpICB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICByZXMuc2VuZCh7XCJlcnJvclwiOiBcImVycm9yIGluIHlvdXIgcmVxdWVzdFwifSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZpbmRCeUlkKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiB2b2lkIHtcclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgdmFyIF9pZDogc3RyaW5nID0gcmVxLnBhcmFtcy5faWQ7XHJcbiAgICAgICAgICAgIHZhciBhdHRlbmRhbmNlQnVzaW5lc3MgPSBuZXcgQXR0ZW5kYW5jZUJ1c2luZXNzKCk7XHJcbiAgICAgICAgICAgIGF0dGVuZGFuY2VCdXNpbmVzcy5maW5kQnlJZChfaWQsIChlcnJvciwgcmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHJlcy5zZW5kKHtcImVycm9yXCI6IFwiZXJyb3JcIn0pO1xyXG4gICAgICAgICAgICAgICAgZWxzZSByZXMuc2VuZChyZXN1bHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9Y2F0Y2ggKGUpICB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICByZXMuc2VuZCh7XCJlcnJvclwiOiBcImVycm9yIGluIHlvdXIgcmVxdWVzdFwifSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICAgICB0cmFjayhyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSA6IHZvaWQge1xyXG4gICAgICAgICAgICB2YXIgc2Vzc2lvbnNQcmVzZW50OiBudW1iZXI7XHJcbiAgICAgICAgICAgIHZhciB0b3RhbFNlc3Npb25zOiBudW1iZXI7XHJcbiAgICAgICAgICAgIHZhciBhYnNlbnREYXRlczogYW55O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciBfaWQgPSByZXEuYm9keS5jb3Vyc2VJZDtcclxuICAgICAgICAgICAgdmFyIHJvbGxOdW1iZXIgPSByZXEuYm9keS5yb2xsTnVtYmVyO1xyXG4gICAgICAgICAgICB2YXIgYXR0ZW5kYW5jZUJ1c2luZXNzID0gbmV3IEF0dGVuZGFuY2VCdXNpbmVzcygpO1xyXG4gICAgICAgICAgICBhdHRlbmRhbmNlQnVzaW5lc3MudHJhY2soX2lkLCByb2xsTnVtYmVyLCAoZXJyb3IsIHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25zUHJlc2VudCA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICBhdHRlbmRhbmNlQnVzaW5lc3MuY291bnRUb3RhbFNlc3Npb25zKF9pZCwgKGVycm9yLCByZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbFNlc3Npb25zID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW5kYW5jZUJ1c2luZXNzLmRhdGVzQWJzZW50KF9pZCwgcm9sbE51bWJlciwgKGVycm9yLCByZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJzZW50RGF0ZXMgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zZW5kKHtzZXNzaW9uc1ByZXNlbnQ6IHNlc3Npb25zUHJlc2VudCwgdG90YWxTZXNzaW9uczogdG90YWxTZXNzaW9ucywgYWJzZW50RGF0ZXM6IGFic2VudERhdGVzfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1jYXRjaCAoZSkgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIHJlcy5zZW5kKHtcImVycm9yXCI6IFwiZXJyb3IgaW4geW91ciByZXF1ZXN0XCJ9KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2VsQ291cnNlQXR0ZW5kYW5jZShyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFyIF9pZDogbnVtYmVyID0gcmVxLnBhcmFtcy5faWQ7XHJcbiAgICAgICAgICAgIHZhciBhdHRlbmRhbmNlQnVzaW5lc3MgPSBuZXcgQXR0ZW5kYW5jZUJ1c2luZXNzKCk7XHJcbiAgICAgICAgICAgIGF0dGVuZGFuY2VCdXNpbmVzcy5zZWxDb3Vyc2VBdHRlbmRhbmNlKF9pZCwgKGVycm9yLCByZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge3Jlcy5zZW5kKHtcImVycm9yXCI6IFwiZXJyb3JcIn0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0IG9mIGF0dGVuZGFuY2UgY29udHJvbGxsZXI6IFwiICsgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc2VuZChyZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfWNhdGNoIChlKSAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgcmVzLnNlbmQoe1wiZXJyb3JcIjogXCJlcnJvciBpbiB5b3VyIHJlcXVlc3RcIn0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0ID0gQXR0ZW5kYW5jZUNvbnRyb2xsZXI7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
