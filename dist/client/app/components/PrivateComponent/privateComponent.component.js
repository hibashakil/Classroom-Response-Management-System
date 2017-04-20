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
var auth_service_1 = require('../../services/auth.service');
var PrivateComponent = (function () {
    function PrivateComponent(_service) {
        this._service = _service;
    }
    PrivateComponent.prototype.ngOnInit = function () {
        // this._service.checkCredentials();
    };
    PrivateComponent.prototype.logout = function () {
        // this._service.logout();
    };
    PrivateComponent = __decorate([
        core_1.Component({
            selector: 'login-form',
            providers: [auth_service_1.AuthenticationService],
            template: "\n            <div class=\"container\" >\n                <div class=\"content\">\n                    <span>Congratulations, you have successfully logged in!!</span>\n                    <br />\n                    <a (click)=\"logout()\" href=\"#\">Click Here to logout</a>\n                </div>\n            </div>\n    \t"
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthenticationService])
    ], PrivateComponent);
    return PrivateComponent;
}());
exports.PrivateComponent = PrivateComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL1ByaXZhdGVDb21wb25lbnQvcHJpdmF0ZUNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF1QyxlQUFlLENBQUMsQ0FBQTtBQU92RCw2QkFBb0MsNkJBQTZCLENBQUMsQ0FBQTtBQWlCbEU7SUFFSSwwQkFDWSxRQUE4QjtRQUE5QixhQUFRLEdBQVIsUUFBUSxDQUFzQjtJQUFHLENBQUM7SUFFOUMsbUNBQVEsR0FBUjtRQUNJLG9DQUFvQztJQUN4QyxDQUFDO0lBRUQsaUNBQU0sR0FBTjtRQUNJLDBCQUEwQjtJQUM5QixDQUFDO0lBekJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRSxDQUFDLG9DQUFxQixDQUFDO1lBQ2xDLFFBQVEsRUFBRSx5VUFRUjtTQUNMLENBQUM7O3dCQUFBO0lBY0YsdUJBQUM7QUFBRCxDQVpBLEFBWUMsSUFBQTtBQVpZLHdCQUFnQixtQkFZNUIsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9Qcml2YXRlQ29tcG9uZW50L3ByaXZhdGVDb21wb25lbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi8uLi9tb2RlbHMvdXNlclwiO1xyXG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydHtBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdsb2dpbi1mb3JtJyxcclxuICAgIHByb3ZpZGVyczogW0F1dGhlbnRpY2F0aW9uU2VydmljZV0sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Db25ncmF0dWxhdGlvbnMsIHlvdSBoYXZlIHN1Y2Nlc3NmdWxseSBsb2dnZWQgaW4hITwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVwibG9nb3V0KClcIiBocmVmPVwiI1wiPkNsaWNrIEhlcmUgdG8gbG9nb3V0PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgXHRgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUHJpdmF0ZUNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfc2VydmljZTpBdXRoZW50aWNhdGlvblNlcnZpY2UpIHt9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5fc2VydmljZS5jaGVja0NyZWRlbnRpYWxzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nb3V0KCkge1xyXG4gICAgICAgIC8vIHRoaXMuX3NlcnZpY2UubG9nb3V0KCk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
