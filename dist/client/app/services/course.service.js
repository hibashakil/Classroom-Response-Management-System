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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var CourseService = (function () {
    function CourseService(http) {
        this.http = http;
        this.coursesUrl = 'api/courses'; // URL to web api
        this.insCourseUrl = 'api/insCourses';
        this.getallStuUrl = 'api/allstudentsenrolled';
        this.insAttendanceUrl = 'api/selCourseAttendance';
    }
    CourseService.prototype.saveToken = function (token) {
        localStorage['mean-token'] = token;
    };
    CourseService.prototype.getToken = function () {
        return localStorage['mean-token'];
    };
    CourseService.prototype.isLoggedin = function () {
        var token = this.getToken();
        var payload;
        if (token) {
            payload = token.split('.')[1];
            payload = atob(payload);
            payload = JSON.parse(payload);
            return payload.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    };
    CourseService.prototype.removeToken = function () {
        localStorage['mean-token'] = null;
    };
    CourseService.prototype.getCourses = function () {
        console.log("entered get Courses");
        var headers = new http_1.Headers();
        headers.append('Authorization', 'Bearer ' + this.getToken());
        return this.http.get(this.coursesUrl, {
            headers: headers
        })
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    CourseService.prototype.getallStudents = function (id) {
        return this.http.get(this.getallStuUrl + '/' + id)
            .toPromise()
            .then(function (response) {
            console.log('Response2 is: ' + response.json());
            return response.json();
        })
            .catch(this.handleError);
    };
    CourseService.prototype.getInsCourses = function (id) {
        return this.http.get(this.insCourseUrl + '/' + id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // save(course: Course): Promise<Course>  {
    //     if (course.course_id) {
    //         return this.put(course);
    //     }
    //     return this.post(user);
    // }
    CourseService.prototype.saveNum = function (number) {
        //  return this.http
        // .post(this.saveAttendanceCode, JSON.stringify(3))
        // .toPromise()
        // .then(response => {
        //     console.log("response" + JSON.stringify(response));
        //     return response.json();
        // })
        // .catch(this.handleError);
        //Selected course from instructor Course component must be here.
        var course = { course_id: 123, courseName: 'AP', instructor: 'alala', attendanceCode: 0, studentsEnrolled: [17100180] };
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.insAttendanceUrl + "/" + number;
        return this.http
            .put(url, JSON.stringify(course), { headers: headers })
            .toPromise()
            .then(function () { return number; })
            .catch(this.handleError);
    };
    CourseService.prototype.post = function (course) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json' });
        return this.http
            .post(this.coursesUrl, JSON.stringify(course), { headers: headers })
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
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
    CourseService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    CourseService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CourseService);
    return CourseService;
}());
exports.CourseService = CourseService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9jb3Vyc2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBRXpDLHFCQUF3QyxlQUFlLENBQUMsQ0FBQTtBQUN4RCxRQUFPLDZCQUE2QixDQUFDLENBQUE7QUFJckM7SUFPSSx1QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFMdEIsZUFBVSxHQUFHLGFBQWEsQ0FBQyxDQUFFLGlCQUFpQjtRQUM5QyxpQkFBWSxHQUFHLGdCQUFnQixDQUFDO1FBQ2hDLGlCQUFZLEdBQUcseUJBQXlCLENBQUM7UUFDekMscUJBQWdCLEdBQUcseUJBQXlCLENBQUM7SUFFbkIsQ0FBQztJQUVuQyxpQ0FBUyxHQUFULFVBQVUsS0FBVztRQUNqQixZQUFZLENBQUMsWUFBWSxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ3ZDLENBQUM7SUFDQSxnQ0FBUSxHQUFSO1FBQ0csTUFBTSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsa0NBQVUsR0FBVjtRQUNJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QixJQUFJLE9BQU8sQ0FBQztRQUNaLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDUixPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3hCLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDM0MsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFD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IiwiZmlsZSI6ImFwcC9zZXJ2aWNlcy9jb3Vyc2Uuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSGVhZGVycywgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcbmltcG9ydCB7Q291cnNlfSBmcm9tIFwiLi4vbW9kZWxzL2NvdXJzZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ291cnNlU2VydmljZSB7XG5cbiAgICBwcml2YXRlIGNvdXJzZXNVcmwgPSAnYXBpL2NvdXJzZXMnOyAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgICBwcml2YXRlIGluc0NvdXJzZVVybCA9ICdhcGkvaW5zQ291cnNlcyc7XG4gICAgcHJpdmF0ZSBnZXRhbGxTdHVVcmwgPSAnYXBpL2FsbHN0dWRlbnRzZW5yb2xsZWQnO1xuICAgIHByaXZhdGUgaW5zQXR0ZW5kYW5jZVVybCA9ICdhcGkvc2VsQ291cnNlQXR0ZW5kYW5jZSc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxuXG4gICAgc2F2ZVRva2VuKHRva2VuIDogYW55KSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZVsnbWVhbi10b2tlbiddID0gdG9rZW47XG4gICAgfVxuICAgICBnZXRUb2tlbigpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZVsnbWVhbi10b2tlbiddO1xuICAgIH1cblxuICAgIGlzTG9nZ2VkaW4oKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuZ2V0VG9rZW4oKTtcbiAgICAgICAgdmFyIHBheWxvYWQ7XG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgcGF5bG9hZCA9IHRva2VuLnNwbGl0KCcuJylbMV07XG4gICAgICAgICAgICBwYXlsb2FkID0gYXRvYihwYXlsb2FkKTtcbiAgICAgICAgICAgIHBheWxvYWQgPSBKU09OLnBhcnNlKHBheWxvYWQpO1xuICAgICAgICAgICAgcmV0dXJuIHBheWxvYWQuZXhwID4gRGF0ZS5ub3coKSAvIDEwMDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVUb2tlbigpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlWydtZWFuLXRva2VuJ10gPSBudWxsO1xuICAgIH1cblxuICAgIGdldENvdXJzZXMoKTogUHJvbWlzZTxDb3Vyc2VbXT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVudGVyZWQgZ2V0IENvdXJzZXNcIik7XG4gICAgICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblxuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQXV0aG9yaXphdGlvbicsICdCZWFyZXIgJyArIHRoaXMuZ2V0VG9rZW4oKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuY291cnNlc1VybCwge1xuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgICB9XG5cbiAgICBnZXRhbGxTdHVkZW50cyhpZDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuZ2V0YWxsU3R1VXJsICsgJy8nICsgaWQpXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXNwb25zZTIgaXM6ICcgKyByZXNwb25zZS5qc29uKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICAgIH1cbiAgICBnZXRJbnNDb3Vyc2VzKGlkOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5pbnNDb3Vyc2VVcmwgKyAnLycgKyBpZClcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICAgIH1cblxuICAgIC8vIHNhdmUoY291cnNlOiBDb3Vyc2UpOiBQcm9taXNlPENvdXJzZT4gIHtcbiAgICAvLyAgICAgaWYgKGNvdXJzZS5jb3Vyc2VfaWQpIHtcbiAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLnB1dChjb3Vyc2UpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHJldHVybiB0aGlzLnBvc3QodXNlcik7XG4gICAgLy8gfVxuICAgIHNhdmVOdW0obnVtYmVyOiBOdW1iZXIpIHtcbiAgICAgICAgICAgIC8vICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAgICAgICAvLyAucG9zdCh0aGlzLnNhdmVBdHRlbmRhbmNlQ29kZSwgSlNPTi5zdHJpbmdpZnkoMykpXG4gICAgICAgICAgICAvLyAudG9Qcm9taXNlKClcbiAgICAgICAgICAgIC8vIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlXCIgKyBKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpO1xuICAgICAgICAgICAgLy8gICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgLy8gLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuXG4gICAgICAgICAgICAvL1NlbGVjdGVkIGNvdXJzZSBmcm9tIGluc3RydWN0b3IgQ291cnNlIGNvbXBvbmVudCBtdXN0IGJlIGhlcmUuXG4gICAgICAgICAgICBsZXQgY291cnNlIDogQ291cnNlID0geyBjb3Vyc2VfaWQ6IDEyMywgY291cnNlTmFtZTogJ0FQJywgaW5zdHJ1Y3RvcjogJ2FsYWxhJywgYXR0ZW5kYW5jZUNvZGU6IDAsIHN0dWRlbnRzRW5yb2xsZWQgOiBbMTcxMDAxODBdfTtcbiAgICAgICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICAgICAgbGV0IHVybCA9IGAke3RoaXMuaW5zQXR0ZW5kYW5jZVVybH0vJHtudW1iZXJ9YDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgICAgICAgIC5wdXQodXJsLCBKU09OLnN0cmluZ2lmeShjb3Vyc2UpLCB7aGVhZGVyczogaGVhZGVyc30pXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IG51bWJlcilcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgICB9XG4gICAgcG9zdChjb3Vyc2U6IGFueSk6IFByb21pc2U8Q291cnNlPiB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgICAgICAgIC5wb3N0KHRoaXMuY291cnNlc1VybCwgSlNPTi5zdHJpbmdpZnkoY291cnNlKSwge2hlYWRlcnM6aGVhZGVyc30pXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKS5kYXRhKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICAgIH1cblxuICAgIC8vIHByaXZhdGUgcHV0KHVzZXI6IFVzZXIpIHtcbiAgICAvLyAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIC8vICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblxuICAgIC8vICAgICBsZXQgdXJsID0gYCR7dGhpcy51c2Vyc1VybH0vJHt1c2VyLnJvbGxOdW1iZXJ9YDtcblxuICAgIC8vICAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgLy8gICAgICAgICAucHV0KHVybCwgSlNPTi5zdHJpbmdpZnkodXNlciksIHtoZWFkZXJzOiBoZWFkZXJzfSlcbiAgICAvLyAgICAgICAgIC50b1Byb21pc2UoKVxuICAgIC8vICAgICAgICAgLnRoZW4oKCkgPT4gdXNlcilcbiAgICAvLyAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgICAvLyB9XG5cbiAgICAvLyBkZWxldGUodXNlcjogVXNlcikge1xuICAgIC8vICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgLy8gICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXG4gICAgLy8gICAgIGxldCB1cmwgPSBgJHt0aGlzLnVzZXJzVXJsfS8ke3VzZXIucm9sbE51bWJlcn1gO1xuXG4gICAgLy8gICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAvLyAgICAgICAgIC5kZWxldGUodXJsLCBoZWFkZXJzKVxuICAgIC8vICAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgLy8gICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gICAgLy8gfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FuIGVycm9yIG9jY3VycmVkJywgZXJyb3IpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
