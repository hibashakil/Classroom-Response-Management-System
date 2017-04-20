
import CourseModel = require("./../model/CourseModel");
import ICourseModel = require("./../model/interfaces/CourseModel");
import CourseSchema = require("./../dataAccess/schemas/CourseSchema");
import RepositoryBase = require("./BaseRepository");
import mongoose = require("mongoose");


class CourseRepository  extends RepositoryBase<ICourseModel> {

    private _courseModel: mongoose.Model<mongoose.Document>;

    constructor () {
        super(CourseSchema);
       this._courseModel = CourseSchema; 
    }
    allStudentsEnrolled(_id: number, callback: (error:any, result: any) => void){
    this._courseModel.find({course_id: 123}, {studentsEnrolled: 1}, callback);
    }
    track(_id: number, rollNumber: number, callback: (error: any, result: any) => void) {
    //query to track attendance, take course_id-search, go to date, return no.of rollNumbers at all dates
    console.log('course Repository track');
    // this._attendanceModel.count({course_id : _id}, callback);
    this._courseModel.aggregate([
        {'$match': {'course_id': _id}},
        {"$unwind": "$studentsPresent"},
        {"$match" : {"studentsPresent": 17100180 }},
        { $group: {
            "_id" : null,
            "count": {"$sum" : 1 }
        }}
        ], callback);
    }
    countTotalSessions(_id: number, callback: (error: any, result:number)=> void){
        console.log("count total");
        this._courseModel.count({course_id : _id}, callback);

    }
    retInsCourses(_id: string, callback: (error: any, result: any) => void){
        console.log("retInsCourses Repository");
        this._courseModel.find({instructor: _id}, callback);
    }
    retStuCourses(_id: string, callback: (error: any, result: any) => void) {

    }
    // retCodeId(id: Number, callback: (error: any, result:any) => void) {
    //     console.log("save code rep");
    //     this._courseModel.find({course_id : id}, callback);
    // }
    updateCode (code: Number, id: Number, callback: (error:any, result:any) => void) {
        this._courseModel.findOneAndUpdate({course_id: id}, {$set: {attendanceCode: code}}, callback);

    }
    getAttendanceCode(id: Number,  callback: (error:any, result: any) => void) {
        console.log("into getattendance code");
        this._courseModel.find({course_id:id}, {attendanceCode : 1}, callback);
    }
}

Object.seal(CourseRepository);
export = CourseRepository;