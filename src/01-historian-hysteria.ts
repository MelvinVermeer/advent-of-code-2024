type K = [number[], number[]];
//s
export const part1 = (data: string[]): any => {
  const parsed = data.map((x) => x.split("   ").map((y) => parseInt(y, 10)));

  const [list1, list2] = parsed.reduce(
    ([l1, l2], [i1, i2]) => [
      [...l1, i1],
      [...l2, i2],
    ],
    [[], []] as K
  );

  list1.sort((a, b) => a - b);
  list2.sort((a, b) => a - b);
  //
  let diffs = 0;
  for (let i = 0; i < list1.length; i++) {
    diffs += Math.abs(list1[i] - list2[i]);
  }

  return diffs;
};

export const part2 = (data: string[]): any => {
  const parsed = data.map((x) => x.split("   ").map((y) => parseInt(y, 10)));

  const [list1, list2] = parsed.reduce(
    ([l1, l2], [i1, i2]) => [
      [...l1, i1],
      [...l2, i2],
    ],
    [[], []] as K
  );

  let diffs = 0;
  for (let i = 0; i < list1.length; i++) {
    const similarity = list2.filter((x) => x === list1[i]).length;
    diffs += similarity * list1[i];
  }

  return diffs;
};
