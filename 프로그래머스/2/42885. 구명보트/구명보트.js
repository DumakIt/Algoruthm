function solution(people, limit) {
  const sortPeople = people.sort((a, b) => a - b);
  let answer = 0;
  let left = 0;
  let right = people.length - 1;

  while (left <= right) {
    if (sortPeople[left] + sortPeople[right] <= limit) {
      left += 1;
      right -= 1;
    } else {
      right -= 1;
    }
    answer += 1;
  }

  return answer;
}