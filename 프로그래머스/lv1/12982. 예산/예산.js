function solution(d, budget) {
    let answer = 0;
    let result = 0
    d.sort((a,b)=>(a-b)).map((el)=>{  
      if(answer + el <= budget){
        answer+=el
        result++
      }
        return result  
    })
    return result
}