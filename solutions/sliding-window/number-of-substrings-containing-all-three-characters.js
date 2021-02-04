/*

Brute force

Time - O(n^2)
Space - O(1)

*/

const numberOfSubstrings = function(s) {
    
    const map=new Map();
    let count=0;
    
    for(let i=0;i<s.length;i++){
        for(let j=i;j<s.length;j++){
            if(map.has(s.charAt(j))){
                map.set(s.charAt(j),map.get(s.charAt(j))+1);
            } 
            else{
                map.set(s.charAt(j),1);
            }
            if(map.size===3){
                count++;
            }
        }
        map.clear();
    }
    
    return count;
};


/*

Sliding window + Map

Time - O(n)
Space - O(1)

*/

const numberOfSubstrings2 = function(s) {
    
    let i=0, result=0;
    const map=new Map();
    
    for(let j=0;j<s.length;j++){
        
        if(map.has(s.charAt(j))){
            map.set(s.charAt(j),map.get(s.charAt(j))+1);
        }
        else{
            map.set(s.charAt(j),1);
        }
        
        while(i<s.length && map.size===3){
            map.set(s.charAt(i),map.get(s.charAt(i))-1);
            if(map.get(s.charAt(i))===0){
                map.delete(s.charAt(i));
            }
            i++;
        }
        
        result+=i;
    }
    
    return result;
    
};