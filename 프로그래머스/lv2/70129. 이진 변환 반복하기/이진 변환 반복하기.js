function solution(s) {
    let [ count, remove ] = [ 0, 0 ];
    
    function recursion(s) {
        if( s === "1" ) {
            return [ count, remove ];
        }
        count++;
        
        s = s.split("").filter( num => {
            if( num === "0" ) remove++;
            return num !== "0";
        }).length
        
        return recursion( s.toString( 2 ) )
    }
    return recursion(s)
}