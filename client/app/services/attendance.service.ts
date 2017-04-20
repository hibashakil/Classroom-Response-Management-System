
import {Injectable} from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Attendance} from "../models/attendance";
import {Course} from "../models/course";


@Injectable()
export class AttendanceService {

    private attendanceUrl = 'api/attendance';  // URL to web api
    private insAttendanceUrl = 'api/selCourseAttendance';
    private saveAttendanceCode = 'api/attendanceCode';

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
            return true;
        } else {
            return false;
        }
    }
    currentUser() {
        if (this.isLoggedin()) {
            var token = this.getToken();
            var payload = token.split('.')[1];
            payload = window.atob(payload);
            payload = JSON.parse(payload);
            return{
                username: payload.username
            };
        }

    }

    removeToken() {
        localStorage['mean-token'] = null;
    }

    getAttendance(): any {
        return this.http.get(this.attendanceUrl)
            .toPromise()
            .then((response) => {
                return response.json();
            })
            .catch(this.handleError);
    }
    getSelCourseAttendance(id: number) {
           return this.http.get(this.insAttendanceUrl + '/' + id)
            .toPromise()
            .then((response) => {
                // console.log('Response1 is: ' + JSON.stringify(response));
                return response.json();
            })
            .catch(this.handleError);

    }
    // trackAttendance(): any{
    //     let headers = new Headers({
    //         'Content-Type': 'application/json'});

    //     return this.http
    //         .post(this.attendanceUrl, JSON.stringify(Attendance), {headers:headers})
    //         .toPromise()
    //         .then(response => response.json().data)
    //         .catch(this.handleError);
    // }

    // getCourseAttendance(id: number) {
    //     return this.http.get(this.attendanceUrl + '/' + id)
    //         .toPromise()
    //         .then(response => response.json())
    //         .catch(this.handleError);
    // }

    // save(course: Course): Promise<Course>  {
    //     if (course.course_id) {
    //         return this.put(course);
    //     }
    //     return this.post(user);
    // }

    public post(attendance: any): any {
        let headers = new Headers({
            'Content-Type': 'application/json'});
        headers.append('Authorization', 'Bearer ' + this.getToken());

        return this.http
            .post(this.attendanceUrl, JSON.stringify(attendance), {headers:headers})
            .toPromise()
            .then(response => {
                console.log("response" + JSON.stringify(response));
                return response.json();
            })
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