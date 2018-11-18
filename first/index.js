"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AfisareDivizori_1 = __importDefault(require("./AfisareDivizori/AfisareDivizori"));
var numbers = new AfisareDivizori_1.default([10, 3, 25, 19, 113]);
console.log(numbers.showDivisors());
