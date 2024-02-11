function solution(n, m, section) {
  let answer = 0;
  let paint = 0;

  section.forEach((el) => {
    if (paint < el) {
      paint = el + m - 1;
      answer += 1;
    }
  });
  return answer;
}