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
require('rxjs/add/operator/map');
var AuthenticationService = (function () {
    // usernameSave: string;
    function AuthenticationService(http) {
        this.http = http;
        // constructor(
        //     private _router: Router) {}
        this.loginUrl = 'api/login'; // URL to web api
    }
    AuthenticationService.prototype.saveToken = function (token) {
        localStorage['mean-token'] = token;
    };
    AuthenticationService.prototype.getToken = function () {
        return localStorage['mean-token'];
    };
    AuthenticationService.prototype.isLoggedin = function () {
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
    AuthenticationService.prototype.currentUser = function () {
        if (this.isLoggedin()) {
            var token = this.getToken();
            var payload = token.split('.')[1];
            payload = atob(payload);
            payload = JSON.parse(payload);
            return {
                username: payload.username,
                password: payload.password
            };
        }
    };
    AuthenticationService.prototype.post = function (user) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json' });
        return this.http
            .post(this.loginUrl, user, { headers: headers })
            .toPromise()
            .then(function (response) {
            // this.usernameSave = response.json().username;
            // console.log('response at post is' + this.usernameSave);
            return response.json();
        })
            .catch(this.handleError);
    };
    AuthenticationService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    AuthenticationService.prototype.getStatus = function (user) {
        return this.http.get('api/status')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AuthenticationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUV6QyxxQkFBd0MsZUFBZSxDQUFDLENBQUE7QUFFeEQsUUFBTyw2QkFBNkIsQ0FBQyxDQUFBO0FBRXJDLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUkvQjtJQUlJLHdCQUF3QjtJQUV4QiwrQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFMbEMsZUFBZTtRQUNmLGtDQUFrQztRQUN0QixhQUFRLEdBQUcsV0FBVyxDQUFDLENBQUUsaUJBQWlCO0lBR2hCLENBQUM7SUFFbkMseUNBQVMsR0FBVCxVQUFVLEtBQVc7UUFDakIsWUFBWSxDQUFDLFlBQVksQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUN2QyxDQUFDO0lBQ0Qsd0NBQVEsR0FBUjtRQUNJLE1BQU0sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELDBDQUFVLEdBQVY7UUFDSSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUIsSUFBSSxPQUFPLENBQUM7UUFDWixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1IsT0FBTyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4QixPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM5QixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQzNDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQztJQUNMLENBQUM7SUFFRCwyQ0FBVyxHQUFYO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDNUIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3hCLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzlCLE1BQU0sQ0FBQTtnQkFDRixRQUFRLEVBQUcsT0FBTyxDQUFDLFFBQVE7Z0JBQzNCLFFBQVEsRUFBRyxPQUFPLENBQUMsUUFBUTthQUM5QixDQUFDO1FBRU4sQ0FBQztJQUNMLENBQUM7SUFHRCxvQ0FBSSxHQUFKLFVBQUssSUFBUztRQUNWLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDO1lBQ3RCLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxDQUFDLENBQUM7UUFFekMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxDQUFDO2FBQzVDLFNBQVMsRUFBRTthQUNYLElBQUksQ0FBQyxVQUFDLFFBQVE7WUFDWCxnREFBZ0Q7WUFDaEQsMERBQTBEO1lBQzFELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ1UsMkNBQVcsR0FBbkIsVUFBb0IsS0FBVTtRQUM3QixPQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNELHlDQUFTLEdBQVQsVUFBVSxJQUFVO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7YUFDN0IsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzthQUNqQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFsRUw7UUFBQyxpQkFBVSxFQUFFOzs2QkFBQTtJQTBGYiw0QkFBQztBQUFELENBekZBLEFBeUZDLElBQUE7QUF6RlksNkJBQXFCLHdCQXlGakMsQ0FBQSIsImZpbGUiOiJhcHAvc2VydmljZXMvYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEhlYWRlcnMsIEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi9tb2RlbHMvdXNlclwiO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25TZXJ2aWNlIHtcclxuLy8gY29uc3RydWN0b3IoXHJcbi8vICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge31cclxuICAgIHByaXZhdGUgbG9naW5VcmwgPSAnYXBpL2xvZ2luJzsgIC8vIFVSTCB0byB3ZWIgYXBpXHJcbiAgICAvLyB1c2VybmFtZVNhdmU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxyXG5cclxuICAgIHNhdmVUb2tlbih0b2tlbiA6IGFueSkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZVsnbWVhbi10b2tlbiddID0gdG9rZW47XHJcbiAgICB9XHJcbiAgICBnZXRUb2tlbigpIHtcclxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlWydtZWFuLXRva2VuJ107XHJcbiAgICB9XHJcbiAgICBpc0xvZ2dlZGluKCkge1xyXG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuZ2V0VG9rZW4oKTtcclxuICAgICAgICB2YXIgcGF5bG9hZDtcclxuICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgcGF5bG9hZCA9IHRva2VuLnNwbGl0KCcuJylbMV07XHJcbiAgICAgICAgICAgIHBheWxvYWQgPSBhdG9iKHBheWxvYWQpO1xyXG4gICAgICAgICAgICBwYXlsb2FkID0gSlNPTi5wYXJzZShwYXlsb2FkKTtcclxuICAgICAgICAgICAgcmV0dXJuIHBheWxvYWQuZXhwID4gRGF0ZS5ub3coKSAvIDEwMDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjdXJyZW50VXNlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0xvZ2dlZGluKCkpIHtcclxuICAgICAgICAgICAgdmFyIHRva2VuID0gdGhpcy5nZXRUb2tlbigpO1xyXG4gICAgICAgICAgICB2YXIgcGF5bG9hZCA9IHRva2VuLnNwbGl0KCcuJylbMV07XHJcbiAgICAgICAgICAgIHBheWxvYWQgPSBhdG9iKHBheWxvYWQpO1xyXG4gICAgICAgICAgICBwYXlsb2FkID0gSlNPTi5wYXJzZShwYXlsb2FkKTtcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWUgOiBwYXlsb2FkLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQgOiBwYXlsb2FkLnBhc3N3b3JkXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcG9zdCh1c2VyOiBhbnkpOiBhbnkge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLnBvc3QodGhpcy5sb2dpblVybCwgdXNlciwge2hlYWRlcnM6aGVhZGVyc30pXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMudXNlcm5hbWVTYXZlID0gcmVzcG9uc2UuanNvbigpLnVzZXJuYW1lO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3Jlc3BvbnNlIGF0IHBvc3QgaXMnICsgdGhpcy51c2VybmFtZVNhdmUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG4gICAgICAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignQW4gZXJyb3Igb2NjdXJyZWQnLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgZ2V0U3RhdHVzKHVzZXI6IFVzZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnYXBpL3N0YXR1cycpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgLy8gbG9nb3V0KCkge1xyXG4gIC8vICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpO1xyXG4gIC8vICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnbG9naW4nXSk7XHJcbiAgLy8gfVxyXG5cclxuLy8gICBsb2dpbih1c2VyLCBsaXN0KXtcclxuLy8gICAgIC8vYXV0aGVudGljYXRlZFVzZXIgd2lsbCBiZSB0aGUgdXNlciByZXR1cm5lZCBmcm9tIHRoZSBkYXRhYmFzZSBhZnRlciB2ZXJpZmljYXRpb25cclxuLy8gICAgIHZhciBhdXRoZW50aWNhdGVkVXNlciA9IGxpc3QuZmluZCh1ID0+IHUucm9sbE51bWJlciA9PT0gTnVtYmVyKHVzZXIucm9sbE51bWJlcikpO1xyXG4vLyAgICAgaWYgKGF1dGhlbnRpY2F0ZWRVc2VyICYmIGF1dGhlbnRpY2F0ZWRVc2VyLnBhc3N3b3JkID09PSB1c2VyLnBhc3N3b3JkKXtcclxuLy8gICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KGF1dGhlbnRpY2F0ZWRVc2VyKSk7XHJcbi8vICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ2hvbWUnXSk7XHJcbi8vICAgICAgIHJldHVybiB0cnVlO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuLy8gICB9XHJcblxyXG4gIC8vICBjaGVja0NyZWRlbnRpYWxzKCl7XHJcbiAgLy8gICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpID09PSBudWxsKXtcclxuICAvLyAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydsb2dpbiddKTtcclxuICAvLyAgIH1cclxuICAvLyB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
