"use strict";
var UserModel = (function () {
    function UserModel(userModel) {
        this._userModel = userModel;
    }
    Object.defineProperty(UserModel.prototype, "name", {
        get: function () {
            return this._userModel.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "password", {
        get: function () {
            return this._userModel.password;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "username", {
        get: function () {
            return this._userModel.username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "phoneNumber", {
        get: function () {
            return this._userModel.phoneNumber;
        },
        enumerable: true,
        configurable: true
    });
    return UserModel;
}());
Object.seal(UserModel);
module.exports = UserModel;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2RlbC9Vc2VyTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUdBO0lBSUksbUJBQVksU0FBcUI7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDaEMsQ0FBQztJQUNELHNCQUFJLDJCQUFJO2FBQVI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSwrQkFBUTthQUFaO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQ3BDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksK0JBQVE7YUFBWjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztRQUNwQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGtDQUFXO2FBQWY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDdkMsQ0FBQzs7O09BQUE7SUFFTCxnQkFBQztBQUFELENBdEJBLEFBc0JDLElBQUE7QUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3ZCLGlCQUFVLFNBQVMsQ0FBQyIsImZpbGUiOiJhcHAvbW9kZWwvVXNlck1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBJVXNlck1vZGVsID0gcmVxdWlyZSgnLi9pbnRlcmZhY2VzL1VzZXJNb2RlbCcpO1xyXG5cclxuY2xhc3MgVXNlck1vZGVsIHtcclxuXHJcbiAgICBwcml2YXRlIF91c2VyTW9kZWw6IElVc2VyTW9kZWw7XHJcblxyXG4gICAgY29uc3RydWN0b3IodXNlck1vZGVsOiBJVXNlck1vZGVsKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlck1vZGVsID0gdXNlck1vZGVsO1xyXG4gICAgfVxyXG4gICAgZ2V0IG5hbWUgKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJNb2RlbC5uYW1lO1xyXG4gICAgfVxyXG4gICAgZ2V0IHBhc3N3b3JkICgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91c2VyTW9kZWwucGFzc3dvcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHVzZXJuYW1lICgpOiBTdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91c2VyTW9kZWwudXNlcm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBob25lTnVtYmVyICgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91c2VyTW9kZWwucGhvbmVOdW1iZXI7XHJcbiAgICB9XHJcblxyXG59XHJcbk9iamVjdC5zZWFsKFVzZXJNb2RlbCk7XHJcbmV4cG9ydCA9ICBVc2VyTW9kZWw7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
