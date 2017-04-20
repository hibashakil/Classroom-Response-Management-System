"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var course_service_1 = require("../../services/course.service");
var attendance_service_1 = require("../../services/attendance.service");
var InsCourseComponent = (function () {
    function InsCourseComponent(router, courseService, attendenceService) {
        this.router = router;
        this.courseService = courseService;
        this.attendenceService = attendenceService;
        this.courses = [];
    }
    InsCourseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.courseService.getInsCourses('alala')
            .then(function (courses) {
            _this.courses = courses;
            console.log('courses : ' + _this.courses);
        }).catch(function (error) {
            _this.error = error;
            console.log(error);
        });
    };
    InsCourseComponent.prototype.onSelect = function (course) {
        this.selectedCourse = course;
        var link = ['selInsCourse', this.selectedCourse.course_id];
        this.router.navigate(link);
        // courseId 
        // this.courseService.setCourseId(this.selectedCourse.course_id);
        // console.log('course_id is: ' + this.courseService.getCourseId());
    };
    InsCourseComponent.prototype.getAttendance = function () {
        this.router.navigate(['attendance']);
    };
    InsCourseComponent.prototype.gotoDashboard = function () {
        var link = ['/dashboard'];
        this.router.navigate(link);
    };
    InsCourseComponent = __decorate([
        core_1.Component({
            selector: 'my-inscourses',
            templateUrl: './app/components/instructorCourseComponent/insCourse.component.html',
            styleUrls: ['./app/components/instructorCourseComponent/insCourse.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, course_service_1.CourseService, attendance_service_1.AttendanceService])
    ], InsCourseComponent);
    return InsCourseComponent;
}());
exports.InsCourseComponent = InsCourseComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2luc3RydWN0b3JDb3Vyc2VDb21wb25lbnQvaW5zQ291cnNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBSXpDLCtCQUE4QiwrQkFBK0IsQ0FBQyxDQUFBO0FBQzlELG1DQUFnQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBU3BFO0lBT0ksNEJBQ1ksTUFBYyxFQUNkLGFBQTRCLEVBQzVCLGlCQUFvQztRQUZwQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVRoRCxZQUFPLEdBQWEsRUFBRSxDQUFDO0lBVXZCLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQUEsaUJBU0c7UUFSQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7YUFDeEMsSUFBSSxDQUFDLFVBQUEsT0FBTztZQUNULEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxLQUFLO1lBQ1YsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFSCxxQ0FBUSxHQUFSLFVBQVMsTUFBYztRQUNuQixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztRQUM3QixJQUFJLElBQUksR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBRSxDQUFDO1FBQzVELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLFlBQVk7UUFDWixpRUFBaUU7UUFDakUsb0VBQW9FO0lBQ3hFLENBQUM7SUFDRCwwQ0FBYSxHQUFiO1FBQ1EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRCwwQ0FBYSxHQUFiO1FBQ0ksSUFBSSxJQUFJLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBNUNMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSxxRUFBcUU7WUFDbEYsU0FBUyxFQUFFLENBQUMsb0VBQW9FLENBQUM7U0FDcEYsQ0FBQzs7MEJBQUE7SUF5Q0YseUJBQUM7QUFBRCxDQXZDQSxBQXVDQyxJQUFBO0FBdkNZLDBCQUFrQixxQkF1QzlCLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvaW5zdHJ1Y3RvckNvdXJzZUNvbXBvbmVudC9pbnNDb3Vyc2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBDb3Vyc2UgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvdXJzZVwiO1xyXG5cclxuaW1wb3J0IHsgQ291cnNlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb3Vyc2Uuc2VydmljZVwiO1xyXG5pbXBvcnQge0F0dGVuZGFuY2VTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXR0ZW5kYW5jZS5zZXJ2aWNlXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWluc2NvdXJzZXMnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FwcC9jb21wb25lbnRzL2luc3RydWN0b3JDb3Vyc2VDb21wb25lbnQvaW5zQ291cnNlLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2FwcC9jb21wb25lbnRzL2luc3RydWN0b3JDb3Vyc2VDb21wb25lbnQvaW5zQ291cnNlLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEluc0NvdXJzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBjb3Vyc2VzOiBDb3Vyc2VbXSA9IFtdO1xyXG4gICAgc2VsZWN0ZWRDb3Vyc2U6IENvdXJzZTtcclxuICAgIGVycm9yOiBhbnk7XHJcbiAgICBwdWJsaWMgdG90YWw6IG51bWJlcjtcclxuICAgIHB1YmxpYyBwcmVzZW50OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIGNvdXJzZVNlcnZpY2U6IENvdXJzZVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBhdHRlbmRlbmNlU2VydmljZTogQXR0ZW5kYW5jZVNlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmNvdXJzZVNlcnZpY2UuZ2V0SW5zQ291cnNlcygnYWxhbGEnKVxyXG4gICAgICAgIC50aGVuKGNvdXJzZXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvdXJzZXMgPSBjb3Vyc2VzO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY291cnNlcyA6ICcgKyB0aGlzLmNvdXJzZXMpO1xyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgIG9uU2VsZWN0KGNvdXJzZTogQ291cnNlKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENvdXJzZSA9IGNvdXJzZTtcclxuICAgICAgICBsZXQgbGluayA9IFsnc2VsSW5zQ291cnNlJywgdGhpcy5zZWxlY3RlZENvdXJzZS5jb3Vyc2VfaWQgXTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShsaW5rKTtcclxuICAgICAgICAvLyBjb3Vyc2VJZCBcclxuICAgICAgICAvLyB0aGlzLmNvdXJzZVNlcnZpY2Uuc2V0Q291cnNlSWQodGhpcy5zZWxlY3RlZENvdXJzZS5jb3Vyc2VfaWQpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjb3Vyc2VfaWQgaXM6ICcgKyB0aGlzLmNvdXJzZVNlcnZpY2UuZ2V0Q291cnNlSWQoKSk7XHJcbiAgICB9XHJcbiAgICBnZXRBdHRlbmRhbmNlKCkge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2F0dGVuZGFuY2UnXSk7XHJcbiAgICB9XHJcbiAgICBnb3RvRGFzaGJvYXJkKCkge1xyXG4gICAgICAgIGxldCBsaW5rID0gWycvZGFzaGJvYXJkJ107XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUobGluayk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
