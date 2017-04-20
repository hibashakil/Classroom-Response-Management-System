import mongoose = require("mongoose");

interface CourseModel extends mongoose.Document {
    course_id: number;
    courseName: string;
    instructor: string;
    studentsEnrolled : [number];
}

export = CourseModel;