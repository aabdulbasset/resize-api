"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var index_1 = __importDefault(require("../index"));
describe("Endpoints check", function () {
    it("should return 404 on wrong endpoint", function (done) {
        (0, supertest_1.default)(index_1.default)
            .get("/api")
            .expect(404)
            .end(function (err) {
            if (err)
                done.fail(err);
            else
                done();
        });
    });
    it("should return 400 on no or wrong query", function (done) {
        (0, supertest_1.default)(index_1.default)
            .get("/api/images")
            .expect(400)
            .end(function (err) {
            if (err)
                done.fail(err);
            else
                done();
        });
    });
});
describe("Check for correct integers", function () {
    it("should return 400 on 0", function (done) {
        (0, supertest_1.default)(index_1.default)
            .get("/api/images?filename=test&width=0&height=100")
            .expect(400)
            .end(function (err) {
            if (err)
                done.fail(err);
            else
                done();
        });
    });
    it("should return 400 on negative", function (done) {
        (0, supertest_1.default)(index_1.default)
            .get("/api/images?filename=test&width=-10&height=100")
            .expect(400)
            .end(function (err) {
            if (err)
                done.fail(err);
            else
                done();
        });
    });
    it("should return 400 on non numbers", function (done) {
        (0, supertest_1.default)(index_1.default)
            .get("/api/images?filename=test&width=NaN&height=100")
            .expect(400)
            .end(function (err) {
            if (err)
                done.fail(err);
            else
                done();
        });
    });
    it("should return 400 on fractions", function (done) {
        (0, supertest_1.default)(index_1.default)
            .get("/api/images?filename=test&width=10.1&height=100")
            .expect(400)
            .end(function (err) {
            if (err)
                done.fail(err);
            else
                done();
        });
    });
    it("should return 200 on correct integers", function (done) {
        (0, supertest_1.default)(index_1.default)
            .get("/api/images?filename=test&width=100&height=100")
            .expect(200)
            .end(function (err, res) {
            if (err)
                done.fail(err);
            else
                done();
        });
    });
});
describe("Check for correct files", function () {
    it("Should return 400 on wrong filename", function (done) {
        (0, supertest_1.default)(index_1.default)
            .get("/api/images?filename=nothing&width=100&height=100")
            .expect(400)
            .end(function (err) {
            if (err)
                done.fail(err);
            else
                done();
        });
    });
    it("Should return 400 on filename with special characters", function (done) {
        (0, supertest_1.default)(index_1.default)
            .get("/api/images?filename=nothi*ng&width=100&height=100")
            .expect(400)
            .end(function (err) {
            if (err)
                done.fail(err);
            else
                done();
        });
    });
});
