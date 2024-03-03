function solution(lottos, win_nums) {
  let answer = [1, 1];

  lottos.forEach((el, idx) => {
    if (answer[1] === 6) return;
    if (el === 0) return (answer[1] += 1);

    if (!win_nums.includes(el)) {
      answer[0] += 1;
      answer[1] += 1;
    }
  });

  return answer;
}
