function solution(food) {
  let list = [];

  for (let i = 1; i < food.length; i++) {
    if (food[i] !== "1") {
      const num = Number(food[i]) % 2 === 0 ? food[i] : food[i] - 1;
      const newList = new Array(num / 2).fill(i);

      list = [...list, ...newList];
    }
  }

  return [...list, 0, ...list.reverse()].join("");
}