console.log("Hello, Advent Of Code!!");

export const part1 = (data: any): any => {
  const map: Record<string, Set<string>> = {};

  const lines = data.split("\n");

  lines.forEach((line: string) => {
    const [a, b] = line.split("-");
    if (!map[a]) {
      map[a] = new Set();
    }
    map[a].add(b);

    if (!map[b]) {
      map[b] = new Set();
    }
    map[b].add(a);
  });

  const groups = new Set();

  for (const key in map) {
    if (!key.startsWith("t")) continue;

    for (const value of map[key].values()) {
      for (const value2 of map[key].values()) {
        if (map[value].has(value2)) {
          groups.add([key, value, value2].sort().join("-"));
        }
      }
    }
  }

  return groups.size;
};

export const part2 = (data: any): any => {
  return data;
};
