import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { Attendance } from "../../models/attendance";
import { AttendanceService } from "../../services/attendance.service";
import { AuthenticationService } from "../../services/auth.service";
import { CourseService } from "../../services/course.service";

@Component({
    selector: 'my-attendance',
    templateUrl: './app/components/attendanceComponent/attendance.component.html',
    styleUrls: ['./app/components/attendanceComponent/attendance.component.css'],
    providers: [AuthenticationService, CourseService, AttendanceService]

})

export class AttendanceComponent implements OnInit {
    attendances: any = [];
    // selectedAttendance: Attendance;
    error: any;
    public classMsg = '';
    course_id: number;
    username : string;
    total: number;
    present: number;
    public dateMsg = '';

    constructor(
        private router: Router,
        private courseService: CourseService,
        public authService : AuthenticationService,
        private attendanceService: AttendanceService) {
    }

    ngOnInit() {
        this.username = this.attendanceService.currentUser().username;
        this.course_id = 123;
        this.getPresentData();

}
    getPresentData() {
         this.attendanceService.post({'courseId' : 123 , 'rollNumber':this.username})
        .then( attendence => {
            this.total = attendence.totalSessions;
            console.log("total1: " + this.total);
            this.present = attendence.sessionsPresent[0].count;
            console.log("present1: " + this.present);
            this.classMsg = 'you were present in ' + this.present.toString() + '/' + this.total.toString() + ' classes';
            console.log("dates: " + attendence.absentDates[0].date);
            this.attendances = attendence.absentDates;
            }).catch(error => {
                this.error = error;
                console.log(error);
            });
    }
    // onSelect(attendance: Attendance) {
    //     this.attendanceService.post({course_id: 123, date: 22, studentsPresent:[17]});

    // }
    goBack() {
        window.history.back();
    }
   // gotoDashboard() {
   //     let link = ['/dashboard'];
    //     this.router.navigate(link);
    // }
}