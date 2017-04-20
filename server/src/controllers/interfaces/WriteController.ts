

import express = require("express");
interface WriteController {
    login: express.RequestHandler;
    register: express.RequestHandler;
    create: express.RequestHandler;
    update: express.RequestHandler;
    delete: express.RequestHandler;

}

export = WriteController;