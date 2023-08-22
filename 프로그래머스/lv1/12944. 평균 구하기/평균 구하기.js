function solution(arr) {
    var answer = 0;
    let Division = 0
    for (let i = 0; i < arr.length; i++) {
        answer += arr[i]
        Division++
    }
    answer /= Division
    
    return answer;
}