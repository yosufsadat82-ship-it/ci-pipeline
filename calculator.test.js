import { add, subtract, multiply, divide } from "./calculator";

describe("Calculator", () => {
  test("add: 2 + 3 = 5", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("subtract: 10 - 4 = 6", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("multiply: 3 * 4 = 12", () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test("divide: 10 / 2 = 5", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("divide: throws on divide by zero", () => {
    expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
  });
});
