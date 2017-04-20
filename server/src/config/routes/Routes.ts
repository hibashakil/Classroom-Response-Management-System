import express = require('express');
import path = require('path');

import UserRoutes = require('../routes/UserRoutes');
import CourseRoutes = require('../routes/CourseRoutes');
import AttendanceRoutes = require('../routes/AttendanceRoutes');


var app = express();

class Routes {

    get routes() {

        app.use("/", new UserRoutes().routes);
        app.use("/", new CourseRoutes().routes);
        app.use("/", new AttendanceRoutes().routes);
        //sir: 
        // app.use("/roster", )

        return app;
    }
}
export = Routes;