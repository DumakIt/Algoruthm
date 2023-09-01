
function solution(n) {
  let A = 0
  let B = 1
  let C = 0
  
  for(let i = 1; i <= n; i++){
    C = (A + B) % 1234567
    A = B % 1234567
    B = C % 1234567
  }
    
    return A;
}