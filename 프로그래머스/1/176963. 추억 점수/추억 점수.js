function solution(name, yearning, photo) {
  const point = {};
  const answer = [];

  for (let i = 0; i < name.length; i++) {
    point[name[i]] = yearning[i];
  }

  for (let i = 0; i < photo.length; i++) {
    let sum = 0;

    for (let j = 0; j < photo[i].length; j++) {
      if (point[photo[i][j]] !== undefined) {
        sum += point[photo[i][j]];
      } else {
        sum += 0;
      }
    }
    answer.push(sum);
  }
  return answer;
}