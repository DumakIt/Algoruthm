function solution(board, moves) {

    let movedBoard = []
    let count = 0
    let NewBoardArr = []

    for (let i = 0; i < board[0].length; i++){
      let arr = []
      for (let j = 0; j < board.length; j++){     
        arr.push(board[j][i])
      }

      NewBoardArr.push(arr)
    }


       
    for (let i = 0; i < moves.length;){
              
      let pick = NewBoardArr[moves[i]-1].shift()
      
      if(pick === undefined) {
        i++
        continue
      }
      if(pick === 0) {
        continue
      }
      if(movedBoard[movedBoard.length-1] === pick) {
  
        movedBoard.pop()
        count++
        i++
        continue
      }
      movedBoard.push(pick)
      i++
    }
    return count * 2
}