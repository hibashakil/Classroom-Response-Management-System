"use strict";
var CourseBusiness = require("./../app/business/CourseBusiness");
var passport = require('passport');
var CourseController = (function () {
    function CourseController() {
    }
    CourseController.prototype.login = function (req, res) {
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
    CourseController.prototype.register = function (req, res) {
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
    CourseController.prototype.create = function (req, res) {
        try {
            var course = req.body;
            var courseBusiness = new CourseBusiness();
            courseBusiness.create(course, function (error, result) {
                if (error) {
                    res.send({ "error": "error" });
                }
                else {
                    res.send({ "success": "success" });
                }
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    CourseController.prototype.update = function (req, res) {
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
    CourseController.prototype.delete = function (req, res) {
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
    CourseController.prototype.retrieve = function (req, res) {
        try {
            console.log("entered retrieve");
            var courseBusiness = new CourseBusiness();
            courseBusiness.retrieve(function (error, result) {
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
    CourseController.prototype.findById = function (req, res) {
        // try {
        //     var _id: string = req.params._id;
        //     var userBusiness = new UserBusiness();
        //     userBusiness.findById(_id, (error, result) => {
        //         if(error) res.send({"error": "error"});
        //         else res.send(result);
        //     });
        // }
        // catch (e)  {
        //     console.log(e);
        //     res.send({"error": "error in your request"});
        // }
    };
    CourseController.prototype.track = function (req, res) {
        var sessionsPresent;
        var totalSessions;
        try {
            var _id = req.body.courseId;
            var rollNumber = req.body.rollNumber;
            console.log("request id is: " + req.body.courseId);
            console.log("response is: " + req.body.rollNumber);
            var courseBusiness = new CourseBusiness();
            courseBusiness.track(_id, rollNumber, function (error, result) {
                console.log("inside course controller track");
                if (error) {
                    // res.send({"error": "error"});
                    console.log(error);
                }
                else {
                    // res.send(result);
                    console.log("first- controller");
                    sessionsPresent = result;
                    console.log(result[0].count);
                    courseBusiness.countTotalSessions(_id, function (error, result) {
                        console.log("second" + result);
                        if (error) {
                            console.log(error);
                        }
                        else {
                            console.log("Second appeared");
                            totalSessions = result;
                            res.send({ sessionsPresent: sessionsPresent, totalSessions: totalSessions });
                            console.log(result);
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
    CourseController.prototype.retInsCourses = function (req, res) {
        try {
            var _id = req.params._id;
            var courseBusiness = new CourseBusiness();
            courseBusiness.retInsCourses(_id, function (error, result) {
                if (error) {
                    res.send({ "error": "error" });
                }
                else {
                    res.send(result);
                }
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    CourseController.prototype.retStuCourses = function (req, res) {
        try {
            var _id = req.params._id;
            var courseBusiness = new CourseBusiness();
            console.log('student id at controller is: ' + _id);
            courseBusiness.retStuCourses(_id, function (error, result) {
                if (error) {
                    res.send({ "error": "error" });
                }
                else {
                    res.send(result);
                }
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    CourseController.prototype.saveAttendanceCode = function (req, res) {
        try {
            console.log("entered controller");
            var course = req.body;
            var _id = req.params._id;
            var courseBusiness = new CourseBusiness();
            courseBusiness.saveCode(_id, course.course_id, function (error, result) {
                if (error) {
                    res.send({ "error": "error" });
                }
                else {
                    res.send({ "success": "success" });
                }
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    return CourseController;
}());
module.exports = CourseController;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL0NvdXJzZUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLElBQU8sY0FBYyxXQUFXLGtDQUFrQyxDQUFDLENBQUM7QUFHcEUsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRW5DO0lBQUE7SUFrTkEsQ0FBQztJQWhOTyxnQ0FBSyxHQUFMLFVBQU0sR0FBb0IsRUFBRSxHQUFxQjtRQUNqRCxPQUFPO1FBQ1AsbURBQW1EO1FBQ25ELDZDQUE2QztRQUM3QyxvREFBb0Q7UUFDcEQsNkRBQTZEO1FBQzdELDBEQUEwRDtRQUMxRCxVQUFVO1FBQ1YsSUFBSTtRQUNKLFlBQVk7UUFDWix1QkFBdUI7UUFDdkIsbURBQW1EO1FBQ25ELElBQUk7SUFDUixDQUFDO0lBRUQsbUNBQVEsR0FBUixVQUFTLEdBQW9CLEVBQUUsR0FBcUI7UUFDaEQsT0FBTztRQUNQLG1EQUFtRDtRQUNuRCw2Q0FBNkM7UUFDN0MsdURBQXVEO1FBQ3ZELGtEQUFrRDtRQUNsRCxpREFBaUQ7UUFDakQsVUFBVTtRQUVWLElBQUk7UUFDSixZQUFZO1FBQ1oseUJBQXlCO1FBQ3pCLGdFQUFnRTtRQUNoRSxJQUFJO0lBRVIsQ0FBQztJQUVELGlDQUFNLEdBQU4sVUFBTyxHQUFvQixFQUFFLEdBQXFCO1FBQzlDLElBQUksQ0FBQztZQUVELElBQUksTUFBTSxHQUErQixHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ2xELElBQUksY0FBYyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7WUFDMUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsVUFBQyxLQUFLLEVBQUUsTUFBTTtnQkFDeEMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDUixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JB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UyxFQUFFLFNBQVMsRUFBQyxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUVQLENBQUM7UUFBQSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUMsQ0FBQyxDQUFDO1FBQ2pELENBQUM7SUFDTCxDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQWxOQSxBQWtOQyxJQUFBO0FBQ0QsaUJBQVMsZ0JBQWdCLENBQUMiLCJmaWxlIjoiY29udHJvbGxlcnMvQ291cnNlQ29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XHJcbmltcG9ydCBDb3Vyc2VCdXNpbmVzcyA9IHJlcXVpcmUoXCIuLy4uL2FwcC9idXNpbmVzcy9Db3Vyc2VCdXNpbmVzc1wiKTtcclxuaW1wb3J0IElCYXNlQ29udHJvbGxlciA9IHJlcXVpcmUoXCIuL0Jhc2VDb250cm9sbGVyXCIpO1xyXG5pbXBvcnQgSUNvdXJzZU1vZGVsID0gcmVxdWlyZShcIi4vLi4vYXBwL21vZGVsL2ludGVyZmFjZXMvQ291cnNlTW9kZWxcIik7XHJcbnZhciBwYXNzcG9ydCA9IHJlcXVpcmUoJ3Bhc3Nwb3J0Jyk7XHJcblxyXG5jbGFzcyBDb3Vyc2VDb250cm9sbGVyIGltcGxlbWVudHMgSUJhc2VDb250cm9sbGVyIDxDb3Vyc2VCdXNpbmVzcz4ge1xyXG5cclxuICAgICAgICBsb2dpbihyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSA6IHZvaWQge1xyXG4gICAgICAgIC8vIHRyeXtcclxuICAgICAgICAvLyAgICAgdmFyIHVzZXI6IElVc2VyTW9kZWwgPSA8SVVzZXJNb2RlbD5yZXEuYm9keTtcclxuICAgICAgICAvLyAgICAgdmFyIHVzZXJCdXNpbmVzcyA9IG5ldyBVc2VyQnVzaW5lc3MoKTtcclxuICAgICAgICAvLyAgICAgdXNlckJ1c2luZXNzLmxvZ2luKHVzZXIsIChlcnJvciwgcmVzdWx0KSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAoZXJyb3IpIHJlcy5zZW5kKHtcImVycm9yXCI6IFwiY291bGQgbm90IGxvZ2luXCJ9KTtcclxuICAgICAgICAvLyAgICAgICAgIGVsc2UgcmVzLnNlbmQoe1wic3VjY2Vzc1wiOiBcImxvZ2luIHN1Y2Nlc3NmdWxcIn0pO1xyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gY2F0Y2goZSl7XHJcbiAgICAgICAgLy8gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAvLyAgICAgcmVzLnNlbmQoe1wiZXJyb3JcIjogXCJlcnJvciBpbiB5b3VyIGxvZ2luXCJ9KTsgXHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpIDogdm9pZCB7XHJcbiAgICAgICAgLy8gdHJ5e1xyXG4gICAgICAgIC8vICAgICB2YXIgdXNlcjogSVVzZXJNb2RlbCA9IDxJVXNlck1vZGVsPnJlcS5ib2R5O1xyXG4gICAgICAgIC8vICAgICB2YXIgdXNlckJ1c2luZXNzID0gbmV3IFVzZXJCdXNpbmVzcygpO1xyXG4gICAgICAgIC8vICAgICB1c2VyQnVzaW5lc3MucmVnaXN0ZXIodXNlciwgKGVycm9yLCByZXN1bHQpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGlmKGVycm9yKSByZXMuc2VuZCh7XCJlcnJvclwiOiBcImVycm9yXCJ9KTtcclxuICAgICAgICAvLyAgICAgICAgIGVsc2UgcmVzLnNlbmQoe1wic3VjY2Vzc1wiOiBcInN1Y2Nlc3NcIn0pO1xyXG4gICAgICAgIC8vICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGNhdGNoKGUpe1xyXG4gICAgICAgIC8vICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAvLyAgICAgcmVzLnNlbmQoe1wiZXJyb3JcIjogXCJlcnJvciBpbiB5b3VyIHJlZ2lzdGVyXCJ9KTsgICAgICAgICAgIFxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiB2b2lkIHtcclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGNvdXJzZTogSUNvdXJzZU1vZGVsID0gPElDb3Vyc2VNb2RlbD5yZXEuYm9keTtcclxuICAgICAgICAgICAgdmFyIGNvdXJzZUJ1c2luZXNzID0gbmV3IENvdXJzZUJ1c2luZXNzKCk7XHJcbiAgICAgICAgICAgIGNvdXJzZUJ1c2luZXNzLmNyZWF0ZShjb3Vyc2UsIChlcnJvciwgcmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc2VuZCh7XCJlcnJvclwiOiBcImVycm9yXCJ9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnNlbmQoe1wic3VjY2Vzc1wiOiBcInN1Y2Nlc3NcIn0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpICB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICByZXMuc2VuZCh7XCJlcnJvclwiOiBcImVycm9yIGluIHlvdXIgcmVxdWVzdFwifSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVwZGF0ZShyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogdm9pZCB7XHJcbiAgICAgICAgLy8gdHJ5IHtcclxuICAgICAgICAvLyAgICAgdmFyIHVzZXI6IElVc2VyTW9kZWwgPSA8SVVzZXJNb2RlbD5yZXEuYm9keTtcclxuICAgICAgICAvLyAgICAgdmFyIF9pZDogc3RyaW5nID0gcmVxLnBhcmFtcy5faWQ7XHJcbiAgICAgICAgLy8gICAgIHZhciB1c2VyQnVzaW5lc3MgPSBuZXcgVXNlckJ1c2luZXNzKCk7XHJcbiAgICAgICAgLy8gICAgIHVzZXJCdXNpbmVzcy51cGRhdGUoX2lkLCB1c2VyLCAoZXJyb3IsIHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgaWYoZXJyb3IpIHJlcy5zZW5kKHtcImVycm9yXCI6IFwiZXJyb3JcIn0pO1xyXG4gICAgICAgIC8vICAgICAgICAgZWxzZSByZXMuc2VuZCh7XCJzdWNjZXNzXCI6IFwic3VjY2Vzc1wifSk7XHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBjYXRjaCAoZSkgIHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgLy8gICAgIHJlcy5zZW5kKHtcImVycm9yXCI6IFwiZXJyb3IgaW4geW91ciByZXF1ZXN0XCJ9KTtcclxuXHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG4gICAgZGVsZXRlKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiB2b2lkIHtcclxuICAgICAgICAvLyB0cnkge1xyXG5cclxuICAgICAgICAvLyAgICAgdmFyIF9pZDogc3RyaW5nID0gcmVxLnBhcmFtcy5faWQ7XHJcbiAgICAgICAgLy8gICAgIHZhciB1c2VyQnVzaW5lc3MgPSBuZXcgVXNlckJ1c2luZXNzKCk7XHJcbiAgICAgICAgLy8gICAgIHVzZXJCdXNpbmVzcy5kZWxldGUoX2lkLCAoZXJyb3IsIHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgaWYoZXJyb3IpIHJlcy5zZW5kKHtcImVycm9yXCI6IFwiZXJyb3JcIn0pO1xyXG4gICAgICAgIC8vICAgICAgICAgZWxzZSByZXMuc2VuZCh7XCJzdWNjZXNzXCI6IFwic3VjY2Vzc1wifSk7XHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBjYXRjaCAoZSkgIHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgLy8gICAgIHJlcy5zZW5kKHtcImVycm9yXCI6IFwiZXJyb3IgaW4geW91ciByZXF1ZXN0XCJ9KTtcclxuXHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG4gICAgcmV0cmlldmUocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IHZvaWQge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW50ZXJlZCByZXRyaWV2ZVwiKVxyXG4gICAgICAgICAgICB2YXIgY291cnNlQnVzaW5lc3MgPSBuZXcgQ291cnNlQnVzaW5lc3MoKTtcclxuICAgICAgICAgICAgY291cnNlQnVzaW5lc3MucmV0cmlldmUoKGVycm9yLCByZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvcikgcmVzLnNlbmQoe1wiZXJyb3JcIjogXCJlcnJvclwifSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHJlcy5zZW5kKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIHJlcy5zZW5kKHtcImVycm9yXCI6IFwiZXJyb3IgaW4geW91ciByZXF1ZXN0XCJ9KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmluZEJ5SWQocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRyeSB7XHJcblxyXG4gICAgICAgIC8vICAgICB2YXIgX2lkOiBzdHJpbmcgPSByZXEucGFyYW1zLl9pZDtcclxuICAgICAgICAvLyAgICAgdmFyIHVzZXJCdXNpbmVzcyA9IG5ldyBVc2VyQnVzaW5lc3MoKTtcclxuICAgICAgICAvLyAgICAgdXNlckJ1c2luZXNzLmZpbmRCeUlkKF9pZCwgKGVycm9yLCByZXN1bHQpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGlmKGVycm9yKSByZXMuc2VuZCh7XCJlcnJvclwiOiBcImVycm9yXCJ9KTtcclxuICAgICAgICAvLyAgICAgICAgIGVsc2UgcmVzLnNlbmQocmVzdWx0KTtcclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGNhdGNoIChlKSAge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAvLyAgICAgcmVzLnNlbmQoe1wiZXJyb3JcIjogXCJlcnJvciBpbiB5b3VyIHJlcXVlc3RcIn0pO1xyXG5cclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbiAgICAgdHJhY2socmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSkgOiB2b2lkIHtcclxuICAgICAgICAgICAgdmFyIHNlc3Npb25zUHJlc2VudDogbnVtYmVyO1xyXG4gICAgICAgICAgICB2YXIgdG90YWxTZXNzaW9uczogbnVtYmVyO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciBfaWQgPSByZXEuYm9keS5jb3Vyc2VJZDtcclxuICAgICAgICAgICAgdmFyIHJvbGxOdW1iZXIgPSByZXEuYm9keS5yb2xsTnVtYmVyO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlcXVlc3QgaWQgaXM6IFwiICsgcmVxLmJvZHkuY291cnNlSWQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlIGlzOiBcIiArIHJlcS5ib2R5LnJvbGxOdW1iZXIpO1xyXG4gICAgICAgICAgICB2YXIgY291cnNlQnVzaW5lc3MgPSBuZXcgQ291cnNlQnVzaW5lc3MoKTtcclxuICAgICAgICAgICAgY291cnNlQnVzaW5lc3MudHJhY2soX2lkLCByb2xsTnVtYmVyLCAoZXJyb3IsIHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbnNpZGUgY291cnNlIGNvbnRyb2xsZXIgdHJhY2tcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyByZXMuc2VuZCh7XCJlcnJvclwiOiBcImVycm9yXCJ9KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyByZXMuc2VuZChyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmlyc3QtIGNvbnRyb2xsZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbnNQcmVzZW50ID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdFswXS5jb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY291cnNlQnVzaW5lc3MuY291bnRUb3RhbFNlc3Npb25zKF9pZCwgKGVycm9yLCByZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZWNvbmRcIiArIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZWNvbmQgYXBwZWFyZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbFNlc3Npb25zID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnNlbmQoe3Nlc3Npb25zUHJlc2VudDogc2Vzc2lvbnNQcmVzZW50LCB0b3RhbFNlc3Npb25zOiB0b3RhbFNlc3Npb25zfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIHJlcy5zZW5kKHtcImVycm9yXCI6IFwiZXJyb3IgaW4geW91ciByZXF1ZXN0XCJ9KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0SW5zQ291cnNlcyhyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFyIF9pZDogc3RyaW5nID0gcmVxLnBhcmFtcy5faWQ7XHJcbiAgICAgICAgICAgIHZhciBjb3Vyc2VCdXNpbmVzcyA9IG5ldyBDb3Vyc2VCdXNpbmVzcygpO1xyXG4gICAgICAgICAgICBjb3Vyc2VCdXNpbmVzcy5yZXRJbnNDb3Vyc2VzKF9pZCwgKGVycm9yLCByZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zZW5kKHtcImVycm9yXCI6IFwiZXJyb3JcIn0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtyZXMuc2VuZChyZXN1bHQpOyB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpICB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICByZXMuc2VuZCh7XCJlcnJvclwiOiBcImVycm9yIGluIHlvdXIgcmVxdWVzdFwifSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICByZXRTdHVDb3Vyc2VzKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpIHtcclxuICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFyIF9pZDogc3RyaW5nID0gcmVxLnBhcmFtcy5faWQ7XHJcbiAgICAgICAgICAgIHZhciBjb3Vyc2VCdXNpbmVzcyA9IG5ldyBDb3Vyc2VCdXNpbmVzcygpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3R1ZGVudCBpZCBhdCBjb250cm9sbGVyIGlzOiAnICsgX2lkKTtcclxuICAgICAgICAgICAgY291cnNlQnVzaW5lc3MucmV0U3R1Q291cnNlcyhfaWQsIChlcnJvciwgcmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc2VuZCh7XCJlcnJvclwiOiBcImVycm9yXCJ9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7cmVzLnNlbmQocmVzdWx0KTsgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlKSAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgcmVzLnNlbmQoe1wiZXJyb3JcIjogXCJlcnJvciBpbiB5b3VyIHJlcXVlc3RcIn0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICB9XHJcbiAgICAgICBzYXZlQXR0ZW5kYW5jZUNvZGUocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW50ZXJlZCBjb250cm9sbGVyXCIpO1xyXG4gICAgICAgICAgICB2YXIgY291cnNlOiBJQ291cnNlTW9kZWwgPSA8SUNvdXJzZU1vZGVsPnJlcS5ib2R5O1xyXG4gICAgICAgICAgICB2YXIgX2lkOiBOdW1iZXIgPSByZXEucGFyYW1zLl9pZDtcclxuICAgICAgICAgICAgdmFyIGNvdXJzZUJ1c2luZXNzID0gbmV3IENvdXJzZUJ1c2luZXNzKCk7XHJcbiAgICAgICAgICAgIGNvdXJzZUJ1c2luZXNzLnNhdmVDb2RlKF9pZCwgY291cnNlLmNvdXJzZV9pZCwgKGVycm9yLCByZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zZW5kKHtcImVycm9yXCI6IFwiZXJyb3JcIn0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc2VuZCh7XCJzdWNjZXNzXCI6IFwic3VjY2Vzc1wifSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9Y2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIHJlcy5zZW5kKHtcImVycm9yXCI6IFwiZXJyb3IgaW4geW91ciByZXF1ZXN0XCJ9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0ID0gQ291cnNlQ29udHJvbGxlcjsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
