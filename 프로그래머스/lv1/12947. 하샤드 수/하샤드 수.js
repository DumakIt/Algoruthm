function solution(x) {
  const answer = x
    .toString()
    .split("")
    .reduce((acc, cur) => {
      return acc + Number(cur);
    }, 0)
  return x % answer === 0
}