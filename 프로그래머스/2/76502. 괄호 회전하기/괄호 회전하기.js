function solution(s) {
  let answer = 0;
  let newStr = s;

  for (let i = 0; i < newStr.length; i++) {
    const arr = [];

    for (let j = 0; j < newStr.length; j++) {
      const str = newStr[j];
      if ((str === ")" && arr[arr.length - 1] === "(") 
      || (str === "}" && arr[arr.length - 1] === "{") 
      || (str === "]" && arr[arr.length - 1] === "[")) {
        arr.pop();
      } else {
        arr.push(str);
      }
    }
    
    if (arr.length === 0) answer += 1;

    newStr = newStr.slice(1) + newStr[0];
  }
  return answer;
}