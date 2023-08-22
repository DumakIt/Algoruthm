function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }

  const answer = s.split("").filter((el) => {
    return Number.isNaN(Number(el));
  });
  return answer.length === 0;
}