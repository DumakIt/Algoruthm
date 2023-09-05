function solution(n, lost, reserve) {
  const losted = [...lost];
  lost = lost
    .filter((student) => !reserve.includes(student))
    .sort((a, b) => (a > b ? 1 : -1)); // a - b;
  reserve = reserve
    .filter((student) => !losted.includes(student))
    .sort((a, b) => (a > b ? 1 : -1)); // a - b;

  let answer = n - lost.length;

  for (let i = 0; i < lost.length; i++) {
    if (reserve.includes(lost[i] - 1)) {

      reserve.splice(reserve.indexOf(lost[i] - 1), 1);
      answer++;
    } else if (reserve.includes(lost[i] + 1)) {

      reserve.splice(reserve.indexOf(lost[i] + 1), 1);
      answer++;
    }
  }
  return answer;
}