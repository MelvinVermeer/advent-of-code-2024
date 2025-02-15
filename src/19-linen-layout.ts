//hi
const canMakePattern = (towels: string[], pattern: string): boolean => {
  if (pattern.length === 0) return true;

  const toCheck = [pattern];
  const seen = new Set<string>();

  while (toCheck.length > 0) {
    const current = toCheck.pop();
    if (current === "" || current === undefined) return true;

    for (let i = 0; i < towels.length; i++) {
      const towel = towels[i];
      if (
        current.startsWith(towel) &&
        towel.length <= current.length &&
        !seen.has(current.slice(towel.length))
      ) {
        toCheck.push(current.slice(towel.length));
        seen.add(current.slice(towel.length));
      }
    }
  }

  return false;
};

export const part1 = (data: any): any => {
  const [rules, rest] = data.split("\n\n");
  const towels = rules.split(", ");
  const patterns = rest.split("\n");

  const possiblePatterns = patterns.filter((pattern: string) =>
    canMakePattern(towels, pattern)
  );

  return possiblePatterns.length;
};

export const part2 = (data: any): any => {
  return data;
};

// const a = `uwbr, bbgrb, wwbg, gugurur, rgurw, rbgw, bw, wurbru, bgrurw, gbw, bwgg, ubwg, wrgb, bwg, rwgug, bbgb, grbrbuug, ruw, grrrbu, ubwurbwu, rbg, buu, bru, rwugubg, brgwu, wr, uwb, wgwu, rubgwu, rrw, bwwrb, rrr, uww, gbgwrww, gbb, uugw, wurgr, wgbwbrur, grwbg, gwrbuw, wgu, wrr, ug, rbr, guur, gurru, urgwggw, wuwbwg, bwggrwgw, brurww, wbr, buww, bgrb, bbb, rgr, bgbbwbu, bububub, wbugu, gwgub, gubbwwrb, rrgwuuwu, uggb, rgbg, ubgbrw, rrrg, rr, gbuwb, wwbugwb, rbwbr, wbrrb, rug, b, bwwrwr, gug, bwrw, rbu, r, bgu, uub, bwb, ubwuuw, uuur, wgur, urw, gbbw, uuuru, ur, wburb, gwuuw, rbb, wuu, gru, urb, wb, bbwb, grgugw, rgruuur, rrwbwrg, uubru, ubrw, rbbgrgr, br, wub, ww, guu, gur, uug, bww, ubrwbgu, brwu, wrbgub, ggwwgwb, uuwuugrb, rwgrw, ggurr, gbg, rrwb, gbrbgr, bbruu, rrbrbw, wrurug, ruuw, wg, bwwwwb, bubg, ubr, bwu, uugub, ruuuubb, rggw, urr, urwgr, rww, wwggu, gbbwgw, ubggu, wbb, uugr, uubgu, uwg, rwwuru, uuurb, buuu, wbru, ubwr, urg, urrwrwgb, rbubb, uw, brrg, bgb, gwrguu, bgwu, bubwbg, rb, grb, uugubb, gww, bggbru, gwb, grwwwugb, gwggbg, bbg, ubrg, rgu, gwguu, ruwrwb, gggwb, bbbbug, ruwrurbw, rrbww, rwbww, grru, wwrwwub, guwurb, ugwbg, wgruuwwb, rg, uubgww, ruu, gbbbrbb, ggruu, gwgbwu, buw, uur, uuurbgr, uu, gwwrwgb, brrr, uwuw, guw, rwwr, gwuguub, wgb, brwwr, brub, uurg, ugb, rguub, brwbg, ruuuu, bggbgw, wrgwwwg, rrgw, uurrg, wwuwu, gugg, wwub, wuw, uuu, wugruu, rrgb, uwr, rbrwwb, grr, rrrb, bgg, ruwr, ggrurwr, ugg, bwr, rguwru, wgub, ugr, wrwu, gwbw, bwbur, wgbbr, rrrw, grwrgg, rgb, ugu, wwg, wugur, ggu, ubrwwgbu, uwub, urubwug, ugw, wguub, wbubugw, gugwwu, rwb, ubuu, gbu, wugbg, gbbu, rrg, brbr, urrg, guwub, bbr, wbbuburr, wwburwb, grbugbu, uuwbrw, wubr, wbbggww, ubub, ruru, grwbgbb, bbw, uru, wgg, ubrwu, rw, wurbu, uwrwb, rrb, rugggr, rgrwr, wrw, ggw, grgugu, uwug, rur, wruuw, bugbur, bb, uwggrrb, gbgr, rgbrw, bur, rbw, bub, wrb, rrgr, wrug, gr, uubw, gbr, rguuwbb, buubg, ugrbrwr, gubu, ru, wgr, ubggb, gwuu, rwgru, rwwrwg, grrr, gwu, guuuwww, ggugug, ubwrgbww, rgwbggu, brr, uubbr, wgwbw, ub, rrbru, uwuuur, rgwr, rruw, urgguw, urwb, uggr, bu, brwrw, gggub, uurb, buuw, ggb, wbrbgu, gurb, wuwbu, grg, buubbg, ggrubb, urwbwrb, uwugrgu, rurrw, ubw, wrg, u, www, bgr, wrbgw, wbg, rub, wwu, ubrgwg, bwuw, brb, ggr, bwrb, wggb, ubb, wrrrgw, urubrgwg, bbgr, uwwr, rwg, buwubw, bgw, brg, w, rubb, bwwwbb, ggg, bbbw, gbguw, guuw, grggr, wur, wug, grwwgrw, wbbwu, rru, bgbwgr, brw, gwg, uubwwur, wrwgw, wubwb, ugubrb, burb, ggwrr, rwbg, bwgugw, gbgwgwgr, uwgb, wu, gugww, wwuugrwb, rugu, wgw, rwub, uuwwbg, grrg, uuw, gu, gwgb, uwwur, rwbbbbb, gbur, uwugrwgg, rrgg, buwg, rwr, bwuwrgb, ubu, bgbrguwb, rbru, gw, bbbbg, ubuwuu, bbu, rgg, rwu, wbw, ggwbru, guwb, wwr, wuubg, ubrww, rwruru, urbww, gwrr, wrgwbu, bwbrugu, wwrww, grw, rgw, wwb, wguuwrw, wrgrg, wgug, uwwg, bbubwbru, wrwbu, gub, bwbg, wgrwr, gg, burbrbw, uggu, rgbgbw, gwr, rgrwbw, gguuur, urbw, wwrgw, wrggu, gbug, ubug

// wgrggwgruubbgbgurwrbgggwbuwwruburwrbrwwgrubg`;

// console.log(part1(a));
