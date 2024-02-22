function solution(n, left, right) {
  let answer = [];
  let newLeft = left;

  while (newLeft <= right) {
    const row = Math.floor(newLeft / n);
    const column = newLeft % n;

    answer.push(Math.max(row, column) + 1);

    newLeft++;
  }

  return answer;
}