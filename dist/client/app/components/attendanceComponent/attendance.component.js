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
var attendance_service_1 = require("../../services/attendance.service");
var auth_service_1 = require("../../services/auth.service");
var course_service_1 = require("../../services/course.service");
var AttendanceComponent = (function () {
    function AttendanceComponent(router, courseService, authService, attendanceService) {
        this.router = router;
        this.courseService = courseService;
        this.authService = authService;
        this.attendanceService = attendanceService;
        this.attendances = [];
        this.classMsg = '';
        this.dateMsg = '';
    }
    AttendanceComponent.prototype.ngOnInit = function () {
        this.username = this.attendanceService.currentUser().username;
        this.course_id = 123;
        this.getPresentData();
    };
    AttendanceComponent.prototype.getPresentData = function () {
        var _this = this;
        this.attendanceService.post({ 'courseId': 123, 'rollNumber': this.username })
            .then(function (attendence) {
            _this.total = attendence.totalSessions;
            console.log("total1: " + _this.total);
            _this.present = attendence.sessionsPresent[0].count;
            console.log("present1: " + _this.present);
            _this.classMsg = 'you were present in ' + _this.present.toString() + '/' + _this.total.toString() + ' classes';
            console.log("dates: " + attendence.absentDates[0].date);
            _this.attendances = attendence.absentDates;
        }).catch(function (error) {
            _this.error = error;
            console.log(error);
        });
    };
    // onSelect(attendance: Attendance) {
    //     this.attendanceService.post({course_id: 123, date: 22, studentsPresent:[17]});
    // }
    AttendanceComponent.prototype.goBack = function () {
        window.history.back();
    };
    AttendanceComponent = __decorate([
        core_1.Component({
            selector: 'my-attendance',
            templateUrl: './app/components/attendanceComponent/attendance.component.html',
            styleUrls: ['./app/components/attendanceComponent/attendance.component.css'],
            providers: [auth_service_1.AuthenticationService, course_service_1.CourseService, attendance_service_1.AttendanceService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, course_service_1.CourseService, auth_service_1.AuthenticationService, attendance_service_1.AttendanceService])
    ], AttendanceComponent);
    return AttendanceComponent;
}());
exports.AttendanceComponent = AttendanceComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2F0dGVuZGFuY2VDb21wb25lbnQvYXR0ZW5kYW5jZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUd6QyxtQ0FBa0MsbUNBQW1DLENBQUMsQ0FBQTtBQUN0RSw2QkFBc0MsNkJBQTZCLENBQUMsQ0FBQTtBQUNwRSwrQkFBOEIsK0JBQStCLENBQUMsQ0FBQTtBQVU5RDtJQVdJLDZCQUNZLE1BQWMsRUFDZCxhQUE0QixFQUM3QixXQUFtQyxFQUNsQyxpQkFBb0M7UUFIcEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzdCLGdCQUFXLEdBQVgsV0FBVyxDQUF3QjtRQUNsQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBZGhELGdCQUFXLEdBQVEsRUFBRSxDQUFDO1FBR2YsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUtkLFlBQU8sR0FBRyxFQUFFLENBQUM7SUFPcEIsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7UUFDOUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDckIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBRTlCLENBQUM7SUFDRyw0Q0FBYyxHQUFkO1FBQUEsaUJBY0M7UUFiSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUMsVUFBVSxFQUFHLEdBQUcsRUFBRyxZQUFZLEVBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxDQUFDO2FBQzVFLElBQUksQ0FBRSxVQUFBLFVBQVU7WUFDYixLQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7WUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3pDLEtBQUksQ0FBQyxRQUFRLEdBQUcsc0JBQXNCLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxHQUFHLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxVQUFVLENBQUM7WUFDNUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4RCxLQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSztZQUNWLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0QscUNBQXFDO0lBQ3JDLHFGQUFxRjtJQUVyRixJQUFJO0lBQ0osb0NBQU0sR0FBTjtRQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQXJETDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsZ0VBQWdFO1lBQzdFLFNBQVMsRUFBRSxDQUFDLCtEQUErRCxDQUFDO1lBQzVFLFNBQVMsRUFBRSxDQUFDLG9DQUFxQixFQUFFLDhCQUFhLEVBQUUsc0NBQWlCLENBQUM7U0FFdkUsQ0FBQzs7MkJBQUE7SUFvREYsMEJBQUM7QUFBRCxDQWxEQSxBQWtEQyxJQUFBO0FBbERZLDJCQUFtQixzQkFrRC9CLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYXR0ZW5kYW5jZUNvbXBvbmVudC9hdHRlbmRhbmNlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQXR0ZW5kYW5jZSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvYXR0ZW5kYW5jZVwiO1xuaW1wb3J0IHsgQXR0ZW5kYW5jZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXR0ZW5kYW5jZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDb3Vyc2VTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2NvdXJzZS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXR0ZW5kYW5jZScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FwcC9jb21wb25lbnRzL2F0dGVuZGFuY2VDb21wb25lbnQvYXR0ZW5kYW5jZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vYXBwL2NvbXBvbmVudHMvYXR0ZW5kYW5jZUNvbXBvbmVudC9hdHRlbmRhbmNlLmNvbXBvbmVudC5jc3MnXSxcbiAgICBwcm92aWRlcnM6IFtBdXRoZW50aWNhdGlvblNlcnZpY2UsIENvdXJzZVNlcnZpY2UsIEF0dGVuZGFuY2VTZXJ2aWNlXVxuXG59KVxuXG5leHBvcnQgY2xhc3MgQXR0ZW5kYW5jZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgYXR0ZW5kYW5jZXM6IGFueSA9IFtdO1xuICAgIC8vIHNlbGVjdGVkQXR0ZW5kYW5jZTogQXR0ZW5kYW5jZTtcbiAgICBlcnJvcjogYW55O1xuICAgIHB1YmxpYyBjbGFzc01zZyA9ICcnO1xuICAgIGNvdXJzZV9pZDogbnVtYmVyO1xuICAgIHVzZXJuYW1lIDogc3RyaW5nO1xuICAgIHRvdGFsOiBudW1iZXI7XG4gICAgcHJlc2VudDogbnVtYmVyO1xuICAgIHB1YmxpYyBkYXRlTXNnID0gJyc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBjb3Vyc2VTZXJ2aWNlOiBDb3Vyc2VTZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgYXV0aFNlcnZpY2UgOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgYXR0ZW5kYW5jZVNlcnZpY2U6IEF0dGVuZGFuY2VTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSB0aGlzLmF0dGVuZGFuY2VTZXJ2aWNlLmN1cnJlbnRVc2VyKCkudXNlcm5hbWU7XG4gICAgICAgIHRoaXMuY291cnNlX2lkID0gMTIzO1xuICAgICAgICB0aGlzLmdldFByZXNlbnREYXRhKCk7XG5cbn1cbiAgICBnZXRQcmVzZW50RGF0YSgpIHtcbiAgICAgICAgIHRoaXMuYXR0ZW5kYW5jZVNlcnZpY2UucG9zdCh7J2NvdXJzZUlkJyA6IDEyMyAsICdyb2xsTnVtYmVyJzp0aGlzLnVzZXJuYW1lfSlcbiAgICAgICAgLnRoZW4oIGF0dGVuZGVuY2UgPT4ge1xuICAgICAgICAgICAgdGhpcy50b3RhbCA9IGF0dGVuZGVuY2UudG90YWxTZXNzaW9ucztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidG90YWwxOiBcIiArIHRoaXMudG90YWwpO1xuICAgICAgICAgICAgdGhpcy5wcmVzZW50ID0gYXR0ZW5kZW5jZS5zZXNzaW9uc1ByZXNlbnRbMF0uY291bnQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInByZXNlbnQxOiBcIiArIHRoaXMucHJlc2VudCk7XG4gICAgICAgICAgICB0aGlzLmNsYXNzTXNnID0gJ3lvdSB3ZXJlIHByZXNlbnQgaW4gJyArIHRoaXMucHJlc2VudC50b1N0cmluZygpICsgJy8nICsgdGhpcy50b3RhbC50b1N0cmluZygpICsgJyBjbGFzc2VzJztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0ZXM6IFwiICsgYXR0ZW5kZW5jZS5hYnNlbnREYXRlc1swXS5kYXRlKTtcbiAgICAgICAgICAgIHRoaXMuYXR0ZW5kYW5jZXMgPSBhdHRlbmRlbmNlLmFic2VudERhdGVzO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gb25TZWxlY3QoYXR0ZW5kYW5jZTogQXR0ZW5kYW5jZSkge1xuICAgIC8vICAgICB0aGlzLmF0dGVuZGFuY2VTZXJ2aWNlLnBvc3Qoe2NvdXJzZV9pZDogMTIzLCBkYXRlOiAyMiwgc3R1ZGVudHNQcmVzZW50OlsxN119KTtcblxuICAgIC8vIH1cbiAgICBnb0JhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG4gICAvLyBnb3RvRGFzaGJvYXJkKCkge1xuICAgLy8gICAgIGxldCBsaW5rID0gWycvZGFzaGJvYXJkJ107XG4gICAgLy8gICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKGxpbmspO1xuICAgIC8vIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
