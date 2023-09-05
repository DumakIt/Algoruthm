function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      continue;
    }
    let code = s[i].charCodeAt() + n;
    if (code > 122 || (code > 90 && code - n < 97)) {
      code -= 26;
    }
    answer += String.fromCharCode(code);
  }

  return answer;
}