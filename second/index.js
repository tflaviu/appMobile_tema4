"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Teacher_1 = __importDefault(require("./Teacher/Teacher"));
var Student_1 = __importDefault(require("./Student/Student"));
var student = new Student_1.default('Turcut Flaviu', 22, 3, 8.5);
var teacher = new Teacher_1.default('Andrei Iovan', 25, 'Tehnologii pentru dispozitive mobile', 'Teacher');
console.log(student.toString());
console.log(teacher.toString());
