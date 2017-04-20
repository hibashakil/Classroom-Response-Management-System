import BaseBusiness = require("./../BaseBusiness");
import IAttendanceModel = require("./../../model/interfaces/AttendanceModel");

interface AttendanceBusiness extends BaseBusiness<IAttendanceModel> {

}
export = AttendanceBusiness;