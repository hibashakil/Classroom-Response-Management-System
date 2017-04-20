import AttendanceRepository = require("./../repository/AttendanceRepository");
import IAttendanceBusiness = require("./interfaces/AttendanceBusiness");
import IAttendanceModel = require("./../model/interfaces/AttendanceModel");
import ICourseModel = require("./../model/interfaces/CourseModel");
import AttendanceModel = require("./../model/AttendanceModel");
import express = require("express");


class AttendanceBusiness implements IAttendanceBusiness {
    private _attendanceRepository: AttendanceRepository;

    constructor () {
        this._attendanceRepository = new AttendanceRepository();
    }
    login(item: IAttendanceModel, callback: (error: any, result: any) => void) {
        // this._userRepository.login(item ,callback);     
    }
    register (item: IAttendanceModel, callback: (error: any, result: any) => void) {
        // this._userRepository.register(item, callback);
       }

    create (item: IAttendanceModel, callback: (error: any, result: any) => void) {
        this._attendanceRepository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this._attendanceRepository.retrieve(callback);
    }

    update (_id: String, item: IAttendanceModel, callback: (error: any, result: any) => void) {

        // this._attendanceRepository.findById(_id, (err, res) => {
        //     if(err) callback(err, res);

        //     else
        //         this._attendanceRepository.update(res._id, item, callback);

        // });
    }

    delete (_id: string, callback:(error: any, result: any) => void) {
        // this._courseRepository.delete(_id , callback);
    }

    findById (_id: string, callback: (error: any, result: IAttendanceModel) => void) {
        // this._courseRepository.findById(_id, callback);
    }
    track(_id: number, rollNumber: number, callback: (error: any, result: any) => void) {
        this._attendanceRepository.track(_id, rollNumber, callback);
    }
    countTotalSessions(_id: number, callback: (error:any, result: number) => void) {
        this._attendanceRepository.countTotalSessions(_id, callback);
    }
    datesAbsent(_id: number, rollNumber: number, callback: (error: any, result: any) => void) {
        this._attendanceRepository.datesAbsent(_id, rollNumber, callback);
    }
    selCourseAttendance(_id: number, callback: (error: any, result: any) => void) {
        this._attendanceRepository.selCourseAttendance(_id, callback);
    }

}


Object.seal(AttendanceBusiness);
export = AttendanceBusiness;