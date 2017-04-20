
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {User} from "../../models/user";
import {UserService} from "../../services/user.service";

@Component({
    selector: 'my-dashboard',
    templateUrl: './app/components/dashboard/dashboard.component.html',
    styleUrls: ['./app/components/dashboard/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    users: User[] = [];

    constructor(
        private router: Router,
        private userService: UserService) {
    }

    ngOnInit() {
        this.userService.getUsers()
            .then(users => this.users = users);
    }

    gotoDetail(user : User) {
        let link = ['/detail', user.username];
        this.router.navigate(link);
    }
}