function solution(number, limit, power) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    let strength = 0;

    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        if (i / j === j) {
          strength += 1;
        } else {
          strength += 2;
        }
      }
    }

    if (strength <= limit) {
      answer += strength;
    } else {
      answer += power;
    }
  }
  return answer;
}