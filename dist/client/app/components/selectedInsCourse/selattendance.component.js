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
var course_service_1 = require("../../services/course.service");
var SelattendanceComponent = (function () {
    function SelattendanceComponent(router, attendenceService, courseService) {
        this.router = router;
        this.attendenceService = attendenceService;
        this.courseService = courseService;
    }
    SelattendanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.attendenceService.getSelCourseAttendance(123)
            .then(function (resp) {
            _this.allAttendance = resp;
        }).catch(function (error) {
            _this.error = error;
            console.log(error);
        });
    };
    SelattendanceComponent.prototype.saveNumber = function () {
        var _this = this;
        this.courseService
            .saveNum(this.num)
            .then(function (resp) {
            console.log("I think number is saved");
        }).catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], SelattendanceComponent.prototype, "num", void 0);
    SelattendanceComponent = __decorate([
        core_1.Component({
            selector: 'my-attendance',
            templateUrl: "./app/components/selectedInsCourse/selattendance.component.html",
        }), 
        __metadata('design:paramtypes', [router_1.Router, attendance_service_1.AttendanceService, course_service_1.CourseService])
    ], SelattendanceComponent);
    return SelattendanceComponent;
}());
exports.SelattendanceComponent = SelattendanceComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3NlbGVjdGVkSW5zQ291cnNlL3NlbGF0dGVuZGFuY2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUMsZUFBZSxDQUFDLENBQUE7QUFDdkQsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFFekMsbUNBQWdDLG1DQUFtQyxDQUFDLENBQUE7QUFDcEUsK0JBQTRCLCtCQUErQixDQUFDLENBQUE7QUFRNUQ7SUFLSSxnQ0FDUSxNQUFjLEVBQ2QsaUJBQW9DLEVBQ3BDLGFBQTZCO1FBRjdCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtJQUFHLENBQUM7SUFDekMseUNBQVEsR0FBUjtRQUFBLGlCQVFLO1FBUEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQzthQUM3QyxJQUFJLENBQUMsVUFBQSxJQUFJO1lBQ04sS0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSztZQUNWLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QsMkNBQVUsR0FBVjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLGFBQWE7YUFDYixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzthQUNqQixJQUFJLENBQUMsVUFBQSxJQUFJO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFsQixDQUFrQixDQUFDLENBQUMsQ0FBQyw4QkFBOEI7SUFDN0UsQ0FBQztJQXZCTDtRQUFDLFlBQUssRUFBRTs7dURBQUE7SUFQWjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsaUVBQWlFO1NBRS9FLENBQUM7OzhCQUFBO0lBNEJGLDZCQUFDO0FBQUQsQ0ExQkEsQUEwQkMsSUFBQTtBQTFCWSw4QkFBc0IseUJBMEJsQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3NlbGVjdGVkSW5zQ291cnNlL3NlbGF0dGVuZGFuY2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHtBdHRlbmRhbmNlU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F0dGVuZGFuY2Uuc2VydmljZVwiO1xyXG5pbXBvcnQge0NvdXJzZVNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb3Vyc2Uuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdteS1hdHRlbmRhbmNlJyxcclxuICB0ZW1wbGF0ZVVybDogYC4vYXBwL2NvbXBvbmVudHMvc2VsZWN0ZWRJbnNDb3Vyc2Uvc2VsYXR0ZW5kYW5jZS5jb21wb25lbnQuaHRtbGAsXHJcblxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlbGF0dGVuZGFuY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQElucHV0KCkgbnVtIDogbnVtYmVyO1xyXG4gICAgZXJyb3I6IGFueTtcclxuICAgIGFsbEF0dGVuZGFuY2U6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIGF0dGVuZGVuY2VTZXJ2aWNlOiBBdHRlbmRhbmNlU2VydmljZSxcclxuICAgIHByaXZhdGUgY291cnNlU2VydmljZSA6IENvdXJzZVNlcnZpY2UpIHt9XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmF0dGVuZGVuY2VTZXJ2aWNlLmdldFNlbENvdXJzZUF0dGVuZGFuY2UoMTIzKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsQXR0ZW5kYW5jZSA9IHJlc3A7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNhdmVOdW1iZXIoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY291cnNlU2VydmljZVxyXG4gICAgICAgICAgICAgICAgLnNhdmVOdW0odGhpcy5udW0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkkgdGhpbmsgbnVtYmVyIGlzIHNhdmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gdGhpcy5lcnJvciA9IGVycm9yKTsgLy8gVE9ETzogRGlzcGxheSBlcnJvciBtZXNzYWdlXHJcbiAgICAgICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
