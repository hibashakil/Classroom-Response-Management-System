
import IUserModel = require('./interfaces/UserModel');

class UserModel {

    private _userModel: IUserModel;

    constructor(userModel: IUserModel) {
        this._userModel = userModel;
    }
    get name (): string {
        return this._userModel.name;
    }
    get password (): string {
        return this._userModel.password;
    }

    get username (): String {
        return this._userModel.username;
    }

    get phoneNumber (): string {
        return this._userModel.phoneNumber;
    }

}
Object.seal(UserModel);
export =  UserModel;