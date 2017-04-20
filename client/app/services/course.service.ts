
import {Injectable} from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Course} from "../models/course";

@Injectable()
export class CourseService {

    private coursesUrl = 'api/courses';  // URL to web api
    private insCourseUrl = 'api/insCourses';
    private getallStuUrl = 'api/allstudentsenrolled';
    private insAttendanceUrl = 'api/selCourseAttendance';

    constructor(private http: Http) { }

    saveToken(token : any) {
        localStorage['mean-token'] = token;
    }
     getToken() {
        return localStorage['mean-token'];
    }

    isLoggedin() {
        var token = this.getToken();
        var payload;
        if (token) {
            payload = token.split('.')[1];
            payload = atob(payload);
            payload = JSON.parse(payload);
            return payload.exp > Date.now() / 1000;
        } else {
            return false;
        }
    }

    removeToken() {
        localStorage['mean-token'] = null;
    }

    getCourses(): Promise<Course[]> {
        console.log("entered get Courses");
        var headers = new Headers();

        headers.append('Authorization', 'Bearer ' + this.getToken());
        return this.http.get(this.coursesUrl, {
            headers: headers
        })
            .toPromise()
            .then((response) => {
                return response.json();
            })
            .catch(this.handleError);
    }

    getallStudents(id: number) {
        return this.http.get(this.getallStuUrl + '/' + id)
            .toPromise()
            .then((response) => {
                console.log('Response2 is: ' + response.json());
                return response.json();
            })
            .catch(this.handleError);
    }
    getInsCourses(id: string) {
        return this.http.get(this.insCourseUrl + '/' + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    // save(course: Course): Promise<Course>  {
    //     if (course.course_id) {
    //         return this.put(course);
    //     }
    //     return this.post(user);
    // }
    saveNum(number: Number) {
            //  return this.http
            // .post(this.saveAttendanceCode, JSON.stringify(3))
            // .toPromise()
            // .then(response => {
            //     console.log("response" + JSON.stringify(response));
            //     return response.json();
            // })
            // .catch(this.handleError);

            //Selected course from instructor Course component must be here.
            let course : Course = { course_id: 123, courseName: 'AP', instructor: 'alala', attendanceCode: 0, studentsEnrolled : [17100180]};
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            let url = `${this.insAttendanceUrl}/${number}`;
            return this.http
            .put(url, JSON.stringify(course), {headers: headers})
            .toPromise()
            .then(() => number)
            .catch(this.handleError);
    }
    post(course: any): Promise<Course> {
        let headers = new Headers({
            'Content-Type': 'application/json'});

        return this.http
            .post(this.coursesUrl, JSON.stringify(course), {headers:headers})
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    // private put(user: User) {
    //     let headers = new Headers();
    //     headers.append('Content-Type', 'application/json');

    //     let url = `${this.usersUrl}/${user.rollNumber}`;

    //     return this.http
    //         .put(url, JSON.stringify(user), {headers: headers})
    //         .toPromise()
    //         .then(() => user)
    //         .catch(this.handleError);
    // }

    // delete(user: User) {
    //     let headers = new Headers();
    //     headers.append('Content-Type', 'application/json');

    //     let url = `${this.usersUrl}/${user.rollNumber}`;

    //     return this.http
    //         .delete(url, headers)
    //         .toPromise()
    //         .catch(this.handleError);
    // }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}