function solution(s) {
  
  const obj = [{num:0, str:"zero"},
               {num:1, str:"one"},
               {num:2, str:"two"},
               {num:3, str:"three"},
               {num:4, str:"four"},
               {num:5, str:"five"},
               {num:6, str:"six"},
               {num:7, str:"seven"},
               {num:8, str:"eight"},
               {num:9, str:"nine"}]
  let strNum = ""
  let result = ""
  
  for (let i = 0; i < s.length; i++){
  strNum += s[i]
    for(let j = 0; j < 10; j++){
      if(obj[j].num === Number(strNum) || obj[j].str === strNum){
        result+=j
        strNum=""
        break
       } 
    }
}
    return Number(result)
  }