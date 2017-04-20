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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var app_routing_1 = require('./app.routing');
var users_component_1 = require('./components/users/users.component');
var dashboard_component_1 = require('./components/dashboard/dashboard.component');
var user_detail_component_1 = require('./components/userDetail/user-detail.component');
var loginComponent_component_1 = require('./components/loginComponent/loginComponent.component');
var user_service_1 = require('./services/user.service');
var course_service_1 = require('./services/course.service');
var attendance_service_1 = require('./services/attendance.service');
var course_component_1 = require('./components/CourseComponent/course.component');
var attendance_component_1 = require('./components/AttendanceComponent/attendance.component');
var insCourse_component_1 = require('./components/instructorCourseComponent/insCourse.component');
var selattendance_component_1 = require('./components/selectedInsCourse/selattendance.component');
var datatable_component_1 = require('./components/selectedInsCourse/datatable.component');
var column_component_1 = require('./components/selectedInsCourse/column.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                users_component_1.UsersComponent,
                dashboard_component_1.DashboardComponent,
                user_detail_component_1.UserDetailComponent,
                loginComponent_component_1.LoginComponent,
                course_component_1.CourseComponent,
                attendance_component_1.AttendanceComponent,
                insCourse_component_1.InsCourseComponent,
                selattendance_component_1.SelattendanceComponent,
                datatable_component_1.DatatableComponent,
                column_component_1.ColumnComponent
            ],
            providers: [
                user_service_1.UserService,
                course_service_1.CourseService,
                attendance_service_1.AttendanceService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBOEIsZUFBZSxDQUFDLENBQUE7QUFDOUMsaUNBQThCLDJCQUEyQixDQUFDLENBQUE7QUFDMUQsc0JBQStCLGdCQUFnQixDQUFDLENBQUE7QUFDaEQscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBRS9DLDhCQUE4QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2hELDRCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUU5QyxnQ0FBb0Msb0NBQW9DLENBQUMsQ0FBQTtBQUN6RSxvQ0FBcUMsNENBQTRDLENBQUMsQ0FBQTtBQUNsRixzQ0FBcUMsK0NBQStDLENBQUMsQ0FBQTtBQUNyRix5Q0FBNkIsc0RBQXNELENBQUMsQ0FBQTtBQUVwRiw2QkFBNkIseUJBQXlCLENBQUMsQ0FBQTtBQUN2RCwrQkFBK0IsMkJBQTJCLENBQUMsQ0FBQTtBQUMzRCxtQ0FBbUMsK0JBQStCLENBQUMsQ0FBQTtBQUNuRSxpQ0FBZ0MsK0NBQStDLENBQUMsQ0FBQTtBQUNoRixxQ0FBb0MsdURBQXVELENBQUMsQ0FBQTtBQUM1RixvQ0FBaUMsNERBQTRELENBQUMsQ0FBQTtBQUM5Rix3Q0FBcUMsd0RBQXdELENBQUMsQ0FBQTtBQUM5RixvQ0FBaUMsb0RBQW9ELENBQUMsQ0FBQTtBQUN0RixpQ0FBOEIsaURBQWlELENBQUMsQ0FBQTtBQThCaEY7SUFBQTtJQUF5QixDQUFDO0lBM0IxQjtRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxnQ0FBYTtnQkFDYixpQkFBVTtnQkFDVixtQkFBVztnQkFDWCxxQkFBTzthQUNOO1lBQ0gsWUFBWSxFQUFFO2dCQUNaLDRCQUFZO2dCQUNaLGdDQUFjO2dCQUNkLHdDQUFrQjtnQkFDbEIsMkNBQW1CO2dCQUNuQix5Q0FBYztnQkFDZCxrQ0FBZTtnQkFDZiwwQ0FBbUI7Z0JBQ25CLHdDQUFrQjtnQkFDbEIsZ0RBQXNCO2dCQUN0Qix3Q0FBa0I7Z0JBQ2xCLGtDQUFlO2FBQ2hCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULDBCQUFXO2dCQUNYLDhCQUFhO2dCQUNiLHNDQUFpQjthQUNsQjtZQUNELFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7U0FDMUIsQ0FBQzs7aUJBQUE7SUFDdUIsZ0JBQUM7QUFBRCxDQUF6QixBQUEwQixJQUFBO0FBQWIsaUJBQVMsWUFBSSxDQUFBIiwiZmlsZSI6ImFwcC9hcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gICAgZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gICAgIGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gIGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IHJvdXRpbmcgfSAgICAgICBmcm9tICcuL2FwcC5yb3V0aW5nJztcclxuXHJcbmltcG9ydCB7IFVzZXJzQ29tcG9uZW50IH0gICAgICBmcm9tICcuL2NvbXBvbmVudHMvdXNlcnMvdXNlcnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gICBmcm9tICcuL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBVc2VyRGV0YWlsQ29tcG9uZW50IH0gIGZyb20gJy4vY29tcG9uZW50cy91c2VyRGV0YWlsL3VzZXItZGV0YWlsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TG9naW5Db21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9sb2dpbkNvbXBvbmVudC9sb2dpbkNvbXBvbmVudC5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSAgZnJvbSAnLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb3Vyc2VTZXJ2aWNlIH0gIGZyb20gJy4vc2VydmljZXMvY291cnNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBdHRlbmRhbmNlU2VydmljZSB9ICBmcm9tICcuL3NlcnZpY2VzL2F0dGVuZGFuY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IENvdXJzZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9Db3Vyc2VDb21wb25lbnQvY291cnNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEF0dGVuZGFuY2VDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvQXR0ZW5kYW5jZUNvbXBvbmVudC9hdHRlbmRhbmNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7SW5zQ291cnNlQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvaW5zdHJ1Y3RvckNvdXJzZUNvbXBvbmVudC9pbnNDb3Vyc2UuY29tcG9uZW50JztcclxuaW1wb3J0IHtTZWxhdHRlbmRhbmNlQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvc2VsZWN0ZWRJbnNDb3Vyc2Uvc2VsYXR0ZW5kYW5jZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0RhdGF0YWJsZUNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdGVkSW5zQ291cnNlL2RhdGF0YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0NvbHVtbkNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdGVkSW5zQ291cnNlL2NvbHVtbi5jb21wb25lbnQnO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQnJvd3Nlck1vZHVsZSxcclxuICAgIEh0dHBNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIHJvdXRpbmdcclxuICAgIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBcHBDb21wb25lbnQsXHJcbiAgICBVc2Vyc0NvbXBvbmVudCxcclxuICAgIERhc2hib2FyZENvbXBvbmVudCxcclxuICAgIFVzZXJEZXRhaWxDb21wb25lbnQsXHJcbiAgICBMb2dpbkNvbXBvbmVudCxcclxuICAgIENvdXJzZUNvbXBvbmVudCxcclxuICAgIEF0dGVuZGFuY2VDb21wb25lbnQsXHJcbiAgICBJbnNDb3Vyc2VDb21wb25lbnQsXHJcbiAgICBTZWxhdHRlbmRhbmNlQ29tcG9uZW50LFxyXG4gICAgRGF0YXRhYmxlQ29tcG9uZW50LFxyXG4gICAgQ29sdW1uQ29tcG9uZW50XHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIFVzZXJTZXJ2aWNlLFxyXG4gICAgQ291cnNlU2VydmljZSxcclxuICAgIEF0dGVuZGFuY2VTZXJ2aWNlXHJcbiAgXSxcclxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
