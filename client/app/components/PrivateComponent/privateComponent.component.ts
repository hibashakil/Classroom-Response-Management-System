import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { ActivatedRoute, Params } from '@angular/router';

import {User} from "../../models/user";
import {UserService} from "../../services/user.service";
import{AuthenticationService } from '../../services/auth.service';


@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    template: `
            <div class="container" >
                <div class="content">
                    <span>Congratulations, you have successfully logged in!!</span>
                    <br />
                    <a (click)="logout()" href="#">Click Here to logout</a>
                </div>
            </div>
    	`
})

export class PrivateComponent {

    constructor(
        private _service:AuthenticationService) {}

    ngOnInit() {
        // this._service.checkCredentials();
    }

    logout() {
        // this._service.logout();
    }
}