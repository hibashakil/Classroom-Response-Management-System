
import mongoose = require("mongoose");
import express = require("express");

interface Write<T> {
    register: (item: T, callback: (error: any, result: any) => void) => void;
    create: (item:T, callback: (error: any, result: any ) => void) => void;
    update:(_id: mongoose.Types.ObjectId, item:T, callback: (error: any, result: any)=> void) => void ;
    delete: (_id: string, callback: (error: any, result: any) => void) => void;

}

export = Write;