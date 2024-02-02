function solution(s) {
//   let str = s;
    
//   while (str.length !== 0) {
//     const splitStr = str.split("()").join("");
//     if (str.length === splitStr.length) return false;
//     str = splitStr;
//   }
    
//   return true;
    
//   해당 방식은 효율성 통과 실패
    
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push("(");
    if (s[i] === ")") {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }

  return stack.length === 0;
}