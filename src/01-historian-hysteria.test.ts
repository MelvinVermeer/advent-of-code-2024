import { readFileSync } from "fs";
import { part1, part2 } from "./01-historian-hysteria";

const data = readFileSync("src/data/01", "utf8").split("\n");

describe("01 - Historian Hysteria", () => {
  const sample = `3   4
4   3
2   5
1   3
3   9
3   3`.split("\n");

  describe("Part 1", () => {
    it("Sample", () => {
      expect(part1(sample)).toEqual(11);
    });

    it("Answer", () => {
      expect(part1(data)).toEqual(2580760);
    });
  });

  describe("Part 2", () => {
    it("Sample", () => {
      expect(part2(sample)).toEqual(31);
    });

    it("Answer", () => {
      expect(part2(data)).toEqual(25358365);
    });
  });
});
