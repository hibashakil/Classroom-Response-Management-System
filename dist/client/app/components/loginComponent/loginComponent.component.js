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
var router_1 = require('@angular/router');
var user_1 = require("../../models/user");
var user_service_1 = require("../../services/user.service");
var auth_service_1 = require('../../services/auth.service');
var LoginComponent = (function () {
    function LoginComponent(router, userService, _service) {
        this.router = router;
        this.userService = userService;
        this._service = _service;
        this.user = new user_1.User('Basheer', '12345', 'Basheer', '50303');
        this.errorMsg = '';
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log(this.user);
        this._service.post({ 'username': this.user.username, 'password': this.user.password })
            .then(function (response) {
            console.log('the token is: ' + response.message);
            _this._service.saveToken(response.token);
            // this._service.usernameSave = this.user.username;
            var letters = /^[0-9]+$/;
            if (_this.user.username.match(letters)) {
                _this.router.navigate(['courses']);
            }
            else {
                _this.router.navigate(['inscourses']);
            }
        }).catch(function (error) {
            _this.error = error;
            console.log(error);
            _this.errorMsg = 'Failed to login.';
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-form',
            providers: [auth_service_1.AuthenticationService],
            templateUrl: './app/components/loginComponent/loginComponent.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService, auth_service_1.AuthenticationService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2xvZ2luQ29tcG9uZW50L2xvZ2luQ29tcG9uZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXVDLGVBQWUsQ0FBQyxDQUFBO0FBQ3ZELHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBSXpDLHFCQUFtQixtQkFBbUIsQ0FBQyxDQUFBO0FBQ3ZDLDZCQUEwQiw2QkFBNkIsQ0FBQyxDQUFBO0FBRXhELDZCQUFvQyw2QkFBNkIsQ0FBQyxDQUFBO0FBVWxFO0lBTUksd0JBQ1ksTUFBYyxFQUNkLFdBQXdCLEVBQ3pCLFFBQThCO1FBRjdCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN6QixhQUFRLEdBQVIsUUFBUSxDQUFzQjtRQVJsQyxTQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDeEQsYUFBUSxHQUFHLEVBQUUsQ0FBQztJQVFyQixDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUFBLGlCQWtCSztRQWpCRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLFVBQVUsRUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsQ0FBQzthQUNqRixJQUFJLENBQUMsVUFBQSxRQUFRO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDakQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hDLG1EQUFtRDtZQUNuRCxJQUFJLE9BQU8sR0FBRyxVQUFVLENBQUM7WUFDekIsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDekMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEtBQUs7WUFDVixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLEtBQUksQ0FBQyxRQUFRLEdBQUcsa0JBQWtCLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBcENUO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRSxDQUFDLG9DQUFxQixDQUFDO1lBQ2xDLFdBQVcsRUFBRSwrREFBK0Q7U0FDL0UsQ0FBQzs7c0JBQUE7SUFpQ0UscUJBQUM7QUFBRCxDQS9CSixBQStCSyxJQUFBO0FBL0JRLHNCQUFjLGlCQStCdEIsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9sb2dpbkNvbXBvbmVudC9sb2dpbkNvbXBvbmVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uLy4uL21vZGVscy91c2VyXCI7XHJcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydHtBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbG9naW4tZm9ybScsXHJcbiAgICBwcm92aWRlcnM6IFtBdXRoZW50aWNhdGlvblNlcnZpY2VdLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FwcC9jb21wb25lbnRzL2xvZ2luQ29tcG9uZW50L2xvZ2luQ29tcG9uZW50LmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyB1c2VyID0gbmV3IFVzZXIoJ0Jhc2hlZXInLCAnMTIzNDUnLCAnQmFzaGVlcicsICc1MDMwMycpO1xyXG4gICAgcHVibGljIGVycm9yTXNnID0gJyc7XHJcbiAgICBlcnJvcjogYW55O1xyXG4gICAgcmVzcG9uc2U6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBfc2VydmljZTpBdXRoZW50aWNhdGlvblNlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXIpO1xyXG4gICAgICAgIHRoaXMuX3NlcnZpY2UucG9zdCh7J3VzZXJuYW1lJyA6IHRoaXMudXNlci51c2VybmFtZSwgJ3Bhc3N3b3JkJyA6IHRoaXMudXNlci5wYXNzd29yZH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGUgdG9rZW4gaXM6ICcgKyByZXNwb25zZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NlcnZpY2Uuc2F2ZVRva2VuKHJlc3BvbnNlLnRva2VuKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuX3NlcnZpY2UudXNlcm5hbWVTYXZlID0gdGhpcy51c2VyLnVzZXJuYW1lO1xyXG4gICAgICAgICAgICAgICAgdmFyIGxldHRlcnMgPSAvXlswLTldKyQvO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlci51c2VybmFtZS5tYXRjaChsZXR0ZXJzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnY291cnNlcyddKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydpbnNjb3Vyc2VzJ10pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yTXNnID0gJ0ZhaWxlZCB0byBsb2dpbi4nO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
