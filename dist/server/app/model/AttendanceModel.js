"use strict";
var AttendanceModel = (function () {
    function AttendanceModel(courseModel) {
        this._attendanceModel = courseModel;
    }
    Object.defineProperty(AttendanceModel.prototype, "course_id", {
        get: function () {
            return this._attendanceModel.course_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AttendanceModel.prototype, "session", {
        get: function () {
            return this._attendanceModel.session;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AttendanceModel.prototype, "date", {
        get: function () {
            return this._attendanceModel.date;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AttendanceModel.prototype, "studentsPresent", {
        get: function () {
            return this._attendanceModel.studentsPresent;
        },
        enumerable: true,
        configurable: true
    });
    return AttendanceModel;
}());
Object.seal(AttendanceModel);
module.exports = AttendanceModel;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2RlbC9BdHRlbmRhbmNlTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBO0lBSUkseUJBQVksV0FBNkI7UUFDckMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFdBQVcsQ0FBQztJQUN4QyxDQUFDO0lBQ0Qsc0JBQUksc0NBQVM7YUFBYjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO1FBQzNDLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksb0NBQU87YUFBWDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO1FBQ3pDLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksaUNBQUk7YUFBUjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNENBQWU7YUFBbkI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQztRQUNqRCxDQUFDOzs7T0FBQTtJQUNMLHNCQUFDO0FBQUQsQ0FwQkEsQUFvQkMsSUFBQTtBQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDN0IsaUJBQVUsZUFBZSxDQUFDIiwiZmlsZSI6ImFwcC9tb2RlbC9BdHRlbmRhbmNlTW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSUF0dGVuZGFuY2VNb2RlbCA9IHJlcXVpcmUoJy4vaW50ZXJmYWNlcy9BdHRlbmRhbmNlTW9kZWwnKTtcclxuXHJcbmNsYXNzIEF0dGVuZGFuY2VNb2RlbCB7XHJcblxyXG4gICAgcHJpdmF0ZSBfYXR0ZW5kYW5jZU1vZGVsOiBJQXR0ZW5kYW5jZU1vZGVsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvdXJzZU1vZGVsOiBJQXR0ZW5kYW5jZU1vZGVsKSB7XHJcbiAgICAgICAgdGhpcy5fYXR0ZW5kYW5jZU1vZGVsID0gY291cnNlTW9kZWw7XHJcbiAgICB9XHJcbiAgICBnZXQgY291cnNlX2lkICgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hdHRlbmRhbmNlTW9kZWwuY291cnNlX2lkO1xyXG4gICAgfVxyXG4gICAgZ2V0IHNlc3Npb24gKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F0dGVuZGFuY2VNb2RlbC5zZXNzaW9uO1xyXG4gICAgfVxyXG4gICAgZ2V0IGRhdGUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXR0ZW5kYW5jZU1vZGVsLmRhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHN0dWRlbnRzUHJlc2VudCAoKTogW251bWJlcl0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hdHRlbmRhbmNlTW9kZWwuc3R1ZGVudHNQcmVzZW50O1xyXG4gICAgfVxyXG59XHJcbk9iamVjdC5zZWFsKEF0dGVuZGFuY2VNb2RlbCk7XHJcbmV4cG9ydCA9ICBBdHRlbmRhbmNlTW9kZWw7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
