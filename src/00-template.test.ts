import { part1, part2 } from "./00-template";
import { readFileSync } from "fs";

const data = readFileSync("src/data/00", "utf8").split("\n");

describe("00 - Template", () => {
  const sample = [""];
  // 2
  describe("Part 1", () => {
    it("Sample", () => {
      expect(part1(sample)).toEqual(sample);
    });

    it.skip("Answer", () => {
      expect(part1(data)).toEqual(data);
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
