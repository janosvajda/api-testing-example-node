"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const APIDataRead_1 = __importDefault(require("../APIDataRead"));
const a = new APIDataRead_1.default(1, 2);
describe("test add function", () => {
    it("should return 15 for add(10,5)", () => {
        expect(a.test()).toBe(true);
    });
});
