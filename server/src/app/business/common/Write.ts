import express = require("express");

interface Write<T> {
    login: (item: T, callback: (error: any, result: any ) => void) => void;
    register: (item: T, callback: (error: any, result: any ) => void) => void;
    create: (item: T, callback: (error: any, result: any ) => void) => void;
    update:(_id: string, item: T, callback: (error: any, result: any)=> void) => void ;
    delete: (_id: string, callback: (error: any, result: any) => void) => void;

}

export = Write;