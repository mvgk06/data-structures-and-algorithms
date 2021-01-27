/*

Brute force

Time - O(n^2)
Space - O(n)

*/

const lengthOfLongestSubstring = function(s) {
  
    const set=new Set();
    let size=0;
    
    for(let i=0;i<s.length;i++){
        for(let j=i;j<s.length;j++){
            if(set.has(s.charAt(j))){
                break;
            } 
            else{
                set.add(s.charAt(j));
                size=Math.max(size,j-i+1);
            }
        }
        set.clear();
    }
    
    return size;
    
};

/*

Sliding window + Set

Time - O(n)
Space - O(n)

*/

const lengthOfLongestSubstring2 = function(s) {
  
    const set=new Set();
    let i=0, size=0;
    
    for(let j=0;j<s.length;j++){
        if(!set.has(s.charAt(j))){
            set.add(s.charAt(j));
        }
        else{
            while(i<s.length && set.has(s.charAt(j))){
                set.delete(s.charAt(i));
                i++;
            }
            set.add(s.charAt(j));
        }
        size=Math.max(size,j-i+1);
    }
    
    return size;
    
};