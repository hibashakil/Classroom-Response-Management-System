import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }       from './app.routing';

import { UsersComponent }      from './components/users/users.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { UserDetailComponent }  from './components/userDetail/user-detail.component';
import {LoginComponent} from './components/loginComponent/loginComponent.component';

import { UserService }  from './services/user.service';
import { CourseService }  from './services/course.service';
import { AttendanceService }  from './services/attendance.service';
import { CourseComponent } from './components/CourseComponent/course.component';
import { AttendanceComponent } from './components/AttendanceComponent/attendance.component';
import {InsCourseComponent} from './components/instructorCourseComponent/insCourse.component';
import {SelattendanceComponent} from './components/selectedInsCourse/selattendance.component';
import {DatatableComponent} from './components/selectedInsCourse/datatable.component';
import {ColumnComponent} from './components/selectedInsCourse/column.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
    ],
  declarations: [
    AppComponent,
    UsersComponent,
    DashboardComponent,
    UserDetailComponent,
    LoginComponent,
    CourseComponent,
    AttendanceComponent,
    InsCourseComponent,
    SelattendanceComponent,
    DatatableComponent,
    ColumnComponent
  ],
  providers: [
    UserService,
    CourseService,
    AttendanceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

