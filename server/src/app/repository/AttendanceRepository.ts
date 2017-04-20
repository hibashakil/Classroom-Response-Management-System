
import AttendanceModel = require("./../model/AttendanceModel");
import IAttendanceModel = require("./../model/interfaces/AttendanceModel");
import AttendanceSchema = require("./../dataAccess/schemas/AttendanceSchema");
import RepositoryBase = require("./BaseRepository");
import mongoose = require("mongoose");

class AttendanceRepository  extends RepositoryBase<IAttendanceModel> {
        private _attendanceModel: mongoose.Model<mongoose.Document>;
    constructor () {
        super(AttendanceSchema);
        this._attendanceModel = AttendanceSchema;
    }
    track(_id: number, rollNumber: number, callback: (error: any, result: any) => void) {
        //query to track attendance, take course_id-search, go to date, return no.of rollNumbers at all dates
        // this._attendanceModel.count({course_id : _id}, callback);
        this._attendanceModel.aggregate([
            {'$match': {'course_id': _id}},
            {"$unwind": "$studentsPresent"},
            {"$match" : {"studentsPresent": 17100180 }},
            { $group: {
                "_id" : null,
                "count": {"$sum" : 1 }
            }}
        ], callback);
    }
    countTotalSessions(_id: number, callback: (error: any, result:number) => void) {
        this._attendanceModel.count({course_id : _id}, callback);

    }
    datesAbsent(_id: number, rollNumber: number, callback: (error: any, result: any) => void) {
        // this._attendanceModel.find({'studentsPresent': {$nin : _id}}, callback);
        // this._attendanceModel.find({course_id: _id}, callback);
      this._attendanceModel.find({'course_id': _id, 'studentsPresent': {$nin: [rollNumber]}}, {_id : 0, date: 1} , callback);
    }
    selCourseAttendance(_id: number, callback: (error: any, result: any) => void ) {
        console.log("repository reached");
        this._attendanceModel.find({'course_id': _id }, {session: 1, studentsPresent: 1}, callback);
        //countTotalSessions
        // this._attendanceModel.count({course_id : _id}, callback);
    }

}

Object.seal(AttendanceRepository);
export = AttendanceRepository;
