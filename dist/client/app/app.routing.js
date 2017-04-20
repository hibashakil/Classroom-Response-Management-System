"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./components/dashboard/dashboard.component');
var users_component_1 = require('./components/users/users.component');
var user_detail_component_1 = require('./components/userDetail/user-detail.component');
var loginComponent_component_1 = require('./components/loginComponent/loginComponent.component');
var course_component_1 = require('./components/CourseComponent/course.component');
var attendance_component_1 = require('./components/AttendanceComponent/attendance.component');
var insCourse_component_1 = require('./components/instructorCourseComponent/insCourse.component');
var selattendance_component_1 = require('./components/selectedInsCourse/selattendance.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: loginComponent_component_1.LoginComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'detail/:id',
        component: user_detail_component_1.UserDetailComponent
    },
    {
        path: 'users',
        component: users_component_1.UsersComponent
    },
    {
        path: 'courses',
        component: course_component_1.CourseComponent
    },
    {
        path: 'courses/:id',
        component: course_component_1.CourseComponent
    },
    {
        path: 'attendance',
        component: attendance_component_1.AttendanceComponent
    },
    {
        path: 'inscourses',
        component: insCourse_component_1.InsCourseComponent
    },
    {
        path: 'selInsCourse/:id',
        component: selattendance_component_1.SelattendanceComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsdUJBQXFDLGlCQUFpQixDQUFDLENBQUE7QUFFdkQsb0NBQXFDLDRDQUE0QyxDQUFDLENBQUE7QUFDbEYsZ0NBQW9DLG9DQUFvQyxDQUFDLENBQUE7QUFDekUsc0NBQXFDLCtDQUErQyxDQUFDLENBQUE7QUFDckYseUNBQStCLHNEQUFzRCxDQUFDLENBQUE7QUFDdEYsaUNBQWdDLCtDQUErQyxDQUFDLENBQUE7QUFDaEYscUNBQW9DLHVEQUF1RCxDQUFDLENBQUE7QUFDNUYsb0NBQWlDLDREQUE0RCxDQUFDLENBQUE7QUFDOUYsd0NBQXFDLHdEQUF3RCxDQUFDLENBQUE7QUFHOUYsSUFBTSxTQUFTLEdBQVc7SUFDeEI7UUFDRSxJQUFJLEVBQUUsRUFBRTtRQUNSLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFNBQVMsRUFBRSxNQUFNO0tBQ2xCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsT0FBTztRQUNiLFNBQVMsRUFBRSx5Q0FBYztLQUMxQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLFdBQVc7UUFDakIsU0FBUyxFQUFFLHdDQUFrQjtLQUM5QjtJQUNEO1FBQ0UsSUFBSSxFQUFFLFlBQVk7UUFDbEIsU0FBUyxFQUFFLDJDQUFtQjtLQUMvQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLE9BQU87UUFDYixTQUFTLEVBQUUsZ0NBQWM7S0FDMUI7SUFDRDtRQUNFLElBQUksRUFBRSxTQUFTO1FBQ2YsU0FBUyxFQUFFLGtDQUFlO0tBQzNCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsYUFBYTtRQUNuQixTQUFTLEVBQUUsa0NBQWU7S0FDM0I7SUFDRDtRQUNFLElBQUksRUFBRSxZQUFZO1FBQ2xCLFNBQVMsRUFBRSwwQ0FBbUI7S0FDL0I7SUFDRDtRQUNFLElBQUksRUFBRSxZQUFZO1FBQ2xCLFNBQVMsRUFBRSx3Q0FBa0I7S0FDOUI7SUFDRDtRQUNFLElBQUksRUFBRSxrQkFBa0I7UUFDeEIsU0FBUyxFQUFFLGdEQUFzQjtLQUNsQztDQUNGLENBQUM7QUFFVyxlQUFPLEdBQUcscUJBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMiLCJmaWxlIjoiYXBwL2FwcC5yb3V0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gICBmcm9tICcuL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBVc2Vyc0NvbXBvbmVudCB9ICAgICAgZnJvbSAnLi9jb21wb25lbnRzL3VzZXJzL3VzZXJzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFVzZXJEZXRhaWxDb21wb25lbnQgfSAgZnJvbSAnLi9jb21wb25lbnRzL3VzZXJEZXRhaWwvdXNlci1kZXRhaWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9naW5Db21wb25lbnQvbG9naW5Db21wb25lbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ291cnNlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL0NvdXJzZUNvbXBvbmVudC9jb3Vyc2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXR0ZW5kYW5jZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9BdHRlbmRhbmNlQ29tcG9uZW50L2F0dGVuZGFuY2UuY29tcG9uZW50JztcclxuaW1wb3J0IHtJbnNDb3Vyc2VDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9pbnN0cnVjdG9yQ291cnNlQ29tcG9uZW50L2luc0NvdXJzZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NlbGF0dGVuZGFuY2VDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9zZWxlY3RlZEluc0NvdXJzZS9zZWxhdHRlbmRhbmNlLmNvbXBvbmVudCc7XHJcblxyXG5cclxuY29uc3QgYXBwUm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogJycsXHJcbiAgICByZWRpcmVjdFRvOiAnL2xvZ2luJyxcclxuICAgIHBhdGhNYXRjaDogJ2Z1bGwnXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnbG9naW4nLFxyXG4gICAgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ2Rhc2hib2FyZCcsXHJcbiAgICBjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ2RldGFpbC86aWQnLFxyXG4gICAgY29tcG9uZW50OiBVc2VyRGV0YWlsQ29tcG9uZW50XHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAndXNlcnMnLFxyXG4gICAgY29tcG9uZW50OiBVc2Vyc0NvbXBvbmVudFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ2NvdXJzZXMnLFxyXG4gICAgY29tcG9uZW50OiBDb3Vyc2VDb21wb25lbnRcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICdjb3Vyc2VzLzppZCcsXHJcbiAgICBjb21wb25lbnQ6IENvdXJzZUNvbXBvbmVudFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ2F0dGVuZGFuY2UnLFxyXG4gICAgY29tcG9uZW50OiBBdHRlbmRhbmNlQ29tcG9uZW50XHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnaW5zY291cnNlcycsXHJcbiAgICBjb21wb25lbnQ6IEluc0NvdXJzZUNvbXBvbmVudFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ3NlbEluc0NvdXJzZS86aWQnLFxyXG4gICAgY29tcG9uZW50OiBTZWxhdHRlbmRhbmNlQ29tcG9uZW50XHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRpbmcgPSBSb3V0ZXJNb2R1bGUuZm9yUm9vdChhcHBSb3V0ZXMsIHsgdXNlSGFzaDogdHJ1ZSB9KTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
