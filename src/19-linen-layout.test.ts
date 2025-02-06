import { part1, part2 } from "./19-linen-layout";
import { readFileSync } from "fs";

const data = readFileSync("src/data/19", "utf8");
//
describe("19 - Linen Layout", () => {
  const sample = `r, wr, b, g, bwu, rb, gb, br

brwrr
bggr
gbbr
rrbgbr
ubwu
bwurrg
brgr
bbrgwb`;

  describe("Part 1", () => {
    it("Sample", () => {
      expect(part1(sample)).toEqual(6);
    });

    it("Answer", () => {
      expect(part1(data)).toEqual(272);
    });
  });

  describe("Part 2", () => {
    it("Sample", () => {
      expect(part2(sample)).toEqual(sample);
    });

    it.skip("Answer", () => {
      expect(part2(data)).toEqual(data);
    });
  });
});
