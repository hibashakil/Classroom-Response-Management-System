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
var AttendanceService = (function () {
    function AttendanceService(http) {
        this.http = http;
        this.attendanceUrl = 'api/attendance'; // URL to web api
        this.insAttendanceUrl = 'api/selCourseAttendance';
        this.saveAttendanceCode = 'api/attendanceCode';
    }
    AttendanceService.prototype.saveToken = function (token) {
        localStorage['mean-token'] = token;
    };
    AttendanceService.prototype.getToken = function () {
        return localStorage['mean-token'];
    };
    AttendanceService.prototype.isLoggedin = function () {
        var token = this.getToken();
        var payload;
        if (token) {
            payload = token.split('.')[1];
            payload = atob(payload);
            payload = JSON.parse(payload);
            return true;
        }
        else {
            return false;
        }
    };
    AttendanceService.prototype.currentUser = function () {
        if (this.isLoggedin()) {
            var token = this.getToken();
            var payload = token.split('.')[1];
            payload = window.atob(payload);
            payload = JSON.parse(payload);
            return {
                username: payload.username
            };
        }
    };
    AttendanceService.prototype.removeToken = function () {
        localStorage['mean-token'] = null;
    };
    AttendanceService.prototype.getAttendance = function () {
        return this.http.get(this.attendanceUrl)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    AttendanceService.prototype.getSelCourseAttendance = function (id) {
        return this.http.get(this.insAttendanceUrl + '/' + id)
            .toPromise()
            .then(function (response) {
            // console.log('Response1 is: ' + JSON.stringify(response));
            return response.json();
        })
            .catch(this.handleError);
    };
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
    AttendanceService.prototype.post = function (attendance) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json' });
        headers.append('Authorization', 'Bearer ' + this.getToken());
        return this.http
            .post(this.attendanceUrl, JSON.stringify(attendance), { headers: headers })
            .toPromise()
            .then(function (response) {
            console.log("response" + JSON.stringify(response));
            return response.json();
        })
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
    AttendanceService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    AttendanceService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AttendanceService);
    return AttendanceService;
}());
exports.AttendanceService = AttendanceService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9hdHRlbmRhbmNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUV6QyxxQkFBd0MsZUFBZSxDQUFDLENBQUE7QUFDeEQsUUFBTyw2QkFBNkIsQ0FBQyxDQUFBO0FBTXJDO0lBTUksMkJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBSnRCLGtCQUFhLEdBQUcsZ0JBQWdCLENBQUMsQ0FBRSxpQkFBaUI7UUFDcEQscUJBQWdCLEdBQUcseUJBQXlCLENBQUM7UUFDN0MsdUJBQWtCLEdBQUcsb0JBQW9CLENBQUM7SUFFaEIsQ0FBQztJQUNuQyxxQ0FBUyxHQUFULFVBQVUsS0FBVztRQUNqQixZQUFZLENBQUMsWUFBWSxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ3ZDLENBQUM7SUFDQSxvQ0FBUSxHQUFSO1FBQ0csTUFBTSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsc0NBQVUsR0FBVjtRQUNJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QixJQUFJLE9BQU8sQ0FBQztRQUNaLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDUixPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3hCLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO0lBQ0wsQ0FBQztJQUNELHVDQUFXLEdBQVg7UUFDSSxFQUFFLENBQUMsQ0FB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NEI7SUFDNUIsb0NBQW9DO0lBQ3BDLElBQUk7SUFFSix1QkFBdUI7SUFDdkIsbUNBQW1DO0lBQ25DLDBEQUEwRDtJQUUxRCx1REFBdUQ7SUFFdkQsdUJBQXVCO0lBQ3ZCLGdDQUFnQztJQUNoQyx1QkFBdUI7SUFDdkIsb0NBQW9DO0lBQ3BDLElBQUk7SUFFSSx1Q0FBVyxHQUFuQixVQUFvQixLQUFVO1FBQzFCLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBbElMO1FBQUMsaUJBQVUsRUFBRTs7eUJBQUE7SUFtSWIsd0JBQUM7QUFBRCxDQWxJQSxBQWtJQyxJQUFBO0FBbElZLHlCQUFpQixvQkFrSTdCLENBQUEiLCJmaWxlIjoiYXBwL3NlcnZpY2VzL2F0dGVuZGFuY2Uuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSGVhZGVycywgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcbmltcG9ydCB7QXR0ZW5kYW5jZX0gZnJvbSBcIi4uL21vZGVscy9hdHRlbmRhbmNlXCI7XG5pbXBvcnQge0NvdXJzZX0gZnJvbSBcIi4uL21vZGVscy9jb3Vyc2VcIjtcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXR0ZW5kYW5jZVNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBhdHRlbmRhbmNlVXJsID0gJ2FwaS9hdHRlbmRhbmNlJzsgIC8vIFVSTCB0byB3ZWIgYXBpXG4gICAgcHJpdmF0ZSBpbnNBdHRlbmRhbmNlVXJsID0gJ2FwaS9zZWxDb3Vyc2VBdHRlbmRhbmNlJztcbiAgICBwcml2YXRlIHNhdmVBdHRlbmRhbmNlQ29kZSA9ICdhcGkvYXR0ZW5kYW5jZUNvZGUnO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cbiAgICBzYXZlVG9rZW4odG9rZW4gOiBhbnkpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlWydtZWFuLXRva2VuJ10gPSB0b2tlbjtcbiAgICB9XG4gICAgIGdldFRva2VuKCkge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlWydtZWFuLXRva2VuJ107XG4gICAgfVxuXG4gICAgaXNMb2dnZWRpbigpIHtcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5nZXRUb2tlbigpO1xuICAgICAgICB2YXIgcGF5bG9hZDtcbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgICBwYXlsb2FkID0gdG9rZW4uc3BsaXQoJy4nKVsxXTtcbiAgICAgICAgICAgIHBheWxvYWQgPSBhdG9iKHBheWxvYWQpO1xuICAgICAgICAgICAgcGF5bG9hZCA9IEpTT04ucGFyc2UocGF5bG9hZCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjdXJyZW50VXNlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNMb2dnZWRpbigpKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmdldFRva2VuKCk7XG4gICAgICAgICAgICB2YXIgcGF5bG9hZCA9IHRva2VuLnNwbGl0KCcuJylbMV07XG4gICAgICAgICAgICBwYXlsb2FkID0gd2luZG93LmF0b2IocGF5bG9hZCk7XG4gICAgICAgICAgICBwYXlsb2FkID0gSlNPTi5wYXJzZShwYXlsb2FkKTtcbiAgICAgICAgICAgIHJldHVybntcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogcGF5bG9hZC51c2VybmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmVtb3ZlVG9rZW4oKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZVsnbWVhbi10b2tlbiddID0gbnVsbDtcbiAgICB9XG5cbiAgICBnZXRBdHRlbmRhbmNlKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYXR0ZW5kYW5jZVVybClcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gICAgfVxuICAgIGdldFNlbENvdXJzZUF0dGVuZGFuY2UoaWQ6IG51bWJlcikge1xuICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmluc0F0dGVuZGFuY2VVcmwgKyAnLycgKyBpZClcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1Jlc3BvbnNlMSBpczogJyArIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG5cbiAgICB9XG4gICAgLy8gdHJhY2tBdHRlbmRhbmNlKCk6IGFueXtcbiAgICAvLyAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7XG4gICAgLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XG5cbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgIC8vICAgICAgICAgLnBvc3QodGhpcy5hdHRlbmRhbmNlVXJsLCBKU09OLnN0cmluZ2lmeShBdHRlbmRhbmNlKSwge2hlYWRlcnM6aGVhZGVyc30pXG4gICAgLy8gICAgICAgICAudG9Qcm9taXNlKClcbiAgICAvLyAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKS5kYXRhKVxuICAgIC8vICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICAgIC8vIH1cblxuICAgIC8vIGdldENvdXJzZUF0dGVuZGFuY2UoaWQ6IG51bWJlcikge1xuICAgIC8vICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmF0dGVuZGFuY2VVcmwgKyAnLycgKyBpZClcbiAgICAvLyAgICAgICAgIC50b1Byb21pc2UoKVxuICAgIC8vICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC8vICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICAgIC8vIH1cblxuICAgIC8vIHNhdmUoY291cnNlOiBDb3Vyc2UpOiBQcm9taXNlPENvdXJzZT4gIHtcbiAgICAvLyAgICAgaWYgKGNvdXJzZS5jb3Vyc2VfaWQpIHtcbiAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLnB1dChjb3Vyc2UpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHJldHVybiB0aGlzLnBvc3QodXNlcik7XG4gICAgLy8gfVxuXG4gICAgcHVibGljIHBvc3QoYXR0ZW5kYW5jZTogYW55KTogYW55IHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdBdXRob3JpemF0aW9uJywgJ0JlYXJlciAnICsgdGhpcy5nZXRUb2tlbigpKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAgICAgICAucG9zdCh0aGlzLmF0dGVuZGFuY2VVcmwsIEpTT04uc3RyaW5naWZ5KGF0dGVuZGFuY2UpLCB7aGVhZGVyczpoZWFkZXJzfSlcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2VcIiArIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gICAgfVxuXG4gICAgLy8gcHJpdmF0ZSBwdXQodXNlcjogVXNlcikge1xuICAgIC8vICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgLy8gICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXG4gICAgLy8gICAgIGxldCB1cmwgPSBgJHt0aGlzLnVzZXJzVXJsfS8ke3VzZXIucm9sbE51bWJlcn1gO1xuXG4gICAgLy8gICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAvLyAgICAgICAgIC5wdXQodXJsLCBKU09OLnN0cmluZ2lmeSh1c2VyKSwge2hlYWRlcnM6IGhlYWRlcnN9KVxuICAgIC8vICAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgLy8gICAgICAgICAudGhlbigoKSA9PiB1c2VyKVxuICAgIC8vICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICAgIC8vIH1cblxuICAgIC8vIGRlbGV0ZSh1c2VyOiBVc2VyKSB7XG4gICAgLy8gICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAvLyAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cbiAgICAvLyAgICAgbGV0IHVybCA9IGAke3RoaXMudXNlcnNVcmx9LyR7dXNlci5yb2xsTnVtYmVyfWA7XG5cbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgIC8vICAgICAgICAgLmRlbGV0ZSh1cmwsIGhlYWRlcnMpXG4gICAgLy8gICAgICAgICAudG9Qcm9taXNlKClcbiAgICAvLyAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgICAvLyB9XG5cbiAgICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQW4gZXJyb3Igb2NjdXJyZWQnLCBlcnJvcik7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
