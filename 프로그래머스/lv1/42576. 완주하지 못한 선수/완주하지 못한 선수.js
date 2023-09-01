function solution(participant, completion) {
    const participantCopy = [...participant].sort()
    const completionCopy = [...completion].sort()
    
    const answer = participantCopy.filter( (el, i) => {
        return el !== completionCopy[i]
    })
    return answer[0];
}