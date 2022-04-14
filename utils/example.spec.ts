import { add, fizzBuzz } from "./example";

describe("Add", () => {
  it("should return the added result of x and y", () => {
    const result = add(1, 2);
    expect(result).toBe(3);
  });
});

describe("fiiBuzz", () => {
  it("should return fizz if n is divisible by 3", () => {
    const result = fizzBuzz(3);
    expect(result).toBe("fizz");
  });
  it("should return buzz if n is divisible by 5", () => {
    const result = fizzBuzz(5);
    expect(result).toBe("buzz");
  });
  it("should return fizzBuzz if n is divisible by 3 and 5", () => {
    const result = fizzBuzz(15);
    expect(result).toBe("fizzBuzz");
  });
  it("should return n if n is not divisible by 3 or 5", () => {
    const result = fizzBuzz(2);
    expect(result).toBe(2);
  });
});

describe("Matchers", () => {
  it("toBe or toEqual", () => {
    const obj = { a: 2 };
    expect(obj).toBe(obj);
    expect(obj).toEqual({ a: 2 });
    expect({ a: 2 }).not.toEqual({ a: 3 });
    expect({ a: 2 }).toEqual({ a: 2, b: undefined });
    expect({ a: 2 }).not.toStrictEqual({ a: 2, b: undefined });
  });
});

describe("Arrays", () => {
  it("Array Matcher", () => {
    expect([1, 2, 3]).toContain(2);
    expect([{ a: 2 }, { b: 3 }]).not.toContain({ b: 3 });
    expect([{ a: 2 }, { b: 3 }]).toContainEqual({ b: 3 });
    expect([1, 2, 3, 4]).toEqual(expect.arrayContaining([1, 2, 4]));
  });
});
