function solution(n) {
  let answer;
  const count = n.toString(2).split(1).length - 1;

  for (let i = n + 1; i < 1000000; i++) {
    const nextCount = i.toString(2).split(1).length - 1;
    if (count === nextCount) {
      answer = i;
      break;
    }
  }
  return answer;
}