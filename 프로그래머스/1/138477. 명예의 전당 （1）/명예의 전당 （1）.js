function solution(k, score) {
  const answer = [];
  const HOF = [];

  for (let i = 0; i < score.length; i++) {
    HOF.push(score[i]);
    HOF.sort((a, b) => a - b);

    if (i + 1 > k) HOF.shift();

    answer.push(HOF[0]);
  }

  return answer;
}