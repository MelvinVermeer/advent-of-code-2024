const smallDifference = (row: number[]): boolean => {
  return row.every(
    (n, i, arr) =>
      i === 0 || (Math.abs(n - arr[i - 1]) < 4 && Math.abs(n - arr[i - 1]) > 0)
  );
};
const allIncreasing = (row: number[]): boolean => {
  return row.every((n, i, arr) => i === 0 || n > arr[i - 1]);
};

const allDecreasing = (row: number[]): boolean => {
  return row.every((n, i, arr) => i === 0 || n < arr[i - 1]);
};

const isSafe = (row: number[]): boolean => {
  return (allIncreasing(row) || allDecreasing(row)) && smallDifference(row);
};

export const part1 = (data: string[]): any => {
  return data
    .map((row) => row.split(" ").map((n) => parseInt(n, 10)))
    .filter(isSafe).length;
};

export const part2 = (data: string[]): any => {
  const rows = data.map((row) => row.split(" ").map((n) => parseInt(n, 10)));

  const indexes = rows
    .map((row, i) => (isSafe(row) ? i : false))
    .filter((row) => row !== false);
  const indexes0 = rows
    .map((row, i) => (isSafe(row.splice(0, 5)) ? i : false))
    .filter((row) => row !== false);
  const indexes1 = rows
    .map((row, i) => (isSafe(row.splice(1, 5)) ? i : false))
    .filter((row) => row !== false);
  const indexes2 = rows
    .map((row, i) => (isSafe(row.splice(2, 5)) ? i : false))
    .filter((row) => row !== false);
  const indexes3 = rows
    .map((row, i) => (isSafe(row.splice(3, 5)) ? i : false))
    .filter((row) => row !== false);
  const indexes4 = rows
    .map((row, i) => (isSafe(row.splice(4, 5)) ? i : false))
    .filter((row) => row !== false);
  const indexes5 = rows
    .map((row, i) => (isSafe(row.splice(5, 5)) ? i : false))
    .filter((row) => row !== false);

  const uniqueIndexes = [
    ...new Set([
      ...indexes,
      ...indexes0,
      ...indexes1,
      ...indexes2,
      ...indexes3,
      ...indexes4,
      ...indexes5,
    ]),
  ];

  console.log({
    indexes,
    indexes0,
    indexes1,
    indexes2,
    indexes3,
    indexes4,
    indexes5,
    uniqueIndexes,
  });

  return uniqueIndexes.length;
};
