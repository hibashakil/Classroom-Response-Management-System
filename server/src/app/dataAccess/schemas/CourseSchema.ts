import DataAccess = require('../DataAccess');
import ICourseModel = require("./../../model/interfaces/CourseModel");
var passportLocalMongoose = require('passport-local-mongoose');


var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;


class CourseSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            course_id : {
                type: Number,
                required: true,
                unique: true
            },
            courseName: {
                type: String,
                required: true,
                unique: false
            },
            instructor: {
                type: String,
                required: true,
                unique: false
            },
            studentsEnrolled: {
                type: [Number],
                required: true,
                unique: false
            },
            attendanceCode: {
                type: Number,
                required: true,
                unique: false
            }
        });

        schema.plugin(passportLocalMongoose);
        return schema;
    }
}

var cschema = mongooseConnection.model<ICourseModel>("Courses", CourseSchema.schema);

// var course1 = new cschema ({
//     course_id: 123,
//     courseName: 'AP',
//     instructor: 'alala',
//     studentsEnrolled: [17100180],
//     attendanceCode: 0
// });

// course1.save(function(err, course1) {
//   if (err) return console.error(err);
//   console.dir(course1);
// });

// var course2 = new cschema ({
//     course_id: 100,
//     courseName: 'Introduction to Pol',
//     instructor: 'Basheer',
//     studentsEnrolled: [17100180, 17100071, 1702123],
//     attendanceCode: 0
// });

// course2.save(function(err, course2) {
//   if (err) { return console.error(err); }
//   console.dir(course2);
// });


export = cschema; "";