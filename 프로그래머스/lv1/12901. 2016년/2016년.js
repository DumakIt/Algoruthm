const month = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};
const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

function solution(a, b) {
  const days = new Array(a).fill(1).reduce((acc, cur, i) => {
    const mn = cur + i;
    return acc + (mn !== a ? month[mn] : b - 1);
  }, 0);
  return week[days % 7];
}
