"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calc_1 = require("../src/calc");
describe("test add function", () => {
    it("should return 15 for add(10,5)", () => {
        expect((0, calc_1.add)(10, 5)).toBe(15);
    });
});
