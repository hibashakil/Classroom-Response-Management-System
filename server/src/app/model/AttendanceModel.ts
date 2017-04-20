import IAttendanceModel = require('./interfaces/AttendanceModel');

class AttendanceModel {

    private _attendanceModel: IAttendanceModel;

    constructor(courseModel: IAttendanceModel) {
        this._attendanceModel = courseModel;
    }
    get course_id (): number {
        return this._attendanceModel.course_id;
    }
    get session (): number {
        return this._attendanceModel.session;
    }
    get date(): number {
        return this._attendanceModel.date;
    }

    get studentsPresent (): [number] {
        return this._attendanceModel.studentsPresent;
    }
}
Object.seal(AttendanceModel);
export =  AttendanceModel;