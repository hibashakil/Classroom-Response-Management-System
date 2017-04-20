
import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/user";
import { ActivatedRoute, Params } from '@angular/router';
import {UserService} from "../../services/user.service";

@Component({
    selector: 'my-user-detail',
    templateUrl: './app/components/userDetail/user-detail.component.html'
})

export class UserDetailComponent implements OnInit {
    @Input() user: User;
    newUser = false;
    error: any;
    navigated = false; // true if navigated here


    constructor(
        private userService: UserService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            if (id === 'new') {
                this.newUser = true;
                this.user = new User(id, '123', '0', '');
            } else {
                this.newUser = false;
                this.userService.getUser(id)
                    .then(user => this.user = user);
            }
        });
    }

    save() {
        this.userService
            .save(this.user)
            .then(user => {
                this.user = user; // saved user, w/ id if new
                this.goBack();
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

    goBack() {
        window.history.back();
    }
}