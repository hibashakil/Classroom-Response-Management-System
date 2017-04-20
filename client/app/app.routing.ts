import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { UsersComponent }      from './components/users/users.component';
import { UserDetailComponent }  from './components/userDetail/user-detail.component';
import { LoginComponent } from './components/loginComponent/loginComponent.component';
import { CourseComponent } from './components/CourseComponent/course.component';
import { AttendanceComponent } from './components/AttendanceComponent/attendance.component';
import {InsCourseComponent} from './components/instructorCourseComponent/insCourse.component';
import {SelattendanceComponent} from './components/selectedInsCourse/selattendance.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: UserDetailComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'courses',
    component: CourseComponent
  },
  {
    path: 'courses/:id',
    component: CourseComponent
  },
  {
    path: 'attendance',
    component: AttendanceComponent
  },
  {
    path: 'inscourses',
    component: InsCourseComponent
  },
  {
    path: 'selInsCourse/:id',
    component: SelattendanceComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
