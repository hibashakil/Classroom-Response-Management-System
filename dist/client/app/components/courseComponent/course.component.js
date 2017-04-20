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
var CourseComponent = (function () {
    function CourseComponent(router, courseService, attendenceService) {
        this.router = router;
        this.courseService = courseService;
        this.attendenceService = attendenceService;
        this.courses = [];
    }
    CourseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.courseService.getCourses()
            .then(function (courses) {
            _this.courses = courses;
            console.log('courses : ' + _this.courses);
        }).catch(function (error) {
            _this.error = error;
            console.log(error);
        });
    };
    CourseComponent.prototype.onSelect = function (course) {
        this.selectedCourse = course;
        // courseId 
        // this.courseService.setCourseId(this.selectedCourse.course_id);
        console.log('course_id is: ' + this.selectedCourse.course_id);
        // this.courseService.post({course_id: course.course_id, rollNumber: 17100180})
        // .then(course => {
        //     this.router.navigate(['courses']);
        // }).catch(error => {
        //         this.error = error;
        //         console.log(error);
        // });
    };
    CourseComponent.prototype.getAttendance = function () {
        // this.attendenceService.post({'courseId' : courseId, 'rollNumber': rollNumberFinal})
        // .then( attendence => {
        //     this.total = attendence.totalSessions;
        //     console.log("total1: " + this.total);
        //     this.present = attendence.sessionsPresent[0].count;
        //     console.log("present1: " + this.present);
        this.router.navigate(['attendance']);
        //     // export {total};
        //     // export {present};
        //     }).catch(error => {
        //         this.error = error;
        //         console.log(error);
        //     });
    };
    CourseComponent.prototype.gotoDashboard = function () {
        var link = ['/dashboard'];
        this.router.navigate(link);
    };
    CourseComponent = __decorate([
        core_1.Component({
            selector: 'my-courses',
            templateUrl: './app/components/courseComponent/course.component.html',
            styleUrls: ['./app/components/courseComponent/course.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, course_service_1.CourseService, attendance_service_1.AttendanceService])
    ], CourseComponent);
    return CourseComponent;
}());
exports.CourseComponent = CourseComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2NvdXJzZUNvbXBvbmVudC9jb3Vyc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFJekMsK0JBQThCLCtCQUErQixDQUFDLENBQUE7QUFDOUQsbUNBQWdDLG1DQUFtQyxDQUFDLENBQUE7QUFTcEU7SUFPSSx5QkFDWSxNQUFjLEVBQ2QsYUFBNEIsRUFDNUIsaUJBQW9DO1FBRnBDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBVGhELFlBQU8sR0FBYSxFQUFFLENBQUM7SUFVdkIsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO2FBQzFCLElBQUksQ0FBQyxVQUFBLE9BQU87WUFDYixLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSztZQUNWLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7SUFDWixDQUFDO0lBRUQsa0NBQVEsR0FBUixVQUFTLE1BQWM7UUFDbkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7UUFDN0IsWUFBWTtRQUNaLGlFQUFpRTtRQUNqRSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUQsK0VBQStFO1FBQy9FLG9CQUFvQjtRQUNwQix5Q0FBeUM7UUFDekMsc0JBQXNCO1FBQ3RCLDhCQUE4QjtRQUM5Qiw4QkFBOEI7UUFDOUIsTUFBTTtJQUNWLENBQUM7SUFDRCx1Q0FBYSxHQUFiO1FBQ0ksc0ZBQXNGO1FBQ3RGLHlCQUF5QjtRQUN6Qiw2Q0FBNkM7UUFDN0MsNENBQTRDO1FBQzVDLDBEQUEwRDtRQUMxRCxnREFBZ0Q7UUFDNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLHlCQUF5QjtRQUN6QiwyQkFBMkI7UUFDM0IsMEJBQTBCO1FBQzFCLDhCQUE4QjtRQUM5Qiw4QkFBOEI7UUFDOUIsVUFBVTtJQUNkLENBQUM7SUFDRCx1Q0FBYSxHQUFiO1FBQ0ksSUFBSSxJQUFJLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBN0RMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSx3REFBd0Q7WUFDckUsU0FBUyxFQUFFLENBQUMsdURBQXVELENBQUM7U0FDdkUsQ0FBQzs7dUJBQUE7SUEwREYsc0JBQUM7QUFBRCxDQXhEQSxBQXdEQyxJQUFBO0FBeERZLHVCQUFlLGtCQXdEM0IsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9jb3Vyc2VDb21wb25lbnQvY291cnNlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgQ291cnNlIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jb3Vyc2VcIjtcclxuXHJcbmltcG9ydCB7IENvdXJzZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY291cnNlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtBdHRlbmRhbmNlU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F0dGVuZGFuY2Uuc2VydmljZVwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1jb3Vyc2VzJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9hcHAvY29tcG9uZW50cy9jb3Vyc2VDb21wb25lbnQvY291cnNlLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2FwcC9jb21wb25lbnRzL2NvdXJzZUNvbXBvbmVudC9jb3Vyc2UuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ291cnNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGNvdXJzZXM6IENvdXJzZVtdID0gW107XHJcbiAgICBzZWxlY3RlZENvdXJzZTogQ291cnNlO1xyXG4gICAgZXJyb3I6IGFueTtcclxuICAgIHB1YmxpYyB0b3RhbDogbnVtYmVyO1xyXG4gICAgcHVibGljIHByZXNlbnQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgY291cnNlU2VydmljZTogQ291cnNlU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGF0dGVuZGVuY2VTZXJ2aWNlOiBBdHRlbmRhbmNlU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuY291cnNlU2VydmljZS5nZXRDb3Vyc2VzKClcclxuICAgICAgICAgICAgLnRoZW4oY291cnNlcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY291cnNlcyA9IGNvdXJzZXM7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb3Vyc2VzIDogJyArIHRoaXMuY291cnNlcyk7XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yID0gZXJyb3I7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2VsZWN0KGNvdXJzZTogQ291cnNlKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENvdXJzZSA9IGNvdXJzZTtcclxuICAgICAgICAvLyBjb3Vyc2VJZCBcclxuICAgICAgICAvLyB0aGlzLmNvdXJzZVNlcnZpY2Uuc2V0Q291cnNlSWQodGhpcy5zZWxlY3RlZENvdXJzZS5jb3Vyc2VfaWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb3Vyc2VfaWQgaXM6ICcgKyB0aGlzLnNlbGVjdGVkQ291cnNlLmNvdXJzZV9pZCk7XHJcbiAgICAgICAgLy8gdGhpcy5jb3Vyc2VTZXJ2aWNlLnBvc3Qoe2NvdXJzZV9pZDogY291cnNlLmNvdXJzZV9pZCwgcm9sbE51bWJlcjogMTcxMDAxODB9KVxyXG4gICAgICAgIC8vIC50aGVuKGNvdXJzZSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnY291cnNlcyddKTtcclxuICAgICAgICAvLyB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmVycm9yID0gZXJyb3I7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcbiAgICBnZXRBdHRlbmRhbmNlKCkge1xyXG4gICAgICAgIC8vIHRoaXMuYXR0ZW5kZW5jZVNlcnZpY2UucG9zdCh7J2NvdXJzZUlkJyA6IGNvdXJzZUlkLCAncm9sbE51bWJlcic6IHJvbGxOdW1iZXJGaW5hbH0pXHJcbiAgICAgICAgLy8gLnRoZW4oIGF0dGVuZGVuY2UgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnRvdGFsID0gYXR0ZW5kZW5jZS50b3RhbFNlc3Npb25zO1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcInRvdGFsMTogXCIgKyB0aGlzLnRvdGFsKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5wcmVzZW50ID0gYXR0ZW5kZW5jZS5zZXNzaW9uc1ByZXNlbnRbMF0uY291bnQ7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwicHJlc2VudDE6IFwiICsgdGhpcy5wcmVzZW50KTtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydhdHRlbmRhbmNlJ10pO1xyXG4gICAgICAgIC8vICAgICAvLyBleHBvcnQge3RvdGFsfTtcclxuICAgICAgICAvLyAgICAgLy8gZXhwb3J0IHtwcmVzZW50fTtcclxuICAgICAgICAvLyAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgIH1cclxuICAgIGdvdG9EYXNoYm9hcmQoKSB7XHJcbiAgICAgICAgbGV0IGxpbmsgPSBbJy9kYXNoYm9hcmQnXTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShsaW5rKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
