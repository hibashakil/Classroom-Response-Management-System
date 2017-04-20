"use strict";
var CourseModel = (function () {
    function CourseModel(courseModel) {
        this._courseModel = courseModel;
    }
    Object.defineProperty(CourseModel.prototype, "course_id", {
        get: function () {
            return this._courseModel.course_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CourseModel.prototype, "courseName", {
        get: function () {
            return this._courseModel.courseName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CourseModel.prototype, "instructor", {
        get: function () {
            return this._courseModel.instructor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CourseModel.prototype, "studentsEnrolled", {
        get: function () {
            return this._courseModel.studentsEnrolled;
        },
        enumerable: true,
        configurable: true
    });
    return CourseModel;
}());
Object.seal(CourseModel);
module.exports = CourseModel;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2RlbC9Db3Vyc2VNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUE7SUFJSSxxQkFBWSxXQUF5QjtRQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztJQUNwQyxDQUFDO0lBQ0Qsc0JBQUksa0NBQVM7YUFBYjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQztRQUN2QyxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLG1DQUFVO2FBQWQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUM7UUFDeEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxtQ0FBVTthQUFkO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDO1FBQ3hDLENBQUM7OztPQUFBO0lBRUQsc0JBQUkseUNBQWdCO2FBQXBCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUM7UUFDOUMsQ0FBQzs7O09BQUE7SUFDTCxrQkFBQztBQUFELENBckJBLEFBcUJDLElBQUE7QUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3pCLGlCQUFVLFdBQVcsQ0FBQyIsImZpbGUiOiJhcHAvbW9kZWwvQ291cnNlTW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSUNvdXJzZU1vZGVsID0gcmVxdWlyZSgnLi9pbnRlcmZhY2VzL0NvdXJzZU1vZGVsJyk7XHJcblxyXG5jbGFzcyBDb3Vyc2VNb2RlbCB7XHJcblxyXG4gICAgcHJpdmF0ZSBfY291cnNlTW9kZWw6IElDb3Vyc2VNb2RlbDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb3Vyc2VNb2RlbDogSUNvdXJzZU1vZGVsKSB7XHJcbiAgICAgICAgdGhpcy5fY291cnNlTW9kZWwgPSBjb3Vyc2VNb2RlbDtcclxuICAgIH1cclxuICAgIGdldCBjb3Vyc2VfaWQgKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvdXJzZU1vZGVsLmNvdXJzZV9pZDtcclxuICAgIH1cclxuICAgIGdldCBjb3Vyc2VOYW1lICgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb3Vyc2VNb2RlbC5jb3Vyc2VOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpbnN0cnVjdG9yICgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb3Vyc2VNb2RlbC5pbnN0cnVjdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzdHVkZW50c0Vucm9sbGVkICgpOiBbbnVtYmVyXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvdXJzZU1vZGVsLnN0dWRlbnRzRW5yb2xsZWQ7XHJcbiAgICB9XHJcbn1cclxuT2JqZWN0LnNlYWwoQ291cnNlTW9kZWwpO1xyXG5leHBvcnQgPSAgQ291cnNlTW9kZWw7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
