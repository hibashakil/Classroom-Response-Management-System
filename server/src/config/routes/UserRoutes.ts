import express = require("express");
import UserController = require("./../../controllers/UserController");
var passport = require('passport');
import path = require('path');
var jwt    = require('jsonwebtoken');
// var jwt2 = require('express-jwt');

var router = express.Router();
// var auth = jwt2({
//   secret: 'my_secret',
//   userProperty: 'payload'
// });



class UserRoutes {
    private _userController: UserController;

    constructor () {
        this._userController = new UserController();
    }
    get routes () {
        var controller = this._userController;

        router.get("/home", function(req: express.Request, res: express.Response){
            res.sendFile(path.resolve(__dirname, '../client/index.html'));
        });
        router.post("/login", passport.authenticate('local',
        {failureFlash : false}), function(req : express.Request, res : express.Response) {
                    var user = req.user;
                    var token = jwt.sign({
                        _id: user._id,
                        username: user.username
                    }, "my_secret");
                    console.log("After authenticate");
                    res.json({
                        success: true,
                        message: 'enjoy your token!',
                        token: token
                    });
                    //   res.send(req.user);
                    });

        router.get("/users", controller.retrieve);
        router.post("/users", controller.create);
        router.put("/users/:_id", controller.update);
        router.get("/users/:_id", controller.findById);
        router.delete("/users/:_id", controller.delete);

        return router;
    }


}

Object.seal(UserRoutes);
export = UserRoutes;