function solution(n, arr1, arr2) {
    let newArr1 = []
    let newAar2 = []
    let answer = [];
  
  for(let i = 0; i < arr1.length; i++){
    newArr1.push(arr1[i].toString(2).padStart(n,0))
    newAar2.push(arr2[i].toString(2).padStart(n,0))
  }
  for(let i = 0; i < newArr1.length; i++){
    let arr3 = [...newArr1[i]]
    for(let j = 0; j < newArr1[0].length; j++){
            
      if(newArr1[i][j] === "1" || newAar2[i][j] === "0") continue
      arr3.splice(j,1,"1")
    }
      answer.push(arr3.join("").replaceAll("1","#").replaceAll("0"," "))
  }
  return answer
}