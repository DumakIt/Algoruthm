function solution(s){
    const obj = {}
const answer = s.toLowerCase().split("").forEach(letter => {
  obj[letter] === undefined ? obj[letter] = 1 : obj[letter]++
})
return obj.p === obj.y};