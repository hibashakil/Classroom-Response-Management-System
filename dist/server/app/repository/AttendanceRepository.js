"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AttendanceSchema = require("./../dataAccess/schemas/AttendanceSchema");
var RepositoryBase = require("./BaseRepository");
var AttendanceRepository = (function (_super) {
    __extends(AttendanceRepository, _super);
    function AttendanceRepository() {
        _super.call(this, AttendanceSchema);
        this._attendanceModel = AttendanceSchema;
    }
    AttendanceRepository.prototype.track = function (_id, rollNumber, callback) {
        //query to track attendance, take course_id-search, go to date, return no.of rollNumbers at all dates
        // this._attendanceModel.count({course_id : _id}, callback);
        this._attendanceModel.aggregate([
            { '$match': { 'course_id': _id } },
            { "$unwind": "$studentsPresent" },
            { "$match": { "studentsPresent": 17100180 } },
            { $group: {
                    "_id": null,
                    "count": { "$sum": 1 }
                } }
        ], callback);
    };
    AttendanceRepository.prototype.countTotalSessions = function (_id, callback) {
        this._attendanceModel.count({ course_id: _id }, callback);
    };
    AttendanceRepository.prototype.datesAbsent = function (_id, rollNumber, callback) {
        // this._attendanceModel.find({'studentsPresent': {$nin : _id}}, callback);
        // this._attendanceModel.find({course_id: _id}, callback);
        this._attendanceModel.find({ 'course_id': _id, 'studentsPresent': { $nin: [rollNumber] } }, { _id: 0, date: 1 }, callback);
    };
    AttendanceRepository.prototype.selCourseAttendance = function (_id, callback) {
        console.log("repository reached");
        this._attendanceModel.find({ 'course_id': _id }, { session: 1, studentsPresent: 1 }, callback);
        //countTotalSessions
        // this._attendanceModel.count({course_id : _id}, callback);
    };
    return AttendanceRepository;
}(RepositoryBase));
Object.seal(AttendanceRepository);
module.exports = AttendanceRepository;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXBvc2l0b3J5L0F0dGVuZGFuY2VSZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLElBQU8sZ0JBQWdCLFdBQVcsMENBQTBDLENBQUMsQ0FBQztBQUM5RSxJQUFPLGNBQWMsV0FBVyxrQkFBa0IsQ0FBQyxDQUFDO0FBR3BEO0lBQW9DLHdDQUFnQztJQUVoRTtRQUNJLGtCQUFNLGdCQUFnQixDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO0lBQzdDLENBQUM7SUFDRCxvQ0FBSyxHQUFMLFVBQU0sR0FBVyxFQUFFLFVBQWtCLEVBQUUsUUFBMkM7UUFDOUUscUdBQXFHO1FBQ3JHLDREQUE0RDtRQUM1RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO1lBQzVCLEVBQUMsUUFBUSxFQUFFLEVBQUMsV0FBVyxFQUFFLEdBQUcsRUFBQyxFQUFDO1lBQzlCLEVBQUMsU0FBUyxFQUFFLGtCQUFrQixFQUFDO1lBQy9CLEVBQUMsUUFBUSxFQUFHLEVBQUMsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLEVBQUM7WUFDM0MsRUFBRSxNQUFNLEVBQUU7b0JBQ04sS0FBSyxFQUFHLElBQUk7b0JBQ1osT0FBTyxFQUFFLEVBQUMsTUFBTSxFQUFHLENBQUMsRUFBRTtpQkFDekIsRUFBQztTQUNMLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUNELGlEQUFrQixHQUFsQixVQUFtQixHQUFXLEVBQUUsUUFBNkM7UUFDekUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRyxHQUFHLEVBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUU3RCxDQUFDO0lBQ0QsMENBQVcsR0FBWCxVQUFZLEdBQVcsRUFBRSxVQUFrQixFQUFFLFFBQTJDO1FBQ3BGLDJFQUEyRTtRQUMzRSwwREFBMEQ7UUFDNUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsaUJBQWlCLEVBQUUsRUFBQyxJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBQyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUMsRUFBRyxRQUFRLENBQUMsQ0FBQztJQUN6SCxDQUFDO0lBQ0Qsa0RBQW1CLEdBQW5CLFVBQW9CLEdBQVcsRUFBRSxRQUEyQztRQUN4RSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsZUFBZSxFQUFFLENBQUMsRUFBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzVGLG9CQUFvQjtRQUNwQiw0REFBNEQ7SUFDaEUsQ0FBQztJQUVMLDJCQUFDO0FBQUQsQ0FuQ0EsQUFtQ0MsQ0FuQ21DLGNBQWMsR0FtQ2pEO0FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ2xDLGlCQUFTLG9CQUFvQixDQUFDIiwiZmlsZSI6ImFwcC9yZXBvc2l0b3J5L0F0dGVuZGFuY2VSZXBvc2l0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBBdHRlbmRhbmNlTW9kZWwgPSByZXF1aXJlKFwiLi8uLi9tb2RlbC9BdHRlbmRhbmNlTW9kZWxcIik7XHJcbmltcG9ydCBJQXR0ZW5kYW5jZU1vZGVsID0gcmVxdWlyZShcIi4vLi4vbW9kZWwvaW50ZXJmYWNlcy9BdHRlbmRhbmNlTW9kZWxcIik7XHJcbmltcG9ydCBBdHRlbmRhbmNlU2NoZW1hID0gcmVxdWlyZShcIi4vLi4vZGF0YUFjY2Vzcy9zY2hlbWFzL0F0dGVuZGFuY2VTY2hlbWFcIik7XHJcbmltcG9ydCBSZXBvc2l0b3J5QmFzZSA9IHJlcXVpcmUoXCIuL0Jhc2VSZXBvc2l0b3J5XCIpO1xyXG5pbXBvcnQgbW9uZ29vc2UgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7XHJcblxyXG5jbGFzcyBBdHRlbmRhbmNlUmVwb3NpdG9yeSAgZXh0ZW5kcyBSZXBvc2l0b3J5QmFzZTxJQXR0ZW5kYW5jZU1vZGVsPiB7XHJcbiAgICAgICAgcHJpdmF0ZSBfYXR0ZW5kYW5jZU1vZGVsOiBtb25nb29zZS5Nb2RlbDxtb25nb29zZS5Eb2N1bWVudD47XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgc3VwZXIoQXR0ZW5kYW5jZVNjaGVtYSk7XHJcbiAgICAgICAgdGhpcy5fYXR0ZW5kYW5jZU1vZGVsID0gQXR0ZW5kYW5jZVNjaGVtYTtcclxuICAgIH1cclxuICAgIHRyYWNrKF9pZDogbnVtYmVyLCByb2xsTnVtYmVyOiBudW1iZXIsIGNhbGxiYWNrOiAoZXJyb3I6IGFueSwgcmVzdWx0OiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICAvL3F1ZXJ5IHRvIHRyYWNrIGF0dGVuZGFuY2UsIHRha2UgY291cnNlX2lkLXNlYXJjaCwgZ28gdG8gZGF0ZSwgcmV0dXJuIG5vLm9mIHJvbGxOdW1iZXJzIGF0IGFsbCBkYXRlc1xyXG4gICAgICAgIC8vIHRoaXMuX2F0dGVuZGFuY2VNb2RlbC5jb3VudCh7Y291cnNlX2lkIDogX2lkfSwgY2FsbGJhY2spO1xyXG4gICAgICAgIHRoaXMuX2F0dGVuZGFuY2VNb2RlbC5hZ2dyZWdhdGUoW1xyXG4gICAgICAgICAgICB7JyRtYXRjaCc6IHsnY291cnNlX2lkJzogX2lkfX0sXHJcbiAgICAgICAgICAgIHtcIiR1bndpbmRcIjogXCIkc3R1ZGVudHNQcmVzZW50XCJ9LFxyXG4gICAgICAgICAgICB7XCIkbWF0Y2hcIiA6IHtcInN0dWRlbnRzUHJlc2VudFwiOiAxNzEwMDE4MCB9fSxcclxuICAgICAgICAgICAgeyAkZ3JvdXA6IHtcclxuICAgICAgICAgICAgICAgIFwiX2lkXCIgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgXCJjb3VudFwiOiB7XCIkc3VtXCIgOiAxIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICBdLCBjYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgICBjb3VudFRvdGFsU2Vzc2lvbnMoX2lkOiBudW1iZXIsIGNhbGxiYWNrOiAoZXJyb3I6IGFueSwgcmVzdWx0Om51bWJlcikgPT4gdm9pZCkge1xyXG4gICAgICAgIHRoaXMuX2F0dGVuZGFuY2VNb2RlbC5jb3VudCh7Y291cnNlX2lkIDogX2lkfSwgY2FsbGJhY2spO1xyXG5cclxuICAgIH1cclxuICAgIGRhdGVzQWJzZW50KF9pZDogbnVtYmVyLCByb2xsTnVtYmVyOiBudW1iZXIsIGNhbGxiYWNrOiAoZXJyb3I6IGFueSwgcmVzdWx0OiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICAvLyB0aGlzLl9hdHRlbmRhbmNlTW9kZWwuZmluZCh7J3N0dWRlbnRzUHJlc2VudCc6IHskbmluIDogX2lkfX0sIGNhbGxiYWNrKTtcclxuICAgICAgICAvLyB0aGlzLl9hdHRlbmRhbmNlTW9kZWwuZmluZCh7Y291cnNlX2lkOiBfaWR9LCBjYWxsYmFjayk7XHJcbiAgICAgIHRoaXMuX2F0dGVuZGFuY2VNb2RlbC5maW5kKHsnY291cnNlX2lkJzogX2lkLCAnc3R1ZGVudHNQcmVzZW50JzogeyRuaW46IFtyb2xsTnVtYmVyXX19LCB7X2lkIDogMCwgZGF0ZTogMX0gLCBjYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgICBzZWxDb3Vyc2VBdHRlbmRhbmNlKF9pZDogbnVtYmVyLCBjYWxsYmFjazogKGVycm9yOiBhbnksIHJlc3VsdDogYW55KSA9PiB2b2lkICkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVwb3NpdG9yeSByZWFjaGVkXCIpO1xyXG4gICAgICAgIHRoaXMuX2F0dGVuZGFuY2VNb2RlbC5maW5kKHsnY291cnNlX2lkJzogX2lkIH0sIHtzZXNzaW9uOiAxLCBzdHVkZW50c1ByZXNlbnQ6IDF9LCBjYWxsYmFjayk7XHJcbiAgICAgICAgLy9jb3VudFRvdGFsU2Vzc2lvbnNcclxuICAgICAgICAvLyB0aGlzLl9hdHRlbmRhbmNlTW9kZWwuY291bnQoe2NvdXJzZV9pZCA6IF9pZH0sIGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbk9iamVjdC5zZWFsKEF0dGVuZGFuY2VSZXBvc2l0b3J5KTtcclxuZXhwb3J0ID0gQXR0ZW5kYW5jZVJlcG9zaXRvcnk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
