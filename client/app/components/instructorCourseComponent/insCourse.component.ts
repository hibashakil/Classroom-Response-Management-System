import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { Course } from "../../models/course";

import { CourseService } from "../../services/course.service";
import {AttendanceService} from "../../services/attendance.service";


@Component({
    selector: 'my-inscourses',
    templateUrl: './app/components/instructorCourseComponent/insCourse.component.html',
    styleUrls: ['./app/components/instructorCourseComponent/insCourse.component.css']
})

export class InsCourseComponent implements OnInit {
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
        this.courseService.getInsCourses('alala')
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
        let link = ['selInsCourse', this.selectedCourse.course_id ];
        this.router.navigate(link);
        // courseId 
        // this.courseService.setCourseId(this.selectedCourse.course_id);
        // console.log('course_id is: ' + this.courseService.getCourseId());
    }
    getAttendance() {
            this.router.navigate(['attendance']);
    }
    gotoDashboard() {
        let link = ['/dashboard'];
        this.router.navigate(link);
    }
}