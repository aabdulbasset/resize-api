"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var index_1 = __importDefault(require("../index"));
describe("Endpoints check", function () {
    it("should return 404 on wrong endpoint", function () {
        (0, supertest_1.default)(index_1.default)
            .get("/api")
            .expect(404);
    });
    it("should return 200 on correct endpoint", function () {
        (0, supertest_1.default)(index_1.default)
            .get("/api/images")
            .expect(200);
    });
});
