"use strict";
var express = require("express");
var UserController = require("./../../controllers/UserController");
var passport = require('passport');
var path = require('path');
var jwt = require('jsonwebtoken');
// var jwt2 = require('express-jwt');
var router = express.Router();
// var auth = jwt2({
//   secret: 'my_secret',
//   userProperty: 'payload'
// });
var UserRoutes = (function () {
    function UserRoutes() {
        this._userController = new UserController();
    }
    Object.defineProperty(UserRoutes.prototype, "routes", {
        get: function () {
            var controller = this._userController;
            router.get("/home", function (req, res) {
                res.sendFile(path.resolve(__dirname, '../client/index.html'));
            });
            router.post("/login", passport.authenticate('local', { failureFlash: false }), function (req, res) {
                var user = req.user;
                var token = jwt.sign({
                    _id: user._id,
                    username: user.username
                }, "my_secret");
                console.log("After authenticate");
                res.json({
                    success: true,
                    message: 'enjoy your token!',
                    token: token
                });
                //   res.send(req.user);
            });
            router.get("/users", controller.retrieve);
            router.post("/users", controller.create);
            router.put("/users/:_id", controller.update);
            router.get("/users/:_id", controller.findById);
            router.delete("/users/:_id", controller.delete);
            return router;
        },
        enumerable: true,
        configurable: true
    });
    return UserRoutes;
}());
Object.seal(UserRoutes);
module.exports = UserRoutes;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9yb3V0ZXMvVXNlclJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTyxPQUFPLFdBQVcsU0FBUyxDQUFDLENBQUM7QUFDcEMsSUFBTyxjQUFjLFdBQVcsb0NBQW9DLENBQUMsQ0FBQztBQUN0RSxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDbkMsSUFBTyxJQUFJLFdBQVcsTUFBTSxDQUFDLENBQUM7QUFDOUIsSUFBSSxHQUFHLEdBQU0sT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3JDLHFDQUFxQztBQUVyQyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDOUIsb0JBQW9CO0FBQ3BCLHlCQUF5QjtBQUN6Qiw0QkFBNEI7QUFDNUIsTUFBTTtBQUlOO0lBR0k7UUFDSSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUNELHNCQUFJLDhCQUFNO2FBQVY7WUFDSSxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBRXRDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFVBQVMsR0FBb0IsRUFBRSxHQUFxQjtnQkFDcEUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7WUFDbEUsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFDbkQsRUFBQyxZQUFZLEVBQUcsS0FBSyxFQUFDLENBQUMsRUFBRSxVQUFTLEdBQXFCLEVBQUUsR0FBc0I7Z0JBQ25FLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7b0JBQ2pCLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztvQkFDYixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7aUJBQzFCLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztnQkFDbEMsR0FBRyxDQUFDLElBQUksQ0FBQztvQkFDTCxPQUFPLEVBQUUsSUFBSTtvQkFDYixPQUFPLEVBQUUsbUJBQW1CO29CQUM1QixLQUFLLEVBQUUsS0FBSztpQkFDZixDQUFDLENBQUM7Z0JBQ0gsd0JBQXdCO1lBQ3hCLENBQUMsQ0FBQyxDQUFDO1lBRWYsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN6QyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9DLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVoRCxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2xCLENBQUM7OztPQUFBO0lBR0wsaUJBQUM7QUFBRCxDQXRDQSxBQXNDQyxJQUFBO0FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN4QixpQkFBUyxVQUFVLENBQUMiLCJmaWxlIjoiY29uZmlnL3JvdXRlcy9Vc2VyUm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcclxuaW1wb3J0IFVzZXJDb250cm9sbGVyID0gcmVxdWlyZShcIi4vLi4vLi4vY29udHJvbGxlcnMvVXNlckNvbnRyb2xsZXJcIik7XHJcbnZhciBwYXNzcG9ydCA9IHJlcXVpcmUoJ3Bhc3Nwb3J0Jyk7XHJcbmltcG9ydCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xyXG52YXIgand0ICAgID0gcmVxdWlyZSgnanNvbndlYnRva2VuJyk7XHJcbi8vIHZhciBqd3QyID0gcmVxdWlyZSgnZXhwcmVzcy1qd3QnKTtcclxuXHJcbnZhciByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG4vLyB2YXIgYXV0aCA9IGp3dDIoe1xyXG4vLyAgIHNlY3JldDogJ215X3NlY3JldCcsXHJcbi8vICAgdXNlclByb3BlcnR5OiAncGF5bG9hZCdcclxuLy8gfSk7XHJcblxyXG5cclxuXHJcbmNsYXNzIFVzZXJSb3V0ZXMge1xyXG4gICAgcHJpdmF0ZSBfdXNlckNvbnRyb2xsZXI6IFVzZXJDb250cm9sbGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLl91c2VyQ29udHJvbGxlciA9IG5ldyBVc2VyQ29udHJvbGxlcigpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHJvdXRlcyAoKSB7XHJcbiAgICAgICAgdmFyIGNvbnRyb2xsZXIgPSB0aGlzLl91c2VyQ29udHJvbGxlcjtcclxuXHJcbiAgICAgICAgcm91dGVyLmdldChcIi9ob21lXCIsIGZ1bmN0aW9uKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2Upe1xyXG4gICAgICAgICAgICByZXMuc2VuZEZpbGUocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL2NsaWVudC9pbmRleC5odG1sJykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJvdXRlci5wb3N0KFwiL2xvZ2luXCIsIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnbG9jYWwnLFxyXG4gICAgICAgIHtmYWlsdXJlRmxhc2ggOiBmYWxzZX0pLCBmdW5jdGlvbihyZXEgOiBleHByZXNzLlJlcXVlc3QsIHJlcyA6IGV4cHJlc3MuUmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXNlciA9IHJlcS51c2VyO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0b2tlbiA9IGp3dC5zaWduKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2lkOiB1c2VyLl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXIudXNlcm5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9LCBcIm15X3NlY3JldFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFmdGVyIGF1dGhlbnRpY2F0ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXMuanNvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdlbmpveSB5b3VyIHRva2VuIScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiB0b2tlblxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgcmVzLnNlbmQocmVxLnVzZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICByb3V0ZXIuZ2V0KFwiL3VzZXJzXCIsIGNvbnRyb2xsZXIucmV0cmlldmUpO1xyXG4gICAgICAgIHJvdXRlci5wb3N0KFwiL3VzZXJzXCIsIGNvbnRyb2xsZXIuY3JlYXRlKTtcclxuICAgICAgICByb3V0ZXIucHV0KFwiL3VzZXJzLzpfaWRcIiwgY29udHJvbGxlci51cGRhdGUpO1xyXG4gICAgICAgIHJvdXRlci5nZXQoXCIvdXNlcnMvOl9pZFwiLCBjb250cm9sbGVyLmZpbmRCeUlkKTtcclxuICAgICAgICByb3V0ZXIuZGVsZXRlKFwiL3VzZXJzLzpfaWRcIiwgY29udHJvbGxlci5kZWxldGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gcm91dGVyO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbk9iamVjdC5zZWFsKFVzZXJSb3V0ZXMpO1xyXG5leHBvcnQgPSBVc2VyUm91dGVzOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
