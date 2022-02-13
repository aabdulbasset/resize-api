"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var resize_1 = __importDefault(require("../resize"));
describe("Check for correct inputs", function () {
    it("Should return -1 on invalid filename", function (done) {
        (0, resize_1.default)("testt", [10, 10]).then(function (result) {
            expect(result).toBe(-1);
            done();
        });
    });
    it("Should return -1 on invalid dimensions", function (done) {
        (0, resize_1.default)("test", [-10, 10]).then(function (result) {
            expect(result).toBe(-1);
            done();
        });
    });
    it("Should return 0 on correct dimensions and filename", function (done) {
        (0, resize_1.default)("test", [10, 10]).then(function (result) {
            expect(result).toBe(0);
            done();
        });
    });
});
