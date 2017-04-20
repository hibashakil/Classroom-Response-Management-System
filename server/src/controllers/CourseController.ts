import express = require("express");
import CourseBusiness = require("./../app/business/CourseBusiness");
import IBaseController = require("./BaseController");
import ICourseModel = require("./../app/model/interfaces/CourseModel");
var passport = require('passport');

class CourseController implements IBaseController <CourseBusiness> {

        login(req: express.Request, res: express.Response) : void {
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
    }

    register(req: express.Request, res: express.Response) : void {
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

    }

    create(req: express.Request, res: express.Response): void {
        try {

            var course: ICourseModel = <ICourseModel>req.body;
            var courseBusiness = new CourseBusiness();
            courseBusiness.create(course, (error, result) => {
                if (error) {
                    res.send({"error": "error"});
                } else {
                    res.send({"success": "success"});
                }
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    update(req: express.Request, res: express.Response): void {
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
    }
    delete(req: express.Request, res: express.Response): void {
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
    }
    retrieve(req: express.Request, res: express.Response): void {
        try {
            console.log("entered retrieve")
            var courseBusiness = new CourseBusiness();
            courseBusiness.retrieve((error, result) => {
                if (error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    findById(req: express.Request, res: express.Response): void {
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
    }
     track(req: express.Request, res: express.Response) : void {
            var sessionsPresent: number;
            var totalSessions: number;
        try {
            var _id = req.body.courseId;
            var rollNumber = req.body.rollNumber;
            console.log("request id is: " + req.body.courseId);
            console.log("response is: " + req.body.rollNumber);
            var courseBusiness = new CourseBusiness();
            courseBusiness.track(_id, rollNumber, (error, result) => {
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
                    courseBusiness.countTotalSessions(_id, (error, result) => {
                        console.log("second" + result);
                        if (error) {
                            console.log(error);
                        }
                        else {
                            console.log("Second appeared");
                            totalSessions = result;
                            res.send({sessionsPresent: sessionsPresent, totalSessions: totalSessions});
                            console.log(result);
                        }
                    });
                }
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    retInsCourses(req: express.Request, res: express.Response) {
        try {
            var _id: string = req.params._id;
            var courseBusiness = new CourseBusiness();
            courseBusiness.retInsCourses(_id, (error, result) => {
                if (error) {
                    res.send({"error": "error"});
                } else {res.send(result); }
            });
        } catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }

    }

   retStuCourses(req: express.Request, res: express.Response) {
         try {
            var _id: string = req.params._id;
            var courseBusiness = new CourseBusiness();
            console.log('student id at controller is: ' + _id);
            courseBusiness.retStuCourses(_id, (error, result) => {
                if (error) {
                    res.send({"error": "error"});
                } else {res.send(result); }
            });
        } catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }

   }
       saveAttendanceCode(req: express.Request, res: express.Response) {
        try {
            console.log("entered controller");
            var course: ICourseModel = <ICourseModel>req.body;
            var _id: Number = req.params._id;
            var courseBusiness = new CourseBusiness();
            courseBusiness.saveCode(_id, course.course_id, (error, result) => {
                if (error) {
                    res.send({"error": "error"});
                } else {
                    res.send({"success": "success"});
                }
            });

        }catch (e) {
            console.log(e);
            res.send({"error": "error in your request"});
        }
    }
}
export = CourseController;