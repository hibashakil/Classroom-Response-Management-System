"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var UserSchema = require("./../dataAccess/schemas/UserSchema");
var RepositoryBase = require("./BaseRepository");
var UserRepository = (function (_super) {
    __extends(UserRepository, _super);
    function UserRepository() {
        _super.call(this, UserSchema);
    }
    return UserRepository;
}(RepositoryBase));
Object.seal(UserRepository);
module.exports = UserRepository;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXBvc2l0b3J5L1VzZXJSZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLElBQU8sVUFBVSxXQUFXLG9DQUFvQyxDQUFDLENBQUM7QUFDbEUsSUFBTyxjQUFjLFdBQVcsa0JBQWtCLENBQUMsQ0FBQztBQUVwRDtJQUE4QixrQ0FBMEI7SUFDcEQ7UUFDSSxrQkFBTSxVQUFVLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUpBLEFBSUMsQ0FKNkIsY0FBYyxHQUkzQztBQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDNUIsaUJBQVMsY0FBYyxDQUFDIiwiZmlsZSI6ImFwcC9yZXBvc2l0b3J5L1VzZXJSZXBvc2l0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBVc2VyTW9kZWwgPSByZXF1aXJlKFwiLi8uLi9tb2RlbC9Vc2VyTW9kZWxcIik7XHJcbmltcG9ydCBJVXNlck1vZGVsID0gcmVxdWlyZShcIi4vLi4vbW9kZWwvaW50ZXJmYWNlcy9Vc2VyTW9kZWxcIik7XHJcbmltcG9ydCBVc2VyU2NoZW1hID0gcmVxdWlyZShcIi4vLi4vZGF0YUFjY2Vzcy9zY2hlbWFzL1VzZXJTY2hlbWFcIik7XHJcbmltcG9ydCBSZXBvc2l0b3J5QmFzZSA9IHJlcXVpcmUoXCIuL0Jhc2VSZXBvc2l0b3J5XCIpO1xyXG5cclxuY2xhc3MgVXNlclJlcG9zaXRvcnkgIGV4dGVuZHMgUmVwb3NpdG9yeUJhc2U8SVVzZXJNb2RlbD4ge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHN1cGVyKFVzZXJTY2hlbWEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5PYmplY3Quc2VhbChVc2VyUmVwb3NpdG9yeSk7XHJcbmV4cG9ydCA9IFVzZXJSZXBvc2l0b3J5OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
