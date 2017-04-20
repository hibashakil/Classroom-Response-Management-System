import express = require("express");
import AttendanceBusiness = require("./../app/business/AttendanceBusiness");
import IBaseController = require("./BaseController");
import IAttendanceModel = require("./../app/model/interfaces/AttendanceModel");
import ICourseModel = require("./../app/model/interfaces/CourseModel");
var passport = require('passport');

class AttendanceController implements IBaseController <AttendanceBusiness> {
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

            var attendance: IAttendanceModel = <IAttendanceModel>req.body;
            var attendanceBusiness = new AttendanceBusiness();
            attendanceBusiness.create(attendance, (error, result) => {
                if (error) res.send({"error": "error"});
                else res.send({"success": "success"});
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

            var attendanceBusiness = new AttendanceBusiness();
            attendanceBusiness.retrieve((error, result) => {
                if (error) res.send({"error": "error"});
                else res.send(result);
            });
        }catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    findById(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var attendanceBusiness = new AttendanceBusiness();
            attendanceBusiness.findById(_id, (error, result) => {
                if (error) res.send({"error": "error"});
                else res.send(result);
            });
        }catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
        track(req: express.Request, res: express.Response) : void {
            var sessionsPresent: number;
            var totalSessions: number;
            var absentDates: any;
        try {
            var _id = req.body.courseId;
            var rollNumber = req.body.rollNumber;
            var attendanceBusiness = new AttendanceBusiness();
            attendanceBusiness.track(_id, rollNumber, (error, result) => {
                if (error) {
                    console.log(error);
                }else {
                    sessionsPresent = result;
                    attendanceBusiness.countTotalSessions(_id, (error, result) => {
                        if (error) {
                            console.log(error);
                        }
                        else {
                            totalSessions = result;
                            attendanceBusiness.datesAbsent(_id, rollNumber, (error, result) => {
                                if (error) {
                                    console.log(error);
                                }
                                else {
                                    absentDates = result;
                                    res.send({sessionsPresent: sessionsPresent, totalSessions: totalSessions, absentDates: absentDates});

                                }
                            });
                        }
                    });
                }
            });
        }catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    selCourseAttendance(req: express.Request, res: express.Response) {
        try {
            var _id: number = req.params._id;
            var attendanceBusiness = new AttendanceBusiness();
            attendanceBusiness.selCourseAttendance(_id, (error, result) => {
                if (error) {res.send({"error": "error"});
            } else {
                    console.log("result of attendance controlller: " + result);
                    res.send(result);

                }
            });
        }catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
}
export = AttendanceController;