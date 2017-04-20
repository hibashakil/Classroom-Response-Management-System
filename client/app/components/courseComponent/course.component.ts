import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { Course } from "../../models/course";

import { CourseService } from "../../services/course.service";
import {AttendanceService} from "../../services/attendance.service";


@Component({
    selector: 'my-courses',
    templateUrl: './app/components/courseComponent/course.component.html',
    styleUrls: ['./app/components/courseComponent/course.component.css']
})

export class CourseComponent implements OnInit {
    courses: Course[] = [];
    selectedCourse: Course;
    error: any;
    public total: number;
    public present: number;

    constructor(
        private router: Router,
        private courseService: CourseService,
        private attendenceService: AttendanceService) {
    }

    ngOnInit() {
        this.courseService.getCourses()
            .then(courses => {
            this.courses = courses;
            console.log('courses : ' + this.courses);
        }).catch(error => {
            this.error = error;
            console.log(error);
             });
    }

    onSelect(course: Course) {
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
    }
    getAttendance() {
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
    }
    gotoDashboard() {
        let link = ['/dashboard'];
        this.router.navigate(link);
    }
}