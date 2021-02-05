/*

Sliding window

Time - O(n)
Space - O(1)

*/

const equalSubstring = function(s, t, maxCost) {
    
    let i=0, result=0, currCost=0;
    
    for(let j=0;j<s.length;j++){
        
        currCost+=Math.abs(s.charCodeAt(j)-t.charCodeAt(j));
        
        while(i<s.length && currCost>maxCost){
            currCost-=Math.abs(s.charCodeAt(i)-t.charCodeAt(i));
            i++;
        }
        
        result=Math.max(result,j-i+1);
    }
    
    return result;
    
};