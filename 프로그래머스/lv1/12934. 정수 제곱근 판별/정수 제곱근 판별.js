function solution(n) {
  const result = Math.sqrt(n)
return result % 1 ? -1 : (result+1)*(result+1)
}