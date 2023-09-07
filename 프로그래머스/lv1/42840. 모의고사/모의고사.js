function solution(answers) {
    const StudentsAnswer = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ]
    let result = [0,0,0]
    for(let i = 0; i < StudentsAnswer.length; i++) {
        let num = 0
        for(let j = 0; j < answers.length; j++){
            if(!StudentsAnswer[i][num]) num = 0
            
            if(StudentsAnswer[i][num] === answers[j]) {
                result[i] += 1
            }
            num++        
        }
    }
  const answer = []  
  const maxNum = Math.max(result[0] , result[1] , result[2])
  result.map((el,idx) => {
    if(el === maxNum){
      answer.push(idx+1)
    }
  })
  return answer
}
