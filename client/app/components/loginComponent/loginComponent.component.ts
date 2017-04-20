import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { ActivatedRoute, Params } from '@angular/router';

import {User} from "../../models/user";
import {UserService} from "../../services/user.service";

import{AuthenticationService } from '../../services/auth.service';



@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    templateUrl: './app/components/loginComponent/loginComponent.component.html'
})

export class LoginComponent {
    public user = new User('Basheer', '12345', 'Basheer', '50303');
    public errorMsg = '';
    error: any;
    response: any;

    constructor(
        private router: Router,
        private userService: UserService,
        public _service:AuthenticationService) {
    }

    login() {
        console.log(this.user);
        this._service.post({'username' : this.user.username, 'password' : this.user.password})
            .then(response => {
                console.log('the token is: ' + response.message);
                this._service.saveToken(response.token);
                // this._service.usernameSave = this.user.username;
                var letters = /^[0-9]+$/;
                if (this.user.username.match(letters)) {
                    this.router.navigate(['courses']);
                } else {
                    this.router.navigate(['inscourses']);
                }
            }).catch(error => {
                this.error = error;
                console.log(error);
                this.errorMsg = 'Failed to login.';
            });
        }
    }