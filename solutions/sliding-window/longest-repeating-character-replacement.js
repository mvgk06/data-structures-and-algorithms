/*

Sliding window + Map

Time - O(n)
Space - O(1)

*/

const characterReplacement = function(s, k) {
    
    const map=new Map();
    let i=0, max=0, maxRepeatingCount=0;
    
    
    for(let j=0;j<s.length;j++){
        if(map.has(s[j])){
            map.set(s[j],map.get(s[j])+1);
        }
        else{
            map.set(s[j],1);
        }
        maxRepeatingCount=Math.max(maxRepeatingCount,map.get(s[j]));
        while(i<s.length && (j-i+1)-maxRepeatingCount>k){
            map.set(s[i],map.get(s[i])-1);
            if(map.get(s[i])===0){
                map.delete(s[i]);
            }
            i++;
        }
        max=Math.max(max,j-i+1);
    }
    
    return max;
    
};