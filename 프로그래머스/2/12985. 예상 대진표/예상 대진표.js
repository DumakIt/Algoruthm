function solution(n, a, b) {
  let answer = 0;
  let newA = a;
  let newB = b;

  while (newA !== newB) {
    if (newA % 2 !== 0) newA += 1;
    if (newB % 2 !== 0) newB += 1;

    newA /= 2;
    newB /= 2;
    answer += 1;
  }

  return answer;
}