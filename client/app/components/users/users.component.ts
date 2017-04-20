/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */
import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";
import { Router } from '@angular/router';

@Component({
    selector: 'my-users',
    templateUrl: './app/components/users/users.component.html'
})

export class UsersComponent implements OnInit {

    users: User[];
    selectedUser: User;
    error: any;

    constructor(
        private router: Router,
        private userService: UserService) { }
    getUsers() {
        this.userService.getUsers().then(users => this.users = users);
    }
    ngOnInit() {
        this.getUsers();
    }
    onSelect(user: User) { this.selectedUser = user; }

    gotoDetail() {
        this.router.navigate(['/detail', this.selectedUser.username]);
    }

    addUser() {
        this.selectedUser = null;
        this.router.navigate(['/detail', 'new']);
    }

    deleteUser(user: User, event: any) {
        event.stopPropagation();
        this.userService
            .delete(user)
            .then(res => {
                this.users = this.users.filter(h => h !== user);
                if (this.selectedUser === user) { this.selectedUser = null; }
            })
            .catch(error => this.error = error);
    }
}
