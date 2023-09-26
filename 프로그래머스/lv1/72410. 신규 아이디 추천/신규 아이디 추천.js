function solution(new_id) {
  let reg = /[`~!@#$%^&*()|+\=?;:'",<>\{\}\[\]\\\/ ]/g;
    let answer = new_id.toLowerCase().replace(reg,"").replace(/\.{2,}/g,".")
    if(answer[0] === ".") {answer = answer.slice(1)}
    if(answer[answer.length - 1] === ".") {answer = answer.slice(0,answer.length - 1)}
    if(answer === "") {answer += "a"}
    if(answer.length > 15) {answer = answer.slice(0,15)}
      if(answer[answer.length - 1] === ".") {answer = answer.slice(0,answer.length - 1)}
  if(answer.length <= 2){
    for(let i = 0; i < answer.length;){
      answer+=answer[answer.length - 1]
      if(answer.length === 3) {
        break
      }
    }
  }
  return answer}