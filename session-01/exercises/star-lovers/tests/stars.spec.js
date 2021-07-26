import { printStar, printArrayStar } from "../solutions/stars.imperative";

describe("Star Lovers::printStar", () => {
  it('debería retornar "***" para 3', () => {
    expect(printStar(3)).toBe("***");
  });

  it('debería retornar "*****" para 5', () => {
    expect(printStar(5)).toBe("*****");
  });

  it('debería retornar "" para 0', () => {
    expect(printStar(0)).toBe("");
  });
});

describe("Star Lovers::printArrayStar", () => {
  it('debería retornar ["*", "**", "***"] para 3', () => {
    expect(printArrayStar(3)).toStrictEqual(["*", "**", "***"]);
  });

  it('debería retornar ["*"] para 1', () => {
    expect(printArrayStar(1)).toStrictEqual(["*"]);
  });

  it("debería retornar [] para 0", () => {
    expect(printArrayStar(0)).toStrictEqual([]);
  });
});
