import DataAccess = require('../DataAccess');
import IAttendanceModel = require("./../../model/interfaces/AttendanceModel");
var passportLocalMongoose = require('passport-local-mongoose');


var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;


class AttendanceSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            course_id : {
                type: Number,
                required: true,
                unique: false,
            },
            session: {
                type: Number,
                required: true,
                unique: false,
            },
            date: {
                type: Number,
                required: true,
                unique: false,
            },
            studentsPresent: {
                type: [Number],
                required: true,
                unique: false,
            }
        });

        schema.plugin(passportLocalMongoose);
        return schema;
    }
}

var aschema = mongooseConnection.model<IAttendanceModel>("Attendance", AttendanceSchema.schema);

// var attendance2 = new aschema ({
//     course_id: 123,
//     session: 2,
//     date: 2311,
//     studentsPresent: [17100180, 17100031, 17100183]
// });

// attendance2.save(function(err, attendance2) {
//   if (err) return console.error(err);
//   console.dir(attendance2);
// });
// console.log("Attendance2 saved");
// var attendance3 = new aschema ({
//     course_id: 123,
//     session: 3,
//     date: 2411,
//     studentsPresent: [17100170, 17100190, 17100180]
// });

// attendance3.save(function(err, attendance3) {
//   if (err) return console.error(err);
//   console.dir(attendance3);
// });

// console.log("attendance3 saved");

// var attendance1 = new aschema ({
//     course_id: 123,
//     session: 1,
//     date: 2211,
//     studentsPresent: [171000170]

// });

// attendance1.save(function(err, attendance1) {
//   if (err) return console.error(err);
//   console.dir(attendance1);
// });


export = aschema; "";