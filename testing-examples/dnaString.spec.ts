import { dnaString } from "./dnaString";

describe("DNA String", () => {
  it("should remove non cannonical dna base values", () => {
    const result = dnaString("CATGBCD");
    expect(result).toBe("CATGC");
  });

  it("should remove lower case letters", () => {
    const result = dnaString("CaTgBCD");
    expect(result).toBe("CTC");
  });

  it("should return an empty string if no character match", () => {
    const result = dnaString("catcBcD");
    expect(result).toBe("");
  });

  it("should return and empty string if input is empty string", () => {
    const result = dnaString("");
    expect(result).toBe("");
  });
});
