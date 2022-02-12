"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sharp_1 = __importDefault(require("sharp"));
function main(fileName, dimensions) {
    (0, sharp_1.default)("".concat(__dirname, "/../images/full/").concat(fileName, ".jpg"))
        .resize(dimensions[0], dimensions[1])
        .toFile("".concat(__dirname, "/../images/thumb/").concat(fileName, "_").concat(dimensions[0], "x").concat(dimensions[1], ".jpg"));
}
exports.default = main;
