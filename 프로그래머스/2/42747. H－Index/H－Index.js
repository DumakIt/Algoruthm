function solution(citations) {
  let answer = 0;
  const sorted = citations.sort((a, b) => b - a);

  for (let i = 0; i < sorted.length; i++) {
    if(sorted[i] < i + 1) break
    answer = i + 1
  }

  return answer;
}