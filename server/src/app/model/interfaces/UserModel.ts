
import mongoose = require("mongoose");

interface UserModel extends mongoose.Document {
    username: string;
    phoneNumber: string;
    name: string;
    password : string;
}

export = UserModel;