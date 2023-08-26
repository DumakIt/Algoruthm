function solution(players, callings) {
    const keyObj = {}
    const valueObj = {}
    
    players.forEach((el, idx) => {
      keyObj[el] = idx
      valueObj[idx] = el
    })

    callings.forEach((el, idx)=>{
      const losePlayer = valueObj[keyObj[el] - 1]
 
      valueObj[keyObj[el]] = losePlayer
      valueObj[keyObj[losePlayer]] = el
      keyObj[el] -= 1
      keyObj[losePlayer] += 1
    })
    return Object.values(valueObj);
}