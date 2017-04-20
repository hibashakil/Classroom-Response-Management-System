import DataAccess = require('../DataAccess');
import IUserModel = require("./../../model/interfaces/UserModel");
var passportLocalMongoose = require('passport-local-mongoose');
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;


class UserSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            name : {
                type: String,
                required: true
            },
            password: {
                type: String,
                required: true
            },
            username: {
                type: String,
                required: true,
                unique: true
            },
            phoneNumber: {
                type: String,
                required: true
            }
        });

        schema.plugin(passportLocalMongoose);
        return schema;
    }
}

var schema = mongooseConnection.model<IUserModel>("Users", UserSchema.schema);

// var student1 = new schema ({
//     name: 'Jeehan', 
//     password: 'abcd',
//     username: '17100180',
//     phoneNumber: '4845'

// });

// student1.save(function(err, student1) {
//   if (err) return console.error(err);
//   console.dir(student1);
// });

// var student2 = new schema ({
//     name: 'Shiza', 
//     password: 'efgh',
//     username: '17100190',
//     phoneNumber: 'dgdfg'

// });

// student2.save(function(err, student2) {
//   if (err) return console.error(err);
//   console.dir(student2);
// });

// var student3 = new schema ({
//     name: 'Hiba', 
//     password: 'djjfdjdf',
//     username: '17100170',
//     phoneNumber : 'sgdsgsg'

// });

// student3.save(function(err, student3) {
//   if (err) return console.error(err);
//   console.dir(student3);
// });
export = schema; "";