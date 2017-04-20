"use strict";
var UserBusiness = require("./../app/business/UserBusiness");
var passport = require('passport');
var UserController = (function () {
    function UserController() {
    }
    UserController.prototype.login = function (req, res) {
        try {
            var user = req.body;
            var userBusiness = new UserBusiness();
            userBusiness.login(user, function (error, result) {
                if (error)
                    res.send({ "error": "could not login" });
                else
                    res.send({ "success": "login successful" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your login" });
        }
    };
    UserController.prototype.register = function (req, res) {
        try {
            var user = req.body;
            var userBusiness = new UserBusiness();
            userBusiness.register(user, function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your register" });
        }
    };
    UserController.prototype.create = function (req, res) {
        try {
            var user = req.body;
            var userBusiness = new UserBusiness();
            userBusiness.create(user, function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    UserController.prototype.update = function (req, res) {
        try {
            var user = req.body;
            var _id = req.params._id;
            var userBusiness = new UserBusiness();
            userBusiness.update(_id, user, function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    UserController.prototype.delete = function (req, res) {
        try {
            var _id = req.params._id;
            var userBusiness = new UserBusiness();
            userBusiness.delete(_id, function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    UserController.prototype.retrieve = function (req, res) {
        try {
            var userBusiness = new UserBusiness();
            userBusiness.retrieve(function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    UserController.prototype.findById = function (req, res) {
        try {
            var _id = req.params._id;
            var userBusiness = new UserBusiness();
            userBusiness.findById(_id, function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    return UserController;
}());
module.exports = UserController;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL1VzZXJDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxJQUFPLFlBQVksV0FBVyxnQ0FBZ0MsQ0FBQyxDQUFDO0FBR2hFLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUVuQztJQUFBO0lBZ0hBLENBQUM7SUEvR0csOEJBQUssR0FBTCxVQUFNLEdBQW9CLEVBQUUsR0FBcUI7UUFDN0MsSUFBRyxDQUFDO1lBQ0EsSUFBSSxJQUFJLEdBQTJCLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDNUMsSUFBSSxZQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztZQUN0QyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxVQUFDLEtBQUssRUFBRSxNQUFNO2dCQUNuQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUM7b0JBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBQyxDQUFDLENBQUM7Z0JBQ2xELElBQUk7b0JBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFDLFNBQVMsRUFBRSxrQkFBa0IsRUFBQyxDQUFDLENBQUM7WUFDbkQsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUNBO1FBQUEsS0FBSyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEIsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRSxxQkFBcUIsRUFBQyxDQUFDLENBQUM7UUFDL0MsQ0FBQztJQUNMLENBQUM7SUFDRCxpQ0FBUSxHQUFSLFVBQVMsR0FBb0IsRUFBRSxHQUFxQjtRQUNoRCxJQUFHLENBQUM7WUFDQSxJQUFJLElBQUksR0FBMkIsR0FBRyxDQUFDLElBQUksQ0FBQztZQUM1QyxJQUFJLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1lBQ3RDLFlBQVksQ0FBQyxRQUFR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RyxDQUFDO1lBQ2pDLElBQUksWUFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7WUFDdEMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsVUFBQyxLQUFLLEVBQUUsTUFBTTtnQkFDckMsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDO29CQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQztnQkFDdkMsSUFBSTtvQkFBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FDQTtRQUFBLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBQyxDQUFDLENBQUM7UUFFakQsQ0FBQztJQUNMLENBQUM7SUFDTCxxQkFBQztBQUFELENBaEhBLEFBZ0hDLElBQUE7QUFDRCxpQkFBUyxjQUFjLENBQUMiLCJmaWxlIjoiY29udHJvbGxlcnMvVXNlckNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xyXG5pbXBvcnQgVXNlckJ1c2luZXNzID0gcmVxdWlyZShcIi4vLi4vYXBwL2J1c2luZXNzL1VzZXJCdXNpbmVzc1wiKTtcclxuaW1wb3J0IElCYXNlQ29udHJvbGxlciA9IHJlcXVpcmUoXCIuL0Jhc2VDb250cm9sbGVyXCIpO1xyXG5pbXBvcnQgSVVzZXJNb2RlbCA9IHJlcXVpcmUoXCIuLy4uL2FwcC9tb2RlbC9pbnRlcmZhY2VzL1VzZXJNb2RlbFwiKTtcclxudmFyIHBhc3Nwb3J0ID0gcmVxdWlyZSgncGFzc3BvcnQnKTtcclxuXHJcbmNsYXNzIFVzZXJDb250cm9sbGVyIGltcGxlbWVudHMgSUJhc2VDb250cm9sbGVyIDxVc2VyQnVzaW5lc3M+IHtcclxuICAgIGxvZ2luKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpIDogdm9pZCB7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICB2YXIgdXNlcjogSVVzZXJNb2RlbCA9IDxJVXNlck1vZGVsPnJlcS5ib2R5O1xyXG4gICAgICAgICAgICB2YXIgdXNlckJ1c2luZXNzID0gbmV3IFVzZXJCdXNpbmVzcygpO1xyXG4gICAgICAgICAgICB1c2VyQnVzaW5lc3MubG9naW4odXNlciwgKGVycm9yLCByZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvcikgcmVzLnNlbmQoe1wiZXJyb3JcIjogXCJjb3VsZCBub3QgbG9naW5cIn0pO1xyXG4gICAgICAgICAgICAgICAgZWxzZSByZXMuc2VuZCh7XCJzdWNjZXNzXCI6IFwibG9naW4gc3VjY2Vzc2Z1bFwifSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaChlKXtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICByZXMuc2VuZCh7XCJlcnJvclwiOiBcImVycm9yIGluIHlvdXIgbG9naW5cIn0pOyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZWdpc3RlcihyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSA6IHZvaWQge1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgdmFyIHVzZXI6IElVc2VyTW9kZWwgPSA8SVVzZXJNb2RlbD5yZXEuYm9keTtcclxuICAgICAgICAgICAgdmFyIHVzZXJCdXNpbmVzcyA9IG5ldyBVc2VyQnVzaW5lc3MoKTtcclxuICAgICAgICAgICAgdXNlckJ1c2luZXNzLnJlZ2lzdGVyKHVzZXIsIChlcnJvciwgcmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihlcnJvcikgcmVzLnNlbmQoe1wiZXJyb3JcIjogXCJlcnJvclwifSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHJlcy5zZW5kKHtcInN1Y2Nlc3NcIjogXCJzdWNjZXNzXCJ9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2goZSl7XHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICByZXMuc2VuZCh7XCJlcnJvclwiOiBcImVycm9yIGluIHlvdXIgcmVnaXN0ZXJcIn0pOyAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IHZvaWQge1xyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgdXNlcjogSVVzZXJNb2RlbCA9IDxJVXNlck1vZGVsPnJlcS5ib2R5O1xyXG4gICAgICAgICAgICB2YXIgdXNlckJ1c2luZXNzID0gbmV3IFVzZXJCdXNpbmVzcygpO1xyXG4gICAgICAgICAgICB1c2VyQnVzaW5lc3MuY3JlYXRlKHVzZXIsIChlcnJvciwgcmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihlcnJvcikgcmVzLnNlbmQoe1wiZXJyb3JcIjogXCJlcnJvclwifSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHJlcy5zZW5kKHtcInN1Y2Nlc3NcIjogXCJzdWNjZXNzXCJ9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgcmVzLnNlbmQoe1wiZXJyb3JcIjogXCJlcnJvciBpbiB5b3VyIHJlcXVlc3RcIn0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1cGRhdGUocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IHZvaWQge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciB1c2VyOiBJVXNlck1vZGVsID0gPElVc2VyTW9kZWw+cmVxLmJvZHk7XHJcbiAgICAgICAgICAgIHZhciBfaWQ6IHN0cmluZyA9IHJlcS5wYXJhbXMuX2lkO1xyXG4gICAgICAgICAgICB2YXIgdXNlckJ1c2luZXNzID0gbmV3IFVzZXJCdXNpbmVzcygpO1xyXG4gICAgICAgICAgICB1c2VyQnVzaW5lc3MudXBkYXRlKF9pZCwgdXNlciwgKGVycm9yLCByZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGVycm9yKSByZXMuc2VuZCh7XCJlcnJvclwiOiBcImVycm9yXCJ9KTtcclxuICAgICAgICAgICAgICAgIGVsc2UgcmVzLnNlbmQoe1wic3VjY2Vzc1wiOiBcInN1Y2Nlc3NcIn0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpICB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICByZXMuc2VuZCh7XCJlcnJvclwiOiBcImVycm9yIGluIHlvdXIgcmVxdWVzdFwifSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRlbGV0ZShyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogdm9pZCB7XHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIHZhciBfaWQ6IHN0cmluZyA9IHJlcS5wYXJhbXMuX2lkO1xyXG4gICAgICAgICAgICB2YXIgdXNlckJ1c2luZXNzID0gbmV3IFVzZXJCdXNpbmVzcygpO1xyXG4gICAgICAgICAgICB1c2VyQnVzaW5lc3MuZGVsZXRlKF9pZCwgKGVycm9yLCByZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGVycm9yKSByZXMuc2VuZCh7XCJlcnJvclwiOiBcImVycm9yXCJ9KTtcclxuICAgICAgICAgICAgICAgIGVsc2UgcmVzLnNlbmQoe1wic3VjY2Vzc1wiOiBcInN1Y2Nlc3NcIn0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpICB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICByZXMuc2VuZCh7XCJlcnJvclwiOiBcImVycm9yIGluIHlvdXIgcmVxdWVzdFwifSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHJpZXZlKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiB2b2lkIHtcclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgdmFyIHVzZXJCdXNpbmVzcyA9IG5ldyBVc2VyQnVzaW5lc3MoKTtcclxuICAgICAgICAgICAgdXNlckJ1c2luZXNzLnJldHJpZXZlKChlcnJvciwgcmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihlcnJvcikgcmVzLnNlbmQoe1wiZXJyb3JcIjogXCJlcnJvclwifSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHJlcy5zZW5kKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIHJlcy5zZW5kKHtcImVycm9yXCI6IFwiZXJyb3IgaW4geW91ciByZXF1ZXN0XCJ9KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmluZEJ5SWQocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IHZvaWQge1xyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgX2lkOiBzdHJpbmcgPSByZXEucGFyYW1zLl9pZDtcclxuICAgICAgICAgICAgdmFyIHVzZXJCdXNpbmVzcyA9IG5ldyBVc2VyQnVzaW5lc3MoKTtcclxuICAgICAgICAgICAgdXNlckJ1c2luZXNzLmZpbmRCeUlkKF9pZCwgKGVycm9yLCByZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGVycm9yKSByZXMuc2VuZCh7XCJlcnJvclwiOiBcImVycm9yXCJ9KTtcclxuICAgICAgICAgICAgICAgIGVsc2UgcmVzLnNlbmQocmVzdWx0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgcmVzLnNlbmQoe1wiZXJyb3JcIjogXCJlcnJvciBpbiB5b3VyIHJlcXVlc3RcIn0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0ID0gVXNlckNvbnRyb2xsZXI7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
