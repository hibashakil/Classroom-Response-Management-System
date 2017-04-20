import {Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';

import {AttendanceService} from "../../services/attendance.service";
import {CourseService} from "../../services/course.service";

@Component({
  selector: 'my-attendance',
  templateUrl: `./app/components/selectedInsCourse/selattendance.component.html`,

})

export class SelattendanceComponent implements OnInit {
    @Input() num : number;
    error: any;
    allAttendance: any;

    constructor(
    private router: Router,
    private attendenceService: AttendanceService,
    private courseService : CourseService) {}
    ngOnInit() {
        this.attendenceService.getSelCourseAttendance(123)
            .then(resp => {
                this.allAttendance = resp;
            }).catch(error => {
                this.error = error;
                console.log(error);
            });
        }
        saveNumber() {
            this.courseService
                .saveNum(this.num)
                .then(resp => {
                    console.log("I think number is saved");
                }).catch(error => this.error = error); // TODO: Display error message
        }

}