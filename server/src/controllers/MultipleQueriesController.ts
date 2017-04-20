import express = require("express");
import CourseBusiness = require("./../app/business/CourseBusiness");
import AttendanceBusiness = require("./../app/business/AttendanceBusiness");
import ICourseModel = require("./../app/model/interfaces/CourseModel");
import IAttendanceModel = require("./../app/model/interfaces/AttendanceModel");
var passport = require('passport');


class MultipleQueriesController {
    selCourseAttendance(req: express.Request, res: express.Response) {
        try {
            var _id: number = req.params._id;
            var attendanceBusiness = new AttendanceBusiness();
            var courseBusiness = new CourseBusiness();
            var attendance =  {"name" : "null", "1": "A", "2": "A", "3" : "A", "4": "A",
            "5": "A", "6": "A", "7": "A", "8": "A", "9": "A", "10": "A", "11": "A",
             "12": "A", "13": "A", "14": "A", "15": "A", "16": "A", "17": "A",
             "18": "A", "19": "A", "20": "A", "21": "A", "22": "A", "23": "A",
              "24": "A", "25": "A", "26": "A", "27": "A", "28": "A", "29": "A", "30": "A" };
           var send = [];
            attendanceBusiness.selCourseAttendance(_id, (error, result1) => {
                if (error) {
                    console.log(error);
                } else {
                    courseBusiness.allStudentsEnrolled(_id, (error, result2) => {
                        if (error) {
                            console.log(error);
                        } else {
                            for (var i = 0; i < result2[0].studentsEnrolled.length ; i++) {
                                attendance.name = result2[0].studentsEnrolled[i];
                                var l = send.push(attendance);
                            }
                            //to change a json key
                            // for (var i = 0; i < send.length; i++) {
                            //     var obj = send[i];
                            //     console.log(obj);
                            //     for (var key in obj) {
                            //         if (key === "one") {
                            //             obj[key] = "P";
                            //         }
                            // }

                            for (var i = 0; i < result1.length; i++) {
                                for (var j = 0; j < result1[i].studentsPresent.length; j++) {
                                    var name = result1[i].studentsPresent[j];
                                    for (var k = 0; k < send.length ; k++) {
                                        if (send[k].name === name) {
                                            var sess = result1[i].session.toString();
                                            var obj = send[k];
                                            for (var key in obj) {
                                                if (key === sess) {
                                                    obj[key] = "P";
                                                }
                                            }
                                    }
                                }
                            }
                        }
                        console.log(send);
                        res.send(send);
                    }
                });
            }
        });
        } catch (e) {
            console.log(e);
            res.send({"error": "error in your request"});
        }
    }
}
export = MultipleQueriesController;