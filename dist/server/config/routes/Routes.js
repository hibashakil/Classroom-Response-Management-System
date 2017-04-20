"use strict";
var express = require('express');
var UserRoutes = require('../routes/UserRoutes');
var CourseRoutes = require('../routes/CourseRoutes');
var AttendanceRoutes = require('../routes/AttendanceRoutes');
var app = express();
var Routes = (function () {
    function Routes() {
    }
    Object.defineProperty(Routes.prototype, "routes", {
        get: function () {
            app.use("/", new UserRoutes().routes);
            app.use("/", new CourseRoutes().routes);
            app.use("/", new AttendanceRoutes().routes);
            //sir: 
            // app.use("/roster", )
            return app;
        },
        enumerable: true,
        configurable: true
    });
    return Routes;
}());
module.exports = Routes;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9yb3V0ZXMvUm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFPLE9BQU8sV0FBVyxTQUFTLENBQUMsQ0FBQztBQUdwQyxJQUFPLFVBQVUsV0FBVyxzQkFBc0IsQ0FBQyxDQUFDO0FBQ3BELElBQU8sWUFBWSxXQUFXLHdCQUF3QixDQUFDLENBQUM7QUFDeEQsSUFBTyxnQkFBZ0IsV0FBVyw0QkFBNEIsQ0FBQyxDQUFDO0FBR2hFLElBQUksR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBRXBCO0lBQUE7SUFZQSxDQUFDO0lBVkcsc0JBQUksMEJBQU07YUFBVjtZQUVJLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxZQUFZLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLGdCQUFnQixFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUMsT0FBTztZQUNQLHVCQUF1QjtZQUV2QixNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ2YsQ0FBQzs7O09BQUE7SUFDTCxhQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUE7QUFDRCxpQkFBUyxNQUFNLENBQUMiLCJmaWxlIjoiY29uZmlnL3JvdXRlcy9Sb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcclxuaW1wb3J0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XHJcblxyXG5pbXBvcnQgVXNlclJvdXRlcyA9IHJlcXVpcmUoJy4uL3JvdXRlcy9Vc2VyUm91dGVzJyk7XHJcbmltcG9ydCBDb3Vyc2VSb3V0ZXMgPSByZXF1aXJlKCcuLi9yb3V0ZXMvQ291cnNlUm91dGVzJyk7XHJcbmltcG9ydCBBdHRlbmRhbmNlUm91dGVzID0gcmVxdWlyZSgnLi4vcm91dGVzL0F0dGVuZGFuY2VSb3V0ZXMnKTtcclxuXHJcblxyXG52YXIgYXBwID0gZXhwcmVzcygpO1xyXG5cclxuY2xhc3MgUm91dGVzIHtcclxuXHJcbiAgICBnZXQgcm91dGVzKCkge1xyXG5cclxuICAgICAgICBhcHAudXNlKFwiL1wiLCBuZXcgVXNlclJvdXRlcygpLnJvdXRlcyk7XHJcbiAgICAgICAgYXBwLnVzZShcIi9cIiwgbmV3IENvdXJzZVJvdXRlcygpLnJvdXRlcyk7XHJcbiAgICAgICAgYXBwLnVzZShcIi9cIiwgbmV3IEF0dGVuZGFuY2VSb3V0ZXMoKS5yb3V0ZXMpO1xyXG4gICAgICAgIC8vc2lyOiBcclxuICAgICAgICAvLyBhcHAudXNlKFwiL3Jvc3RlclwiLCApXHJcblxyXG4gICAgICAgIHJldHVybiBhcHA7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0ID0gUm91dGVzOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
