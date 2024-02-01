function solution(s) {
    const str = s.split(" ")
    
    const answer = str.map((el)=> {
      if(el === "") return el
      return el[0].toUpperCase() + el.slice(1).toLowerCase()
    })
    
    return answer.join(" ");
}
