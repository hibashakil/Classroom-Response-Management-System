export class Course {
    constructor(public course_id: number, public courseName: string,
    public instructor: string, public attendanceCode, public studentsEnrolled: [number]) {}
}