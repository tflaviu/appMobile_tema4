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
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, className, title) {
        var _this = _super.call(this, name, age) || this;
        _this.className = className;
        _this.title = title;
        return _this;
    }
    Object.defineProperty(Teacher.prototype, "className", {
        get: function () {
            return this._className;
        },
        set: function (value) {
            this._className = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Teacher.prototype.toString = function () {
        return _super.prototype.toString.call(this) + " I am a teacher. My class is " + this.className + " and my title is " + this.title + ".";
    };
    return Teacher;
}(Person_1.default));
exports.default = Teacher;
