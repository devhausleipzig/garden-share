import { leapYear } from "./leapYear";

describe("Leap Year", () => {
  it("should return true if year is divisible by 400", () => {
    const result = leapYear(2000);
    expect(result).toBe(true);
  });

  it("should return false if year is divisible by 100 but not by 400", () => {
    const result = leapYear(1900);
    expect(result).toBe(false);
  });

  it("should return true if year is divisible by 4 but not by 100", () => {
    const result = leapYear(1996);
    expect(result).toBe(true);
  });

  it("should return false if year is not divisible by 4", () => {
    const result = leapYear(1995);
    expect(result).toBe(false);
  });
});
