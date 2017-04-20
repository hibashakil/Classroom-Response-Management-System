"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CourseSchema = require("./../dataAccess/schemas/CourseSchema");
var RepositoryBase = require("./BaseRepository");
var CourseRepository = (function (_super) {
    __extends(CourseRepository, _super);
    function CourseRepository() {
        _super.call(this, CourseSchema);
        this._courseModel = CourseSchema;
    }
    CourseRepository.prototype.allStudentsEnrolled = function (_id, callback) {
        this._courseModel.find({ course_id: 123 }, { studentsEnrolled: 1 }, callback);
    };
    CourseRepository.prototype.track = function (_id, rollNumber, callback) {
        //query to track attendance, take course_id-search, go to date, return no.of rollNumbers at all dates
        console.log('course Repository track');
        // this._attendanceModel.count({course_id : _id}, callback);
        this._courseModel.aggregate([
            { '$match': { 'course_id': _id } },
            { "$unwind": "$studentsPresent" },
            { "$match": { "studentsPresent": 17100180 } },
            { $group: {
                    "_id": null,
                    "count": { "$sum": 1 }
                } }
        ], callback);
    };
    CourseRepository.prototype.countTotalSessions = function (_id, callback) {
        console.log("count total");
        this._courseModel.count({ course_id: _id }, callback);
    };
    CourseRepository.prototype.retInsCourses = function (_id, callback) {
        console.log("retInsCourses Repository");
        this._courseModel.find({ instructor: _id }, callback);
    };
    CourseRepository.prototype.retStuCourses = function (_id, callback) {
    };
    // retCodeId(id: Number, callback: (error: any, result:any) => void) {
    //     console.log("save code rep");
    //     this._courseModel.find({course_id : id}, callback);
    // }
    CourseRepository.prototype.updateCode = function (code, id, callback) {
        this._courseModel.findOneAndUpdate({ course_id: id }, { $set: { attendanceCode: code } }, callback);
    };
    CourseRepository.prototype.getAttendanceCode = function (id, callback) {
        console.log("into getattendance code");
        this._courseModel.find({ course_id: id }, { attendanceCode: 1 }, callback);
    };
    return CourseRepository;
}(RepositoryBase));
Object.seal(CourseRepository);
module.exports = CourseRepository;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXBvc2l0b3J5L0NvdXJzZVJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsSUFBTyxZQUFZLFdBQVcsc0NBQXNDLENBQUMsQ0FBQztBQUN0RSxJQUFPLGNBQWMsV0FBVyxrQkFBa0IsQ0FBQyxDQUFDO0FBSXBEO0lBQWdDLG9DQUE0QjtJQUl4RDtRQUNJLGtCQUFNLFlBQVksQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ3BDLENBQUM7SUFDRCw4Q0FBbUIsR0FBbkIsVUFBb0IsR0FBVyxFQUFFLFFBQTBDO1FBQzNFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUMsU0FBUyxFQUFFLEdBQUcsRUFBQyxFQUFFLEVBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUNELGdDQUFLLEdBQUwsVUFBTSxHQUFXLEVBQUUsVUFBa0IsRUFBRSxRQUEyQztRQUNsRixxR0FBcUc7UUFDckcsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3ZDLDREQUE0RDtRQUM1RCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQztZQUN4QixFQUFDLFFBQVEsRUFBRSxFQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUMsRUFBQztZQUM5QixFQUFDLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQUMvQixFQUFDLFFBQVEsRUFBRyxFQUFDLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxFQUFDO1lBQzNDLEVBQUUsTUFBTSxFQUFFO29CQUNOLEtBQUssRUFBRyxJQUFJO29CQUNaLE9BQU8sRUFBRSxFQUFDLE1BQU0sRUFBRyxDQUFDLEVBQUU7aUJBQ3pCLEVBQUM7U0FDRCxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFDRCw2Q0FBa0IsR0FBbEIsVUFBbUIsR0FBVyxFQUFFLFFBQTRDO1FBQ3hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUcsR0FBRyxFQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFFekQsQ0FBQztJQUNELHdDQUFhLEdBQWIsVUFBYyxHQUFXLEVBQUUsUUFBMkM7UUFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUMsVUFBVSxFQUFFLEdBQUcsRUFBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFDRCx3Q0FBYSxHQUFiLFVBQWMsR0FBVyxFQUFFLFFBQTJDO0lBRXRFLENBQUM7SUFDRCxzRUFBc0U7SUFDdEUsb0NBQW9DO0lBQ3BDLDBEQUEwRDtJQUMxRCxJQUFJO0lBQ0oscUNBQVUsR0FBVixVQUFZLElBQVksRUFBRSxFQUFVLEVBQUUsUUFBeUM7UUFDM0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxFQUFDLGNBQWMsRUFBRSxJQUFJLEVBQUMsRUFBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBRWxHLENBQUM7SUFDRCw0Q0FBaUIsR0FBakIsVUFBa0IsRUFBVSxFQUFHLFFBQTBDO1FBQ3JFLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFDLFNBQVMsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLGNBQWMsRUFBRyxDQUFDLEVBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQWpEQSxBQWlEQyxDQWpEK0IsY0FBYyxHQWlEN0M7QUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDOUIsaUJBQVMsZ0JBQWdCLENBQUMiLCJmaWxlIjoiYXBwL3JlcG9zaXRvcnkvQ291cnNlUmVwb3NpdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgQ291cnNlTW9kZWwgPSByZXF1aXJlKFwiLi8uLi9tb2RlbC9Db3Vyc2VNb2RlbFwiKTtcclxuaW1wb3J0IElDb3Vyc2VNb2RlbCA9IHJlcXVpcmUoXCIuLy4uL21vZGVsL2ludGVyZmFjZXMvQ291cnNlTW9kZWxcIik7XHJcbmltcG9ydCBDb3Vyc2VTY2hlbWEgPSByZXF1aXJlKFwiLi8uLi9kYXRhQWNjZXNzL3NjaGVtYXMvQ291cnNlU2NoZW1hXCIpO1xyXG5pbXBvcnQgUmVwb3NpdG9yeUJhc2UgPSByZXF1aXJlKFwiLi9CYXNlUmVwb3NpdG9yeVwiKTtcclxuaW1wb3J0IG1vbmdvb3NlID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpO1xyXG5cclxuXHJcbmNsYXNzIENvdXJzZVJlcG9zaXRvcnkgIGV4dGVuZHMgUmVwb3NpdG9yeUJhc2U8SUNvdXJzZU1vZGVsPiB7XHJcblxyXG4gICAgcHJpdmF0ZSBfY291cnNlTW9kZWw6IG1vbmdvb3NlLk1vZGVsPG1vbmdvb3NlLkRvY3VtZW50PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgc3VwZXIoQ291cnNlU2NoZW1hKTtcclxuICAgICAgIHRoaXMuX2NvdXJzZU1vZGVsID0gQ291cnNlU2NoZW1hOyBcclxuICAgIH1cclxuICAgIGFsbFN0dWRlbnRzRW5yb2xsZWQoX2lkOiBudW1iZXIsIGNhbGxiYWNrOiAoZXJyb3I6YW55LCByZXN1bHQ6IGFueSkgPT4gdm9pZCl7XHJcbiAgICB0aGlzLl9jb3Vyc2VNb2RlbC5maW5kKHtjb3Vyc2VfaWQ6IDEyM30sIHtzdHVkZW50c0Vucm9sbGVkOiAxfSwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG4gICAgdHJhY2soX2lkOiBudW1iZXIsIHJvbGxOdW1iZXI6IG51bWJlciwgY2FsbGJhY2s6IChlcnJvcjogYW55LCByZXN1bHQ6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgLy9xdWVyeSB0byB0cmFjayBhdHRlbmRhbmNlLCB0YWtlIGNvdXJzZV9pZC1zZWFyY2gsIGdvIHRvIGRhdGUsIHJldHVybiBuby5vZiByb2xsTnVtYmVycyBhdCBhbGwgZGF0ZXNcclxuICAgIGNvbnNvbGUubG9nKCdjb3Vyc2UgUmVwb3NpdG9yeSB0cmFjaycpO1xyXG4gICAgLy8gdGhpcy5fYXR0ZW5kYW5jZU1vZGVsLmNvdW50KHtjb3Vyc2VfaWQgOiBfaWR9LCBjYWxsYmFjayk7XHJcbiAgICB0aGlzLl9jb3Vyc2VNb2RlbC5hZ2dyZWdhdGUoW1xyXG4gICAgICAgIHsnJG1hdGNoJzogeydjb3Vyc2VfaWQnOiBfaWR9fSxcclxuICAgICAgICB7XCIkdW53aW5kXCI6IFwiJHN0dWRlbnRzUHJlc2VudFwifSxcclxuICAgICAgICB7XCIkbWF0Y2hcIiA6IHtcInN0dWRlbnRzUHJlc2VudFwiOiAxNzEwMDE4MCB9fSxcclxuICAgICAgICB7ICRncm91cDoge1xyXG4gICAgICAgICAgICBcIl9pZFwiIDogbnVsbCxcclxuICAgICAgICAgICAgXCJjb3VudFwiOiB7XCIkc3VtXCIgOiAxIH1cclxuICAgICAgICB9fVxyXG4gICAgICAgIF0sIGNhbGxiYWNrKTtcclxuICAgIH1cclxuICAgIGNvdW50VG90YWxTZXNzaW9ucyhfaWQ6IG51bWJlciwgY2FsbGJhY2s6IChlcnJvcjogYW55LCByZXN1bHQ6bnVtYmVyKT0+IHZvaWQpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY291bnQgdG90YWxcIik7XHJcbiAgICAgICAgdGhpcy5fY291cnNlTW9kZWwuY291bnQoe2NvdXJzZV9pZCA6IF9pZH0sIGNhbGxiYWNrKTtcclxuXHJcbiAgICB9XHJcbiAgICByZXRJbnNDb3Vyc2VzKF9pZDogc3RyaW5nLCBjYWxsYmFjazogKGVycm9yOiBhbnksIHJlc3VsdDogYW55KSA9PiB2b2lkKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJldEluc0NvdXJzZXMgUmVwb3NpdG9yeVwiKTtcclxuICAgICAgICB0aGlzLl9jb3Vyc2VNb2RlbC5maW5kKHtpbnN0cnVjdG9yOiBfaWR9LCBjYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgICByZXRTdHVDb3Vyc2VzKF9pZDogc3RyaW5nLCBjYWxsYmFjazogKGVycm9yOiBhbnksIHJlc3VsdDogYW55KSA9PiB2b2lkKSB7XHJcblxyXG4gICAgfVxyXG4gICAgLy8gcmV0Q29kZUlkKGlkOiBOdW1iZXIsIGNhbGxiYWNrOiAoZXJyb3I6IGFueSwgcmVzdWx0OmFueSkgPT4gdm9pZCkge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwic2F2ZSBjb2RlIHJlcFwiKTtcclxuICAgIC8vICAgICB0aGlzLl9jb3Vyc2VNb2RlbC5maW5kKHtjb3Vyc2VfaWQgOiBpZH0sIGNhbGxiYWNrKTtcclxuICAgIC8vIH1cclxuICAgIHVwZGF0ZUNvZGUgKGNvZGU6IE51bWJlciwgaWQ6IE51bWJlciwgY2FsbGJhY2s6IChlcnJvcjphbnksIHJlc3VsdDphbnkpID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLl9jb3Vyc2VNb2RlbC5maW5kT25lQW5kVXBkYXRlKHtjb3Vyc2VfaWQ6IGlkfSwgeyRzZXQ6IHthdHRlbmRhbmNlQ29kZTogY29kZX19LCBjYWxsYmFjayk7XHJcblxyXG4gICAgfVxyXG4gICAgZ2V0QXR0ZW5kYW5jZUNvZGUoaWQ6IE51bWJlciwgIGNhbGxiYWNrOiAoZXJyb3I6YW55LCByZXN1bHQ6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW50byBnZXRhdHRlbmRhbmNlIGNvZGVcIik7XHJcbiAgICAgICAgdGhpcy5fY291cnNlTW9kZWwuZmluZCh7Y291cnNlX2lkOmlkfSwge2F0dGVuZGFuY2VDb2RlIDogMX0sIGNhbGxiYWNrKTtcclxuICAgIH1cclxufVxyXG5cclxuT2JqZWN0LnNlYWwoQ291cnNlUmVwb3NpdG9yeSk7XHJcbmV4cG9ydCA9IENvdXJzZVJlcG9zaXRvcnk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
