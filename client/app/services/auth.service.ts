import {Injectable} from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import {User} from "../models/user";
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';

@Injectable()
export class AuthenticationService {
// constructor(
//     private _router: Router) {}
    private loginUrl = 'api/login';  // URL to web api
    // usernameSave: string;

    constructor(private http: Http) { }

    saveToken(token : any) {
        localStorage['mean-token'] = token;
    }
    getToken() {
        return localStorage['mean-token'];
    }
    isLoggedin() {
        var token = this.getToken();
        var payload;
        if (token) {
            payload = token.split('.')[1];
            payload = atob(payload);
            payload = JSON.parse(payload);
            return payload.exp > Date.now() / 1000;
        } else {
            return false;
        }
    }

    currentUser() {
        if (this.isLoggedin()) {
            var token = this.getToken();
            var payload = token.split('.')[1];
            payload = atob(payload);
            payload = JSON.parse(payload);
            return{
                username : payload.username,
                password : payload.password
            };

        }
    }


    post(user: any): any {
        let headers = new Headers({
            'Content-Type': 'application/json'});

        return this.http
            .post(this.loginUrl, user, {headers:headers})
            .toPromise()
            .then((response) => {
                // this.usernameSave = response.json().username;
                // console.log('response at post is' + this.usernameSave);
                return response.json();
            })
            .catch(this.handleError);
    }
       private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
    getStatus(user: User) {
        return this.http.get('api/status')
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

  // logout() {
  //   localStorage.removeItem("user");
  //   this._router.navigate(['login']);
  // }

//   login(user, list){
//     //authenticatedUser will be the user returned from the database after verification
//     var authenticatedUser = list.find(u => u.rollNumber === Number(user.rollNumber));
//     if (authenticatedUser && authenticatedUser.password === user.password){
//       localStorage.setItem("user", JSON.stringify(authenticatedUser));
//       this._router.navigate(['home']);
//       return true;
//     }
//     return false;

//   }

  //  checkCredentials(){
  //   if (localStorage.getItem("user") === null){
  //       this._router.navigate(['login']);
  //   }
  // }
}