import CourseRepository = require("./../repository/CourseRepository");
import ICourseBusiness = require("./interfaces/CourseBusiness");
import ICourseModel = require("./../model/interfaces/CourseModel");
import CourseModel = require("./../model/CourseModel");
import express = require("express");


class CourseBusiness implements ICourseBusiness {
    private _courseRepository: CourseRepository;

    constructor () {
        this._courseRepository = new CourseRepository();
    }
    login(item: ICourseModel, callback: (error: any, result: any) => void){
        // this._userRepository.login(item ,callback);     
    }
    register (item: ICourseModel, callback: (error: any, result: any) => void) {
        // this._userRepository.register(item, callback);
       }

    create (item: ICourseModel, callback: (error: any, result: any) => void) {
        this._courseRepository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this._courseRepository.retrieve(callback);
    }

    update (_id: string, item: ICourseModel, callback: (error: any, result: any) => void) {

        // this._courseRepository.findById(_id, (err, res) => {
        //     if(err) callback(err, res);

        //     else
        //         this._courseRepository.update(res._id, item, callback);

        // });
    }

    delete (_id: string, callback:(error: any, result: any) => void) {
        // this._courseRepository.delete(_id , callback);
    }

    findById (_id: any, callback: (error: any, result: ICourseModel) => void) {
        // this._courseRepository.findById(_id, callback);
    }
    track(_id: number, rollNumber: number, callback: (error: any, result: any) => void){
        console.log('CourseBusiness track');
        this._courseRepository.track(_id, rollNumber, callback);
    }
    countTotalSessions(_id: number, callback: (error:any, result: number)=> void){
        this._courseRepository.countTotalSessions(_id, callback);
    }
    retInsCourses(_id: string,callback: (error: any, result: any) => void){
        this._courseRepository.retInsCourses(_id, callback);
    }
    retStuCourses(_id: string, callback: (error: any, result: any) => void){
        console.log('cbuz retstu');
        this._courseRepository.retStuCourses(_id, callback);
    }
    allStudentsEnrolled(_id: number, callback: (error: any, result: any) => void) {
        this._courseRepository.allStudentsEnrolled(_id, callback);
    }
    saveCode(code: Number, item: Number, callback: (error: any, result: any) => void) {
        this._courseRepository.updateCode(code, item, callback);

    }

}


Object.seal(CourseBusiness);
export = CourseBusiness;