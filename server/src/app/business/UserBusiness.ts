/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import UserRepository = require("./../repository/UserRepository");
import IUserBusiness = require("./interfaces/UserBusiness");
import IUserModel = require("./../model/interfaces/UserModel");
import UserModel = require("./../model/UserModel");
import express = require("express");


class UserBusiness implements IUserBusiness {
    private _userRepository: UserRepository;

    constructor () {
        this._userRepository = new UserRepository();
    }
    login(item: IUserModel, callback: (error: any, result: any) => void){
        // this._userRepository.login(item ,callback);     
    }
    register (item: IUserModel, callback: (error: any, result: any) => void) {
        this._userRepository.register(item, callback);
       }

    create (item: IUserModel, callback: (error: any, result: any) => void) {
        this._userRepository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this._userRepository.retrieve(callback);
    }

    update (_id: string, item: IUserModel, callback: (error: any, result: any) => void) {

        this._userRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);

            else
                this._userRepository.update(res._id, item, callback);

        });
    }

    delete (_id: string, callback:(error: any, result: any) => void) {
        this._userRepository.delete(_id , callback);
    }

    findById (_id: string, callback: (error: any, result: IUserModel) => void) {
        this._userRepository.findById(_id, callback);
    }

}


Object.seal(UserBusiness);
export = UserBusiness;