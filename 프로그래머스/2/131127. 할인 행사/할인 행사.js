function solution(want, number, discount) {
  let answer = 0;

  for (let i = 0; i < discount.length; i++) {
    if (!discount[i + 9]) break;

    const list = discount.slice(i, i + 10);
    const itemNum = {};

    list.forEach((el) => {
      itemNum[el] = (itemNum[el] || 0) + 1;
    });

    const isRegister = want.every((el, idx) => itemNum[el] >= number[idx]);

    if (isRegister) answer += 1;
  }
  return answer;
}