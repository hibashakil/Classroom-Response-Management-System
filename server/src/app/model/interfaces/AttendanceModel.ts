import mongoose = require("mongoose");

interface AttendanceModel extends mongoose.Document {
    course_id: number;
    session: number;
    date: number;
    studentsPresent : [number];
}

export = AttendanceModel;