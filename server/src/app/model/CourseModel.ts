import ICourseModel = require('./interfaces/CourseModel');

class CourseModel {

    private _courseModel: ICourseModel;

    constructor(courseModel: ICourseModel) {
        this._courseModel = courseModel;
    }
    get course_id (): number {
        return this._courseModel.course_id;
    }
    get courseName (): string {
        return this._courseModel.courseName;
    }

    get instructor (): string {
        return this._courseModel.instructor;
    }

    get studentsEnrolled (): [number] {
        return this._courseModel.studentsEnrolled;
    }
}
Object.seal(CourseModel);
export =  CourseModel;