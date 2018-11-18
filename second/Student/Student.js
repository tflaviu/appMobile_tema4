"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = __importDefault(require("../Person/Person"));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, schoolYear, averageGrade) {
        var _this = _super.call(this, name, age) || this;
        _this.schoolYear = schoolYear;
        _this.averageGrade = averageGrade;
        return _this;
    }
    Object.defineProperty(Student.prototype, "schoolYear", {
        get: function () {
            return this._schoolYear;
        },
        set: function (value) {
            this._schoolYear = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "averageGrade", {
        get: function () {
            return this._averageGrade;
        },
        set: function (value) {
            this._averageGrade = value;
        },
        enumerable: true,
        configurable: true
    });
    Student.prototype.toString = function () {
        return _super.prototype.toString.call(this) + " I am in " + this.schoolYear + " year of university, and my average grade is " + this.averageGrade + ".";
    };
    return Student;
}(Person_1.default));
exports.default = Student;
