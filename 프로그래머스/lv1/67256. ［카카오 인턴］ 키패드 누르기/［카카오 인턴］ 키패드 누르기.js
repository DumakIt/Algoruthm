const leftNumbers = [1, 4, 7];
const rightNumbers = [3, 6, 9];

function solution(numbers, hand) {
    let answer = "";
    
    const current = {
        left : 10,
        right : 12
    }
    
    for( let i = 0; i < numbers.length; i++ ) {
        if( leftNumbers.includes( numbers[i] ) ) {
            answer += "L";
            current[ "left" ] = numbers[i];
        
        } else if( rightNumbers.includes( numbers[i] ) ) {
            answer += "R";
            current[ "right" ] = numbers[i];
        
        } else {
            const centerObj = { ...current };
            
            for( let hand in centerObj ) {
                numbers[i] = numbers[i] === 0 ? 11 : numbers[i];
                
                let location = Math.abs( numbers[i] - centerObj[hand] );
                
                if( location >= 3 ) {
                    location = Math.trunc( location / 3 ) + location % 3;
                }
                centerObj[ hand ] = location;
            }
            
            if( centerObj[ "left" ] === centerObj[ "right" ] ) {
                answer += hand === "left" ? "L" : "R";
                current[ hand ] = numbers[i];
            
            } else {
                if( centerObj[ "left" ] > centerObj[ "right" ] ) {
                    answer += "R";
                    current[ "right" ] = numbers[i];
                
                } else {
                    answer += "L";
                    current[ "left" ] = numbers[i];
                }
            }
        }
    }
    return answer;
}