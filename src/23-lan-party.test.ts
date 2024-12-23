import { part1, part2 } from "./23-lan-party";
import { readFileSync } from "fs";

const data = readFileSync("src/data/23", "utf8");

describe("23 - LAN Party", () => {
  const sample = `kh-tc
qp-kh
de-cg
ka-co
yn-aq
qp-ub
cg-tb
vc-aq
tb-ka
wh-tc
yn-cg
kh-ub
ta-co
de-co
tc-td
tb-wq
wh-td
ta-ka
td-qp
aq-cg
wq-ub
ub-vc
de-ta
wq-aq
wq-vc
wh-yn
ka-de
kh-ta
co-tc
wh-qp
tb-vc
td-yn`;

  describe("Part 1", () => {
    it("Sample", () => {
      expect(part1(sample)).toEqual(7);
    });

    it("Answer", () => {
      expect(part1(data)).toEqual(1327);
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
