function solution(arr1, arr2) {
  let result = []
    
    for (let i = 0; i<arr1.length; i++){
      const answer = []
        for(let j = 0; j < arr1[1].length; j++) {
            answer.push(arr1[i][j] + arr2[i][j])
        }
      result.push(answer)
    }
    return result;
}
