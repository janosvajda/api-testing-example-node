import APIDataRead from "../APIDataRead";

const a = new APIDataRead(1,2)

describe("test add function", () => {
  it("should return 15 for add(10,5)", () => {
    expect(a.test()).toBe(true);
  });
});