import { part1, part2 } from "./02-red-nosed-reports";
import { readFileSync } from "fs";

const data = readFileSync("src/data/02", "utf8").split("\n");
// 88
describe("02 - Red-Nosed Reports", () => {
  const sample = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`.split("\n");

  describe("Part 1", () => {
    it("Sample", () => {
      expect(part1(sample)).toEqual(2);
    });

    it("Answer", () => {
      expect(part1(data)).toEqual(299);
    });
  });

  describe("Part 2", () => {
    it("Sample", () => {
      expect(part2(sample)).toEqual(4);
    });

    it.skip("Answer", () => {
      expect(part2(data)).toEqual(data);
    });
  });
});
